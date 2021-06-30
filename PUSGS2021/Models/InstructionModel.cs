using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class InstructionModel
  {
    [Key]
    public long Id { get; set; }
    public long DocumentId { get; set; }
    [Required]
    public string Action { get; set; }

    public string Element { get; set; }
    public bool Deleted { get; set; }
    public bool Executed { get; set; }


  }
}
