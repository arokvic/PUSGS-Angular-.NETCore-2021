using Microsoft.EntityFrameworkCore;
using PUSGS2021.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Data
{
    public class DefaultConnection : DbContext
    {

        public DefaultConnection(DbContextOptions<DefaultConnection> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }

    }
}
