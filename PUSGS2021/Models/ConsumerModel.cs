using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class ConsumerModel
  {
    [Key]
    public long Id { get; set; }
    [Required]
    [ConcurrencyCheck]
    public string Name { get; set; }
    [Required]
    [ConcurrencyCheck]
    public string Surname { get; set; }
    [Required]
    [ConcurrencyCheck]
    public string Street { get; set; }
    [Required]
    [ConcurrencyCheck]
    public string City { get; set; }
    [ConcurrencyCheck]
    public string Postal { get; set; }
    [ConcurrencyCheck]
    public int Priority { get; set; }
    [Required]
    [ConcurrencyCheck]
    public string Phone { get; set; }
    [Required]
    [ConcurrencyCheck]
    public string Type { get; set; }
    [ConcurrencyCheck]
    public bool Deleted { get; set; }

  }
}
