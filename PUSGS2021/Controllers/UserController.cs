using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using PUSGS2021.Data;
using PUSGS2021.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PUSGS2021.Controllers
{
  [Route("api/[controller]")]
  public class UserController : Controller
  {

    private readonly DefaultConnection _context;

    public UserController(DefaultConnection context)
    {
      _context = context;
    }

    // GET: api/<controller>
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }

    // GET api/<controller>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/<controller>
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/<controller>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/<controller>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }

    [HttpPost]
    [Route("Login")]
    public IActionResult Login([FromBody] LoginModel loginForm)
    {
      if (loginForm == null)
      {
        return BadRequest("Invalid client request");
      }


      foreach (UserModel user in _context.Users)
      {
        if (user.Username == loginForm.UserName && user.Password == loginForm.Password)
        {
          var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretKeysdfsdfsdf"));
          var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

          var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Role, getRole(user)),
                        new Claim(ClaimTypes.Name, user.Username)
                    };

          var tokenOptions = new JwtSecurityToken(
              issuer: "https://localhost:5001",
              audience: "https://localhost:5001",
              claims: claims,
              expires: DateTime.Now.AddMinutes(60),
              signingCredentials: signingCredentials
              );

          var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

          CurrentUserModel loggedInUser = new CurrentUserModel
          {
            Token = tokenString,
            Username = user.Username,
            NameAndLastname = user.NameAndLastname,
            Type = user.UserType
          };

          return Ok(loggedInUser);
        }
      }

      return Unauthorized();
    }

    [HttpPost, DisableRequestSizeLimit]
    [Route("Upload")]
    public IActionResult Upload()
    {
      try
      {
        var file = Request.Form.Files[0];
        var folderName = Path.Combine("Resources", "Images");
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        if (file.Length > 0)
        {
          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          var fullPath = Path.Combine(pathToSave, fileName);

          var dbPath = Path.Combine(folderName, fileName);
          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);
          }
          return Ok(new { dbPath });
        }
        else
        {
          return BadRequest();
        }
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }

    [HttpPut]
    [Route("ChangeProfile")]
    public async Task<ActionResult<UserModel>> ChangeProfile([FromBody] UserModel userF)
    {
      if(ModelState.IsValid)
            {
        string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;


        UserModel u1 = new UserModel();
        foreach (UserModel user in _context.Users)
        {
          if (user.Username == username)
          {
            u1 = user;
            break;

          }
        }

        if (u1.UserType == null)
        {
          u1.UserType = "Worker";
        }

        if (u1.UserType.Equals(userF.UserType))
        {
          u1.Username = userF.Username;
          u1.NameAndLastname = userF.NameAndLastname;
          u1.Email = userF.Email;
          u1.Address = userF.Address;
          if (userF.ImageData != null)
          {
            u1.ImageData = userF.ImageData;
          }

          await _context.SaveChangesAsync();
          return CreatedAtAction("ChangeProfile", u1);
        }
        else
        {
          u1.Username = userF.Username;
          u1.NameAndLastname = userF.NameAndLastname;
          u1.Email = userF.Email;
          u1.Address = userF.Address;
          UserRequestModel newRequest = new UserRequestModel
          {
            Username = userF.Username,
            NameAndLastname = userF.NameAndLastname,
            Email = userF.Email,
            Address = userF.Address,
            BirthDate = userF.BirthDate,
            UserType = userF.UserType
          };

          _context.UserRequests.Add(newRequest);

          await _context.SaveChangesAsync();
          return CreatedAtAction("ChangeProfile", u1);
        }
      }
            else
      {
        return BadRequest();
      }
    }

    [HttpGet("username")]
    [Route("CurrentUser")]
    public async Task<ActionResult<IEnumerable<UserModel>>> GetCurrentUser(string username)
    {

      foreach (UserModel user in _context.Users)
      {
        if (user.Username == username)
        {
          return Ok(user);
        }
      }

      return BadRequest("Wrong username");
    }

    private string getRole(UserModel user)
    {

      if (user.UserType == "Admin")
      {
        return "Admin";
      }
      else if (user.UserType == "TeamMember")
      {
        return "TeamMember";
      }
      else if (user.UserType == "Dispatcher")
      {
        return "Dispatcher";
      }
      else if (user.UserType == "Worker")
      {
        return "Worker";
      }
      else
      {
        return "User";
      }
    }
  }
}
