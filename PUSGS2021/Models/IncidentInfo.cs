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
    public string TypeOfInc { get; set; }

    public int Priority { get; set; }

    public bool Confirmed { get; set; }

    public string Status { get; set; }

    public DateTime ETA { get; set; }

    public DateTime ATA { get; set; }

    public DateTime OutageTime { get; set; }

    public DateTime ETR { get; set; }

    public int AffectedCustomers { get; set; }

    public int Calls { get; set; }

    public double VoltageLevel { get; set; }

    public DateTime ScheduledTime { get; set; }

    public string AssignedTo { get; set; }


  }
}
