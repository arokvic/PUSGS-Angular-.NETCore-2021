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
    public async Task<ActionResult<IncidentInfo>> AddIncident([FromBody] IncidentInfo inc)
    {
      /* Console.WriteLine(inc.ATA);
       Console.WriteLine(inc.TypeOfInc);
       Console.WriteLine(inc.Priority);
       Console.WriteLine(inc.Confirmed);*/

      IncidentInfo inc2 = new IncidentInfo();

      IncidentInfo incident = new IncidentInfo()
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
        AssignedTo = inc.AssignedTo



      };
      inc2 = incident;

      /*  if (inc == null)
        {
          return BadRequest("Invalid client request");
        }

        IncidentInfo i = new IncidentInfo();
        i = inc;*/




      _context.Incidents.Add(inc2);

      await _context.SaveChangesAsync();



      return CreatedAtAction("AddIncident", incident);

    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<IncidentModel>>> GetIncidents()
    {
      return await _context.IncidentModels.ToListAsync();
    }

  }
}
