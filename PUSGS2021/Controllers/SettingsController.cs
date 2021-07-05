using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PUSGS2021.Data;
using PUSGS2021.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PUSGS2021.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SettingsController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public SettingsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("GetStreets")]
    public async Task<ActionResult<IEnumerable<StreetModel>>> GetStreets()
    {
      return await _context.Streets.ToListAsync();
    }

    [HttpPut]
    [Route("ChangePriority")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<StreetModel>> ChangePriority(StreetModel cp)
    {
      var street1 = new StreetModel();
      bool success = false;

      char[] separators = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

      foreach (StreetModel street in _context.Streets)
      {
        if (street.Name == cp.Name)
        {
          street1 = _context.Streets.FirstOrDefault(s => s.Name == cp.Name);
          street1.cPriority = cp.cPriority;
          success = true;
          break;
        }
      }

      foreach (StreetModel street in _context.Streets)
      {
        foreach (ConsumerModel cons in _context.Consumers)
        {
          string consStreet = cons.Street.Split(separators, 2)[0].Trim();

          if (street.Name.Equals(consStreet))
          {
            cons.Priority = street.cPriority;
          }
        }
      }

      /*foreach (StreetModel street in _context.Streets)
      {
          foreach (Inciden cons in _context.Consumers)
          {
              string consStreet = cons.Street.Split(separators, 2)[0].Trim();

              if (street.Name.Equals(consStreet))
              {
                  cons.Priority = street.cPriority;
              }
          }
      }*/



      if (success)
      {
        string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

        NotificationsModel notification = new NotificationsModel()
        {
          Type = "Info",
          Text = "Street priority change",
          Status = "Unread",
          TimeStamp = DateTime.Now.ToString(),
          User = _context.Users.FirstOrDefault(u => u.Username == username),
          Visible = true
        };

        _context.Notifications.Add(notification);

        await _context.SaveChangesAsync();
        return CreatedAtAction("ChangePriority", street1);
      }

      return BadRequest("Wrong street name");

    }

    [HttpPut]
    [Route("ResetSettings")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<StreetModel>> ResetSettings()
    {
      var street1 = new StreetModel();

      foreach (StreetModel street in _context.Streets)
      {
        street1 = street;
        street1.cPriority = street1.dPriority;
      }

      char[] separators = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

      //string streetName = address.Split(separators, 2)[0].Trim();


      foreach (StreetModel street in _context.Streets)
      {
        foreach (ConsumerModel cons in _context.Consumers)
        {
          string consStreet = cons.Street.Split(separators, 2)[0].Trim();

          if (street.Name.Equals(consStreet))
          {
            cons.Priority = street.cPriority;
          }
        }
      }

      foreach (NotificationsModel not in _context.Notifications)
      {
        not.Visible = true;
      }

      /*foreach (StreetModel street in _context.Streets)
      {
          foreach (Inciden cons in _context.Consumers)
          {
              string consStreet = cons.Street.Split(separators, 2)[0].Trim();

              if (street.Name.Equals(consStreet))
              {
                  cons.Priority = street.cPriority;
              }
          }
      }*/


      await _context.SaveChangesAsync();
      return CreatedAtAction("ResetPriority", street1);



    }

    [HttpPut]
    [Route("VisibleNotifications")]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<string>> VisibleNotifications([FromBody] string[] str)
    {

      if (str.Contains("All"))
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          not.Visible = true;
        }
        await _context.SaveChangesAsync();
        return CreatedAtAction("VisibleNotifications", "Ok");
      }


      if (str.Contains("Warning"))
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Warning")
          {
            not.Visible = true;
          }
        }
      }
      else
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Warning")
          {
            not.Visible = false;
          }
        }
      }

      if (str.Contains("Success"))
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Success")
          {
            not.Visible = true;
          }
        }
      }
      else
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Success")
          {
            not.Visible = false;
          }
        }
      }

      if (str.Contains("Info"))
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Info")
          {
            not.Visible = true;
          }
        }
      }
      else
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Info")
          {
            not.Visible = false;
          }
        }
      }

      if (str.Contains("Error"))
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Error")
          {
            not.Visible = true;
          }
        }
      }
      else
      {
        foreach (NotificationsModel not in _context.Notifications)
        {
          if (not.Type == "Error")
          {
            not.Visible = false;
          }
        }
      }




      await _context.SaveChangesAsync();
      return CreatedAtAction("VisibleNotifications", "Ok");


    }




  }
}
