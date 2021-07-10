using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class CurrentUserModel
  {
    public string Token { get; set; }
    public string Username { get; set; }
    public string NameAndLastname { get; set; }
    public string Type { get; set; }

    public string ActiveStatus { get; set; }

  }
}
