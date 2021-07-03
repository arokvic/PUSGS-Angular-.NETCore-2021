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
  public class SafetyDocumentsController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public SafetyDocumentsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<SafetyDocumentModel>>> GetSafetyDocuments()
    {
      return await _context.SafetyDocuments.ToListAsync();
    }

    [HttpPost]
    [Route("AddSafetyDocument")]
    public async Task<ActionResult<SafetyDocumentModel>> AddSafetyDocument(SafetyDocumentModel safeDoc)
    {

      /*ElementModel element1 = new ElementModel()
      {
          Address = "Bul Cara Lazara 39",
          Coordinates = "39193",
          Type = "prekidac",
          Name = "PRE1"

      };*/
      SafetyDocumentModel sd = new SafetyDocumentModel()
      {
        SafetyDocumentId = Guid.NewGuid().ToString(),
        Type = safeDoc.Type,
        Status = safeDoc.Status,
        SwitchingPlan = safeDoc.Status,
        SafetyDocType = "", //ne pise u spec sta je
        DateCreated = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss tt"),
        CreatedBy = safeDoc.CreatedBy,
        PhoneNum = safeDoc.PhoneNum,
        FieldCrew = safeDoc.FieldCrew,
        Details = safeDoc.Details,
        Notes = safeDoc.Notes,
        newState = safeDoc.newState,
        UsersThatChangedDocument = safeDoc.UsersThatChangedDocument,
        File = safeDoc.File,
        DevicesSelected = safeDoc.DevicesSelected,
        OperationsCompleted = safeDoc.OperationsCompleted,
        TagsRemoved = safeDoc.TagsRemoved,
        GroundingRemoved = safeDoc.GroundingRemoved,
        ReadyForService = safeDoc.ReadyForService


      };




      _context.SafetyDocuments.Add(sd);

      await _context.SaveChangesAsync();

      //SaveStreet("sdfsdf");

      return CreatedAtAction("GetSafetyDocuments", sd);

    }

  }
}
