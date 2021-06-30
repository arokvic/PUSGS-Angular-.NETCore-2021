using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Models
{
    public class UserModel
    {
        [Key]
        [Required]
        [ConcurrencyCheck]
        public string Username { get; set; }
        [ConcurrencyCheck]
        public string Password { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string NameAndLastname { get; set; }
        [ConcurrencyCheck]
        public DateTime BirthDate { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string Address { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string UserType { get; set; }
        [ConcurrencyCheck]
        public string ImageData { get; set; }
        [Required]
        [ConcurrencyCheck]
        public string Email { get; set; }

        public UserModel()
            {
                Username = "+";
                Password = "+";
                NameAndLastname = "+";
                BirthDate = DateTime.Now;
                Address = "+";
                UserType = "+";
                Email = "+";
                ImageData = "+";
          }
    }
}
