using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlightSchedule.Api.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Arrivals",
                columns: table => new
                {
                    Flight = table.Column<string>(type: "TEXT", nullable: false),
                    Time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    From = table.Column<string>(type: "TEXT", nullable: true),
                    Airline = table.Column<string>(type: "TEXT", nullable: true),
                    Aircraft = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Arrivals", x => x.Flight);
                });

            migrationBuilder.CreateTable(
                name: "Departures",
                columns: table => new
                {
                    Flight = table.Column<string>(type: "TEXT", nullable: false),
                    Time = table.Column<DateTime>(type: "TEXT", nullable: false),
                    To = table.Column<string>(type: "TEXT", nullable: true),
                    Airline = table.Column<string>(type: "TEXT", nullable: true),
                    Aircraft = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departures", x => x.Flight);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Arrivals");

            migrationBuilder.DropTable(
                name: "Departures");
        }
    }
}
