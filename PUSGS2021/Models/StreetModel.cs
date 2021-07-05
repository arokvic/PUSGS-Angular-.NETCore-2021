using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class StreetModel
  {
    [Key]
    public string Name { get; set; }

    public int dPriority { get; set; }
    [ConcurrencyCheck]
    public int cPriority { get; set; }
  }
}
