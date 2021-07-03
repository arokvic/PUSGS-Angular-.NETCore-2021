using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class SafetyDocumentModel
  {
    [Key]
    public string SafetyDocumentId { get; set; }
    public string Type { get; set; }
    public string Status { get; set; }
    public string SwitchingPlan { get; set; }
    public string SafetyDocType { get; set; }
    public string DateCreated { get; set; }
    public string CreatedBy { get; set; }
    public string PhoneNum { get; set; }
    public string FieldCrew { get; set; }
    public string Details { get; set; }
    public string Notes { get; set; }
    public string newState { get; set; }
    public string UsersThatChangedDocument { get; set; }
    public string File { get; set; }
    public string DevicesSelected { get; set; }
    public bool OperationsCompleted { get; set; }
    public bool TagsRemoved { get; set; }
    public bool GroundingRemoved { get; set; }
    public bool ReadyForService { get; set; }


  }
}
