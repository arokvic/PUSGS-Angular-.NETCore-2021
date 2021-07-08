using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class WorkRequestModel
  {
   
      [Key]
      public long Id { get; set; }
      [Required]
     // [ConcurrencyCheck]
      public string Type { get; set; }

     
      //[ConcurrencyCheck]
      public string Status { get; set; }

     // [ConcurrencyCheck]
      public string Incident { get; set; }

      [Required]
     // [ConcurrencyCheck]
      public string Street { get; set; }

      [Required]
     // [ConcurrencyCheck]
      public string StartDate { get; set; }

      [Required]
     // [ConcurrencyCheck]
      public string EndDate { get; set; }

     // [ConcurrencyCheck]
      public string Crew { get; set; }

      [Required]
//[ConcurrencyCheck]
      public string CreatedBy { get; set; }

     // [ConcurrencyCheck]
      public string Notes { get; set; }
      [Required]
     // [ConcurrencyCheck]
      public string Company { get; set; }

      [Required]
     // [ConcurrencyCheck]
      public string Phone { get; set; }

      //[ConcurrencyCheck]
      public string DateCreated { get; set; }

      //ConcurrencyCheck]
      public string ImageData { get; set; }

      //[ConcurrencyCheck]
      public string Equipment { get; set; }



    }
  
}
