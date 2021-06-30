using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
  public class NotificationsModel
  {
    [Key]
    public long Id { get; set; }
    [ConcurrencyCheck]

    public bool Deleted { get; set; }
    [ConcurrencyCheck]
    public bool Visible { get; set; }
    public string Type { get; set; }
    public string Text { get; set; }
    public string Status { get; set; }
    public string TimeStamp { get; set; }
    [JsonIgnore]
    public UserModel User { get; set; }
  }
}
