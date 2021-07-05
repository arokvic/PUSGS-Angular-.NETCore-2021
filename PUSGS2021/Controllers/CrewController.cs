using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
  public class CrewController : ControllerBase
  {

    private readonly DefaultConnection _context;

    public CrewController(DefaultConnection _context)
    {
      this._context = _context;
    }


    [HttpPost]
    [Route("AddCrew")]
    public async Task<ActionResult<CrewModel>> SaveCrew(CrewModel crew)
    {

      CrewModel cr = new CrewModel()
      {
        Name = crew.Name,
        Id = Guid.NewGuid().ToString(),
        Members = crew.Members,
        Deleted = "No"

      };


      _context.Crews.Add(cr);

      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCrews", cr);

    }

    [HttpGet]
    [Route("GetCrews")]
    public ActionResult<IEnumerable<CrewModel>> GetCrews()
    {
      List<CrewModel> temp = new List<CrewModel>();
      foreach (var item in _context.Crews)
      {
        if (item.Deleted == "No")
        {
          temp.Add(item);
        }
      }
      return temp;
    }

    [HttpPut]
    [Route("DeleteCrew")]
    public async Task<ActionResult<CrewModel>> DeleteCrew(string id)
    {
      CrewModel c = new CrewModel();
      foreach (var item in _context.Crews)
      {
        if (item.Id == id)
        {
          c = item;
          break;
        }
      }
      c.Deleted = "Yes";
      await _context.SaveChangesAsync();
      return CreatedAtAction("GetCrew", c);


    }


  }
}
