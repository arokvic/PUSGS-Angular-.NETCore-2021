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
  //[Consumes("application/json")]
  [ApiController]
  public class DocumentWrController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public DocumentWrController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpPost]
    [Route("SaveWorkRequest")]
    public async Task<ActionResult<WorkRequestModel>> SaveWorkRequest(WorkRequestModel workRequest)
    {
      if (ModelState.IsValid)
      {
        WorkRequestModel wrPlan = new WorkRequestModel();
        if (workRequest.Id == 0)
        {

          WorkRequestModel wr = new WorkRequestModel
          {
            Type = workRequest.Type,
            Status = workRequest.Status,
            Incident = workRequest.Incident,
            Street = workRequest.Street,
            StartDate = workRequest.StartDate,
            EndDate = workRequest.EndDate,
            Crew = workRequest.Crew,
            CreatedBy = workRequest.CreatedBy,
            Notes = workRequest.Notes,
            Company = workRequest.Company,
            Phone = workRequest.Phone,
            DateCreated = DateTime.Now.ToString(),
            ImageData = workRequest.ImageData,
            Equipment = workRequest.Equipment,

          };
          wrPlan = wr;
          _context.WorkRequests.Add(wr);
          await _context.SaveChangesAsync();
        }
        else
        {
          WorkRequestModel workingP = new WorkRequestModel();
          foreach (WorkRequestModel sw in _context.WorkRequests)
          {
            if (sw.Id == workRequest.Id)
            {
              workingP = sw;
              break;
            }
          }

          workingP.Type = workRequest.Type;
          workingP.Status = workRequest.Status;
          workingP.Incident = workRequest.Incident;
          workingP.Street = workRequest.Street;
          workingP.StartDate = workRequest.StartDate;
          workingP.EndDate = workRequest.EndDate;
          workingP.Crew = workRequest.Crew;
          workingP.CreatedBy = workRequest.CreatedBy;
          workingP.Notes = workRequest.Notes;
          workingP.Company = workRequest.Company;
          workingP.Phone = workRequest.Phone;
          workingP.DateCreated = DateTime.Now.ToString();
          workingP.ImageData = workRequest.ImageData;
          workingP.Equipment = workRequest.Equipment;

          wrPlan = workingP;
          _context.WorkRequests.Add(wrPlan);
          await _context.SaveChangesAsync();
        }


        string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

        /*
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
        */

        return CreatedAtAction("SaveWorkRequest", wrPlan);
      }
      else
      {
        return BadRequest();
      }

    }

    [HttpGet]
    [Route("GetWorkRequests")]
    //[Authorize(Roles = "Admin, Worker")]
    public async Task<ActionResult<IEnumerable<WorkRequestModel>>> GetWorkRequests()
    {
      return await _context.WorkRequests.ToListAsync();
    }

    [HttpGet]
    [Route("GetWorkRequest")]
    public async Task<ActionResult<WorkRequestModel>> GetWorkRequest(long id)
    {
      WorkRequestModel swp = new WorkRequestModel();

      foreach (WorkRequestModel sw in _context.WorkRequests)
      {
        if (sw.Id == id)
        {
          swp = sw;
          return swp;
        }
      }

      return BadRequest();
    }

    /*
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
    */

    [HttpGet]
    [Route("GetHistoryStateWr")]
    public async Task<ActionResult<IEnumerable<WorkRequestHistoryModel>>> GetHistoryStateWr(long id)
    {
      List<WorkRequestHistoryModel> ins = new List<WorkRequestHistoryModel>();

      foreach (WorkRequestHistoryModel i in _context.WorkRequestHistory)
      {
        if (i.DocumentId == id)
        {
          ins.Add(i);
        }
      }

      return ins;
    }

    [HttpPost]
    [Route("SaveHistoryStateWr")]
    public async Task<ActionResult<WorkRequestHistoryModel>> SaveHistoryStateWr(WorkRequestHistoryModel hisState)
    {
      WorkRequestHistoryModel ins = new WorkRequestHistoryModel
      {
        DocumentId = hisState.DocumentId,
        ChangeBy = hisState.ChangeBy,
        DateChange = DateTime.Now.ToString(),
        NewStatus = hisState.NewStatus
      };


      WorkRequestModel doc = new WorkRequestModel();
      foreach (WorkRequestModel swp in _context.WorkRequests)
      {
        if (swp.Id == hisState.DocumentId)
        {
          doc = swp;
          doc.Status = hisState.NewStatus;
          break;
        }
      }


      _context.WorkRequestHistory.Add(ins);


      await _context.SaveChangesAsync();

      return CreatedAtAction("SaveHistoryStateWr", ins);

    }


  }
}
