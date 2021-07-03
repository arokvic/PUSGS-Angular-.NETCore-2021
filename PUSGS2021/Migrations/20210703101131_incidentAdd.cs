using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PUSGS2021.Migrations
{
    public partial class incidentAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    TypeOfInc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Priority = table.Column<int>(type: "int", nullable: false),
                    Confirmed = table.Column<bool>(type: "bit", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ETA = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ATA = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OutageTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ETR = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AffectedCustomers = table.Column<int>(type: "int", nullable: false),
                    Calls = table.Column<int>(type: "int", nullable: false),
                    VoltageLevel = table.Column<double>(type: "float", nullable: false),
                    ScheduledTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    AssignedTo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Incidents");
        }
    }
}
