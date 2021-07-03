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

        public DbSet<UserRequestModel> UserRequests { get; set; }

        public DbSet<SwitchingPlanModel> SwitchingPlans { get; set; }

        public DbSet<NotificationsModel> Notifications { get; set; }

        public DbSet<InstructionModel> Instructions { get; set; }

        public DbSet<SwitchingPlanHistoryModel> SwitchingPlanHistory { get; set; }

        public DbSet<IncidentInfo> Incidents { get; set; }

  }
}
