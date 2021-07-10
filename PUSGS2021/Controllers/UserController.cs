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
using Microsoft.EntityFrameworkCore;
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


    [HttpGet]
    [Route("UserRequests")]
    public async Task<ActionResult<IEnumerable<UserRequestModel>>> GetUnverifiedUsers()
    {


      return await _context.UserRequests.ToListAsync();
    }


    [HttpPut]
    [Route("Verification")]
    public async Task<ActionResult<UserModel>> Verification(string username)
    {
      UserModel u1 = new UserModel();
      foreach (UserModel user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          break;

        }
      }
      u1.ActiveStatus = "Accepted";
      await _context.SaveChangesAsync();
      //sendEmail(u1.Email, "Accepted");
      return CreatedAtAction("GetUsers", u1);

    }
    [HttpPut]
    [Route("Declineverification")]
    public async Task<ActionResult<UserModel>> Declineverification(string username)
    {
      UserModel u1 = new UserModel();
      foreach (UserModel user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          break;

        }
      }
      u1.ActiveStatus = "Refused";
      await _context.SaveChangesAsync();
      //sendEmail(u1.Email, "Refused");
      return CreatedAtAction("GetUsers", u1);

    }



    [HttpPost]
    [Route("Login")]
    public IActionResult Login([FromBody] LoginModel loginForm)
    {

      Console.WriteLine(loginForm.UserName + " " + loginForm.Password);
      if (loginForm == null)
      {
        return BadRequest("Invalid client request");
      }


      foreach (UserModel user in _context.Users)
      {
        /// Console.WriteLine(user.Activated);
        if (user.Username == loginForm.UserName && user.Password == loginForm.Password)
        {
          Console.WriteLine(user.ActiveStatus);
          if (user.ActiveStatus.Trim(' ') == "Active")
          {
            Console.WriteLine("USAO SAM U LOGIN");
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
              Type = user.UserType,
              ActiveStatus = user.ActiveStatus
            };
            Console.WriteLine(user.ActiveStatus);

            return Ok(loggedInUser);
          }
        }
      }

      return Unauthorized();
    }

    [HttpPost]
    [Route("Register")]
    public async Task<ActionResult<UserModel>> Register([FromBody] UserModel userF)
    {

      if (userF == null)
      {
        return BadRequest("Invalid client request");
      }
      UserModel u1 = new UserModel();
      u1 = userF;
      u1.ActiveStatus = "Inactive";
      _context.Users.Add(u1);
      await _context.SaveChangesAsync();

      var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretKeysdfsdfsdf"));
      var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

      var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, getRole(userF))
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
        Username = userF.Username,
        NameAndLastname = userF.NameAndLastname,
        Type = userF.UserType,
        ActiveStatus = userF.ActiveStatus
      };

      return Ok(loggedInUser);







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
    [Route("UserRequest")]
    public async Task<ActionResult<UserModel>> UserRequest(string username)
    {
      UserModel u1 = new UserModel();
      foreach (UserModel user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          break;

        }
      }

      UserRequestModel ur1 = new UserRequestModel();
      foreach (UserRequestModel ur in _context.UserRequests)
      {
        if (ur.Username == username)
        {
          ur1 = ur;
          break;
        }
      }

      u1.UserType = ur1.UserType;
      _context.UserRequests.Remove(ur1);
      await _context.SaveChangesAsync();
      return CreatedAtAction("GetUsers", u1);

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

    [HttpPut]
    [Route("ChangePassword")]
    public async Task<ActionResult<UserModel>> ChangePassword([FromBody] LoginModel passwordForm)
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
      u1.Password = passwordForm.Password;

      //string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      NotificationsModel notification = new NotificationsModel()
      {
        Type = "Success",
        Text = "Password changed",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();
      return CreatedAtAction("ChangePassword", u1);

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

    [HttpGet]
    [Route("AllWorkers")]
    public ActionResult<IEnumerable<UserModel>> GetUsers()
    {
      List<UserModel> memberUsers = new List<UserModel>();
      foreach (var item in _context.Users)
      {

        if (item.UserType == "Worker")
        {
          memberUsers.Add(item);
          Console.WriteLine(item.Username);
        }

      }
      return memberUsers;
    }

    [HttpGet]
    [Route("UsersToBeVerified")]
    public ActionResult<IEnumerable<UserModel>> GetUsersToBeVerified()
    {
      List<UserModel> users = new List<UserModel>();
      foreach (var item in _context.Users)
      {
        Console.WriteLine(item.ActiveStatus.Length);
        
          users.Add(item);
          Console.WriteLine(item.Username);
        
        Console.WriteLine(users.Count);
      }
      return users;
    }


    [HttpPut]
    [Route("Accept")]
    public async Task<ActionResult<UserModel>> Accept(string username)
    {
      Console.WriteLine("usao");

      UserModel u1 = new UserModel();
      foreach (UserModel user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          user.ActiveStatus = "Active";
          break;

        }
      }
      u1.ActiveStatus = "Active";
      await _context.SaveChangesAsync();
      // sendEmail(u1.Email, "Accepted");
      return CreatedAtAction("GetUsers", u1);

    }
    [HttpPut]
    [Route("Decline")]
    public async Task<ActionResult<UserModel>> Decline(string username)
    {
      Console.WriteLine("usao");
      UserModel u1 = new UserModel();
      foreach (UserModel user in _context.Users)
      {
        if (user.Username == username)
        {
          u1 = user;
          user.ActiveStatus = "Refused";
          break;

        }
      }
      u1.ActiveStatus = "Refused";
      await _context.SaveChangesAsync();
      //  sendEmail(u1.Email, "Refused");
      return CreatedAtAction("GetUsers", u1);

    }


  }






}

