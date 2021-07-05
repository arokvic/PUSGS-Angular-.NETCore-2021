using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class CrewModel
  {
    [Key]
    public string Id { get; set; }
    [ConcurrencyCheck]
    public string Name { get; set; }
    [ConcurrencyCheck]
    public string Members { get; set; }

    public string Deleted { get; set; }

    public CrewModel()
    {

    }

  }


}
