using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PUSGS2021.Data;
using PUSGS2021.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class IncidentController : ControllerBase
  {
    private readonly DefaultConnection _context;

    public IncidentController(DefaultConnection context)
    {
      _context = context;
    }




    [HttpPost]
    [Route("AddIncident")]
    public async Task<ActionResult<IncidentInfo2>> AddIncident([FromBody] IncidentInfo2 inc)
    {
      Console.WriteLine(inc.Ata);
      Console.WriteLine(inc.TypeOfInc);
      Console.WriteLine(inc.Priority);
      Console.WriteLine(inc.Confirmed);
      Console.WriteLine(inc.Cause);
      Console.WriteLine(inc.Subcause);
      Console.WriteLine(inc.Material);
      Console.WriteLine(inc.ConstructionType);
      Console.WriteLine(inc.ConsumerId);
      Console.WriteLine(inc.Comment);
      Console.WriteLine(inc.Hazard);
      Console.WriteLine(inc.Reason);
      Console.WriteLine(inc.DeviceId);
      Console.WriteLine(inc.EquipmentId);
      Console.WriteLine(inc.ImageData);
      Console.WriteLine(inc.CrewId);

      IncidentInfo2 inc2 = new IncidentInfo2();

      IncidentInfo2 incident = new IncidentInfo2()
      {
        ID = Guid.NewGuid().ToString(),
        TypeOfInc = inc.TypeOfInc,
        Priority = inc.Priority,
        Confirmed = inc.Confirmed,
        Status = inc.Status,
        Eta = inc.Eta,
        Etr = inc.Etr,
        Ata = inc.Ata,
        AffectedCustomers = inc.AffectedCustomers,
        Calls = inc.Calls,
        VoltageLevel = inc.VoltageLevel,
        ScheduledTime = inc.ScheduledTime,
        OutageTime = inc.OutageTime,
        AssignedTo = inc.AssignedTo,
        Cause = inc.Cause,
        Subcause = inc.Subcause,
        Material = inc.Material,
        ConstructionType = inc.ConstructionType,
        ConsumerId = inc.ConsumerId,
        Comment = inc.Comment,
        Hazard = inc.Hazard,
        Reason = inc.Reason,
        DeviceId = inc.DeviceId,
        EquipmentId = inc.EquipmentId,
        ImageData = inc.ImageData,
        CrewId = inc.CrewId



      };
      inc2 = incident;

      /*  if (inc == null)
        {
          return BadRequest("Invalid client request");
        }

        IncidentInfo i = new IncidentInfo();
        i = inc;*/

      NotificationsModel notification = new NotificationsModel()
      {
        Type = "Success",
        Text = "Incident created",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == "Unknown"),
        Visible = true
      };


      _context.Incidentss.Add(inc2);

      await _context.SaveChangesAsync();



      return CreatedAtAction("AddIncident", incident);

    }

    [HttpGet]
    [Route("GetIncidents")]
    public async Task<ActionResult<IEnumerable<IncidentInfo2>>> GetIncidents()
    {
      return await _context.Incidentss.ToListAsync();
    }


    [HttpGet]
    [Route("GetMyIncidents")]
    public ActionResult<IEnumerable<IncidentInfo2>> GetMyIncidents()
    {
      List<IncidentInfo2> l = new List<IncidentInfo2>();
      foreach (var item in _context.Incidentss)
      {
        if (item.AssignedTo == "Me")
        {
          l.Add(item);
        }

      }
      return l;
    }

    [HttpGet]
    [Route("GetIncidentCoordinates")]
    public ActionResult<IEnumerable<double>> GetIncidentCoordinates()
    {
      //Console.WriteLine("usao1\n\n\n\n\n");
      List<IncidentInfo2> incidents = new List<IncidentInfo2>();
      List<ElementModel> elements = new List<ElementModel>();
      elements = _context.Elements.ToList();
      incidents = _context.Incidentss.ToList();
      // Console.WriteLine(incidents.Count);
      //Console.WriteLine(elements.Count);
      List<double> ret = new List<double>();
      List<int> ret2 = new List<int>();
      //ret2.Add(1);

      foreach (var item in incidents)
      {
        string str = item.EquipmentId;
        foreach (var el in elements)
        {

          // Console.WriteLine(str);
          if (el.Id == double.Parse(str))
          {
            Console.WriteLine("jednaki su");
            string[] words = el.Coordinates.Split(' ');
            foreach (var word in words)
            {
              System.Console.WriteLine(word);
              if (word != ",")
                ret.Add(double.Parse(word));
            }

          }
        }

      }
      Console.WriteLine(ret);
      return ret;


    }


  }
}
