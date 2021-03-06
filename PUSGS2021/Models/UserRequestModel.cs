using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class UserRequestModel
  {
    [Key]
    public long Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string NameAndLastname { get; set; }
    public string Address { get; set; }
    public string UserType { get; set; }
    public string Email { get; set; }
    public string ImageData { get; set; }

    public DateTime BirthDate { get; set; }
  }
}
