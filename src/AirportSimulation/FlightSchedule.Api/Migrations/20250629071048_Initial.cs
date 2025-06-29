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
                name: "DepartingFlight",
                columns: table => new
                {
                    Number = table.Column<string>(type: "TEXT", nullable: false),
                    Scheduled = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Destination = table.Column<string>(type: "TEXT", nullable: true),
                    Airline = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartingFlight", x => x.Number);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DepartingFlight");
        }
    }
}
