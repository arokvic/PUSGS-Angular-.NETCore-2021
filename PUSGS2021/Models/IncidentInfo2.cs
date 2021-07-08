using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class IncidentInfo2
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

    public string Cause { get; set; }

    public string Subcause { get; set; }
    public string Material { get; set; }

    public string ConstructionType { get; set; }
    public string ConsumerId { get; set; }

    public string Comment { get; set; }
    public string Hazard { get; set; }

    public string Reason { get; set; }
    public string DeviceId { get; set; }

    public string EquipmentId { get; set; }
    public string ImageData { get; set; }

    public string CrewId { get; set; }


    public IncidentInfo2()
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
