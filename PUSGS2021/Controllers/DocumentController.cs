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
  public class DocumentController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public DocumentController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpPost]
    [Route("SaveSwitchingPlan")]
    public async Task<ActionResult<SwitchingPlanModel>> SaveSwitchingPlan(SwitchingPlanModel switchingPlan)
    {
      if (ModelState.IsValid)
      {
        SwitchingPlanModel swPlan = new SwitchingPlanModel();
        if (switchingPlan.Id == 0)
        {

          SwitchingPlanModel sp = new SwitchingPlanModel
          {
            Type = switchingPlan.Type,
            WorkRequest = switchingPlan.WorkRequest,
            Status = switchingPlan.Status,
            Incident = switchingPlan.Incident,
            Street = switchingPlan.Street,
            startDate = switchingPlan.startDate,
            endDate = switchingPlan.endDate,
            Crew = switchingPlan.Crew,
            CreatedBy = switchingPlan.CreatedBy,
            Notes = switchingPlan.Notes,
            Company = switchingPlan.Company,
            Phone = switchingPlan.Phone,
            DateCreated = switchingPlan.DateCreated,
            ImageData = switchingPlan.ImageData,
            Equipment = switchingPlan.Equipment,

          };
          swPlan = sp;
          _context.SwitchingPlans.Add(sp);
        }
        else
        {
          SwitchingPlanModel switchingP = new SwitchingPlanModel();
          foreach (SwitchingPlanModel sw in _context.SwitchingPlans)
          {
            if (sw.Id == switchingPlan.Id)
            {
              switchingP = sw;
              break;
            }
          }

          switchingP.Type = switchingPlan.Type;
          switchingP.WorkRequest = switchingPlan.WorkRequest;
          switchingP.Status = switchingPlan.Status;
          switchingP.Incident = switchingPlan.Incident;
          switchingP.Street = switchingPlan.Street;
          switchingP.startDate = switchingPlan.startDate;
          switchingP.endDate = switchingPlan.endDate;
          switchingP.Crew = switchingPlan.Crew;
          switchingP.CreatedBy = switchingPlan.CreatedBy;
          switchingP.Notes = switchingPlan.Notes;
          switchingP.Company = switchingPlan.Company;
          switchingP.Phone = switchingPlan.Phone;
          switchingP.DateCreated = switchingPlan.DateCreated;
          switchingP.ImageData = switchingPlan.ImageData;
          switchingP.Equipment = switchingPlan.Equipment;

          swPlan = switchingP;

        }


        string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

        NotificationsModel notification = new NotificationsModel()
        {
          Type = "Success",
          Text = "Switching plan created",
          Status = "Unread",
          TimeStamp = DateTime.Now.ToString(),
          User = _context.Users.FirstOrDefault(u => u.Username == username),
          Visible = true
        };

        _context.Notifications.Add(notification);


        await _context.SaveChangesAsync();

        return CreatedAtAction("SaveSwitchingPlan", swPlan);
      }
      else
      {
        return BadRequest();
      }

    }

    [HttpGet]
    [Route("GetSwitchingPlans")]
    //[Authorize(Roles = "Admin, Worker")]
    public async Task<ActionResult<IEnumerable<SwitchingPlanModel>>> GetSwitchingPlans()
    {
      return await _context.SwitchingPlans.ToListAsync();
    }

    [HttpGet]
    [Route("GetMySwitchingPlans")]
    public ActionResult<IEnumerable<SwitchingPlanModel>> GetMySwitchingPlans()
    {
      List<SwitchingPlanModel> l = new List<SwitchingPlanModel>();
      foreach (var item in _context.SwitchingPlans)
      {
        if (item.CreatedBy == "admin")
        {
          l.Add(item);
        }

      }
      return l;
    }

    [HttpGet]
    [Route("GetSwitchingPlan")]
    public async Task<ActionResult<SwitchingPlanModel>> GetSwitchingPlan(long id)
    {
      SwitchingPlanModel swp = new SwitchingPlanModel();

      foreach (SwitchingPlanModel sw in _context.SwitchingPlans)
      {
        if (sw.Id == id)
        {
          swp = sw;
          return swp;
        }
      }

      return BadRequest();
    }


    [HttpPost]
    [Route("SaveInstruction")]
    public async Task<ActionResult<InstructionModel>> SaveInstruction(InstructionModel instruction)
    {

      if (ModelState.IsValid)
      {
        InstructionModel ins = new InstructionModel
        {
          DocumentId = instruction.DocumentId,
          Action = instruction.Action,
          Element = instruction.Element,
          Executed = false,
          Deleted = false
        };


        _context.Instructions.Add(ins);


        await _context.SaveChangesAsync();

        return CreatedAtAction("SaveInstruction", ins);
      }
      else
      {
        return BadRequest();
      }

    }

    [HttpGet]
    [Route("GetInstructions")]
    public async Task<ActionResult<IEnumerable<InstructionModel>>> GetInstructions()
    {
      List<InstructionModel> instructions = new List<InstructionModel>();

      foreach (InstructionModel ins in _context.Instructions)
      {
        if (ins.Deleted == false)
        {
          instructions.Add(ins);
        }
      }


      return instructions;
    }

    [HttpGet]
    [Route("GetDocumentInstruction")]
    public async Task<ActionResult<IEnumerable<InstructionModel>>> GetDocumentInstruction(long id)
    {
      List<InstructionModel> ins = new List<InstructionModel>();

      foreach (InstructionModel i in _context.Instructions)
      {
        if (i.DocumentId == id && i.Deleted == false)
        {
          ins.Add(i);
        }
      }

      return ins;
    }

    [HttpPut]
    [Route("ExecuteInstruction")]
    public async Task<ActionResult<InstructionModel>> ExecuteInstruction([FromBody] long id)
    {
      InstructionModel ins = new InstructionModel();

      foreach (InstructionModel i in _context.Instructions)
      {
        if (i.Id == id)
        {
          ins = i;
          break;
        }
      }

      ins.Executed = true;

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      NotificationsModel notification = new NotificationsModel()
      {
        Type = "Warning",
        Text = "Instruction " + id + " executed",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();

      return CreatedAtAction("ExecuteInstruction", ins);

    }

    [HttpPut]
    [Route("DeleteInstruction")]
    public async Task<ActionResult<InstructionModel>> DeleteInstruction([FromBody] long id)
    {
      InstructionModel ins = new InstructionModel();

      foreach (InstructionModel i in _context.Instructions)
      {
        if (i.Id == id)
        {
          ins = i;
          break;
        }
      }

      ins.Deleted = true;

      string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

      NotificationsModel notification = new NotificationsModel()
      {
        Type = "Info",
        Text = "Instruction " + id + " deleted",
        Status = "Unread",
        TimeStamp = DateTime.Now.ToString(),
        User = _context.Users.FirstOrDefault(u => u.Username == username),
        Visible = true
      };

      _context.Notifications.Add(notification);

      await _context.SaveChangesAsync();

      return CreatedAtAction("ExecuteInstruction", ins);

    }

    [HttpPut]
    [Route("DeleteAllInstructions")]
    public async Task<ActionResult<InstructionModel>> DeleteAllInstructions([FromBody] long id)
    {
      InstructionModel ins = new InstructionModel();

      foreach (InstructionModel i in _context.Instructions)
      {
        if (i.DocumentId == id)
        {
          ins = i;
          ins.Deleted = true;
        }
      }


      await _context.SaveChangesAsync();

      return CreatedAtAction("ExecuteInstruction", ins);

    }

    [HttpGet]
    [Route("GetHistoryState")]
    public async Task<ActionResult<IEnumerable<SwitchingPlanHistoryModel>>> GetHistoryState(long id)
    {
      List<SwitchingPlanHistoryModel> ins = new List<SwitchingPlanHistoryModel>();

      foreach (SwitchingPlanHistoryModel i in _context.SwitchingPlanHistory)
      {
        if (i.DocumentId == id)
        {
          ins.Add(i);
        }
      }

      return ins;
    }

    [HttpPost]
    [Route("SaveHistoryState")]
    public async Task<ActionResult<SwitchingPlanHistoryModel>> SaveHistoryState(SwitchingPlanHistoryModel hisState)
    {
      SwitchingPlanHistoryModel ins = new SwitchingPlanHistoryModel
      {
        DocumentId = hisState.DocumentId,
        ChangeBy = hisState.ChangeBy,
        DateChange = DateTime.Now.ToString(),
        NewStatus = hisState.NewStatus
      };


      SwitchingPlanModel doc = new SwitchingPlanModel();
      foreach (SwitchingPlanModel swp in _context.SwitchingPlans)
      {
        if (swp.Id == hisState.DocumentId)
        {
          doc = swp;
          doc.Status = hisState.NewStatus;
          break;
        }
      }


      _context.SwitchingPlanHistory.Add(ins);


      await _context.SaveChangesAsync();

      return CreatedAtAction("SaveHistoryState", ins);

    }

  
  }
}
