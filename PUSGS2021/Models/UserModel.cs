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
        public string Username { get; set; }
        public string Password { get; set; }
   
        public string NameAndLastname { get; set; }

        public DateTime BirthDate { get; set; }
       
        public string Address { get; set; }

        public string UserType { get; set; }

        public string ImageData { get; set; }

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
