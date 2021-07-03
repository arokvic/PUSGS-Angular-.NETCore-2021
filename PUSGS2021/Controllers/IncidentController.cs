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
    public async Task<ActionResult<IncidentInfo>> AddIncident(IncidentInfo inc)
    {


      IncidentInfo incident = new IncidentInfo()
      {
        ID = Guid.NewGuid().ToString(),
        TypeOfInc = inc.TypeOfInc,
        Priority = inc.Priority,
        Confirmed = inc.Confirmed,
        Status = inc.Status,
        ETA = inc.ETA,
        ETR = inc.ETR,
        ATA = inc.ATA,
        AffectedCustomers = inc.AffectedCustomers,
        Calls = inc.Calls,
        VoltageLevel = inc.VoltageLevel,
        ScheduledTime = inc.ScheduledTime,
        OutageTime = inc.OutageTime


      };




      _context.Incidents.Add(incident);

      await _context.SaveChangesAsync();



      return CreatedAtAction("GetIncidents", incident);

    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<IncidentInfo>>> GetIncidents()
    {
      return await _context.Incidents.ToListAsync();
    }

  }
}
