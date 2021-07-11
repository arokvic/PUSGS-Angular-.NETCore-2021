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


        public DbSet<WorkRequestModel> WorkRequests { get; set; }
        public DbSet<NotificationsModel> Notifications { get; set; }

        public DbSet<InstructionModel> Instructions { get; set; }

        public DbSet<SwitchingPlanHistoryModel> SwitchingPlanHistory { get; set; }

        public DbSet<WorkRequestHistoryModel> WorkRequestHistory { get; set; }
      
       public DbSet<IncidentInfo> Incidents { get; set; }

        public DbSet<IncidentModel> IncidentModels { get; set; }
        public DbSet<SafetyDocumentModel> SafetyDocuments { get; set; }

        public DbSet<ElementModel> Elements { get; set; }
        public DbSet<StreetModel> Streets { get; set; }

        public DbSet<ConsumerModel> Consumers { get; set; }
        public DbSet<CrewModel> Crews { get; set; }

        public DbSet<IncidentInfo2> Incidentss { get; set; }

        public DbSet<CallsModel> Calls { get; set; }
  }
}
