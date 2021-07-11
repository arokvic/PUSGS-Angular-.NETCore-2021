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
  public class CallsController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public CallsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    [Route("GetCalls")]
    //[Authorize(Roles = "Admin")]
    public async Task<ActionResult<IEnumerable<CallsModel>>> GetCalls()
    {
      List<CallsModel> calls = new List<CallsModel>();

      foreach (CallsModel cons in _context.Calls)
      {
        
          calls.Add(cons);
        
      }

      return calls;
    }


    [HttpPost]
    [Route("SaveCalls")]
    public async Task<ActionResult<CallsModel>> SaveCalls(CallsModel call)
    {
      if (ModelState.IsValid)
      {
        CallsModel calisa = new CallsModel
        {
          Id = call.Id,
          Comment = call.Comment,
          Hazard = call.Hazard,
          Reason = call.Reason,
          
        };

       
        _context.Calls.Add(calisa);


        await _context.SaveChangesAsync();

        return CreatedAtAction("SaveCalls", calisa);
      }
      else
      {
        return BadRequest();
      }

    }

  }
}
