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
  public class NotificationsController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public NotificationsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    public List<NotificationsModel> GetNotifications()
    {
      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      List<NotificationsModel> notifications = new List<NotificationsModel>();

      List<NotificationsModel> allNotifications = _context.Notifications.Include(n => n.User).ToList();

      foreach (NotificationsModel not in _context.Notifications.Include(n => n.User))
      {
        if (not.Deleted == false && not.User.Username.Equals(username) && not.Visible == true)
        {
          notifications.Add(not);
        }
      }


      return notifications;
    }

    [HttpPost]
    [Route("AddNotification")]
    public async Task<ActionResult<ElementModel>> AddNotification()
    {

      //string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      NotificationsModel notification = new NotificationsModel()
      {
        Type = "Info",
        Text = "Document Info",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"),
        User = _context.Users.FirstOrDefault(u => u.Username == "admin")


      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();

      return CreatedAtAction("AddNotification", notification);

    }

    [HttpPost]
    [Route("CreateNotification")]
    public async Task<ActionResult<NotificationsModel>> CreateNotification(NotificationsModel model)
    {

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      NotificationsModel notification = new NotificationsModel()
      {
        Type = model.Type,
        Text = model.Text,
        Status = model.Status,
        TimeStamp = model.TimeStamp,
        User = _context.Users.FirstOrDefault(u => u.Username == username)


      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();

      return CreatedAtAction("AddNotification", notification);

    }

    [HttpPut]
    [Route("ModifyNotification")]
    public async Task<ActionResult<NotificationsModel>> ModifyNotification(long id)
    {


      var notification = _context.Notifications.FirstOrDefault(n => n.Id == id);

      notification.Status = "Read";

      await _context.SaveChangesAsync();

      return CreatedAtAction("AddNotification", notification);

    }

    [HttpPost]
    [Route("MarkAllAsRead")]
    public async Task<ActionResult<NotificationsModel>> MarkAllAsRead()
    {

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      foreach (NotificationsModel not in _context.Notifications.Include(n => n.User))
      {
        if (not.User.Username.Equals(username))
        {
          not.Status = "Read";
        }
      }

      await _context.SaveChangesAsync();

      NotificationsModel notification = _context.Notifications.FirstOrDefault();

      return CreatedAtAction("MarkAllAsRead", notification);

    }

    [HttpPost]
    [Route("ClearAll")]
    public async Task<ActionResult<NotificationsModel>> ClearAll()
    {

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      foreach (NotificationsModel not in _context.Notifications.Include(n => n.User))
      {
        if (not.User.Username.Equals(username))
        {
          not.Deleted = true;
        }
      }

      NotificationsModel notification = _context.Notifications.FirstOrDefault();

      await _context.SaveChangesAsync();

      return CreatedAtAction("MarkAllAsRead", notification);

    }

  }
}
