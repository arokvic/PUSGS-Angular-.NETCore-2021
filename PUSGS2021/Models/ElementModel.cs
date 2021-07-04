using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class ElementModel
  {
    public string Type { get; set; } //prekidac, osigurac, transformator, diskonektor

    [Key]
    public long Id { get; set; }
    public string Name { get; set; } //prva tri slova tipa + id koji se stalno inkrementira
                                     //PRE1, PRE2, PRE3
    public string Address { get; set; } //max br elemenata u ulici je 100
    public string Coordinates { get; set; }

    public bool InSafetyDocument { get; set; }
  }
}
