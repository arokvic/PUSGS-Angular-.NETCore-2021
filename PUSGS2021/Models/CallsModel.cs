using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class CallsModel
  {
    [Key]

    public string Id { get; set; }
    [Required]
    [ConcurrencyCheck]
    public string Reason { get; set; }
    [Required]
    [ConcurrencyCheck]

    public string Hazard { get; set; }
    [Required]
    [ConcurrencyCheck]

    public string Comment { get; set; }

  }
}
