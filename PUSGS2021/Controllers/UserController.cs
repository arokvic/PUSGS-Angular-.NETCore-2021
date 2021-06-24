using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
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

    [HttpPut]
        [Route("ChangeProfile")]
        public async Task<ActionResult<UserModel>> ChangeProfile([FromBody] UserModel userF)
        {
            if (ModelState.IsValid)
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
                    u1.Address = userF.Address;
                    
                    await _context.SaveChangesAsync();
                    return CreatedAtAction("ChangeProfile", u1);
                }
                else
                {
                    u1.Username = userF.Username;
                    u1.NameAndLastname = userF.NameAndLastname;
                    u1.Address = userF.Address;
                    UserRequestModel newRequest = new UserRequestModel
                    {
                        Username = userF.Username,
                        NameAndLastname = userF.NameAndLastname,
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
 
    [Route("GetAllAuthor")]
    [EnableCors("AllowOrigin")]
    [HttpPost]
    [Route("Login")]
    public IActionResult Login([FromBody]LoginModel loginForm)
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
