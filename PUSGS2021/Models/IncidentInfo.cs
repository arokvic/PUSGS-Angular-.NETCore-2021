using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class IncidentInfo
  {
    [Key]
    public string ID { get; set; }
    [ConcurrencyCheck]
    public string TypeOfInc { get; set; }
    [ConcurrencyCheck]
    public string Priority { get; set; }
    [ConcurrencyCheck]
    public string Confirmed { get; set; }
    [ConcurrencyCheck]
    public string Status { get; set; }
    [ConcurrencyCheck]
    public string Eta { get; set; }
    [ConcurrencyCheck]
    public string Ata { get; set; }
    [ConcurrencyCheck]
    public string OutageTime { get; set; }
    [ConcurrencyCheck]
    public string Etr { get; set; }
    [ConcurrencyCheck]
    public string AffectedCustomers { get; set; }
    [ConcurrencyCheck]
    public string Calls { get; set; }
    [ConcurrencyCheck]
    public string VoltageLevel { get; set; }
    [ConcurrencyCheck]
    public string ScheduledTime { get; set; }
    [ConcurrencyCheck]
    public string AssignedTo { get; set; }


    public IncidentInfo()
    {
      /*TypeOfInc = "+";
      Priority = 1;
      Confirmed = "+";
      TypeOfInc = "+";
      ETA = "+";
      ATA = "+";
      ETR = "+";
      AffectedCustomers = "1";
      Calls = "1";
      VoltageLevel ="1";
      ScheduledTime = "me";
      AssignedTo = "+";
      OutageTime = "+";
      */
    }


  }
}
