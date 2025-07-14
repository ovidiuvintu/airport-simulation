using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Airport.Scheduler.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Airport",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    AirportCode = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airport", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CancellationReason",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CancellationReason", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Carrier",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    CarrierCode = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carrier", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ArrivingFlight",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AirportCode = table.Column<string>(type: "TEXT", nullable: false),
                    FlightNumber = table.Column<string>(type: "TEXT", nullable: true),
                    CarrierId = table.Column<int>(type: "INTEGER", nullable: true),
                    Origin = table.Column<string>(type: "TEXT", nullable: true),
                    ScheduledArrivalTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ActualArrivalTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    FlightStatus = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArrivingFlight", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArrivingFlight_Carrier_CarrierId",
                        column: x => x.CarrierId,
                        principalTable: "Carrier",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "DepartingFlight",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    OriginId = table.Column<int>(type: "INTEGER", nullable: false),
                    FlightNumber = table.Column<string>(type: "TEXT", nullable: false),
                    CarrierId = table.Column<int>(type: "INTEGER", nullable: false),
                    DestinationId = table.Column<int>(type: "INTEGER", nullable: false),
                    ScheduledDepartureTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    FlightStatus = table.Column<int>(type: "INTEGER", nullable: true),
                    ReasonOfCancelationId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartingFlight", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DepartingFlight_Airport_DestinationId",
                        column: x => x.DestinationId,
                        principalTable: "Airport",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepartingFlight_Airport_OriginId",
                        column: x => x.OriginId,
                        principalTable: "Airport",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepartingFlight_CancellationReason_ReasonOfCancelationId",
                        column: x => x.ReasonOfCancelationId,
                        principalTable: "CancellationReason",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_DepartingFlight_Carrier_CarrierId",
                        column: x => x.CarrierId,
                        principalTable: "Carrier",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArrivingFlight_CarrierId",
                table: "ArrivingFlight",
                column: "CarrierId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartingFlight_CarrierId",
                table: "DepartingFlight",
                column: "CarrierId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartingFlight_DestinationId",
                table: "DepartingFlight",
                column: "DestinationId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartingFlight_OriginId",
                table: "DepartingFlight",
                column: "OriginId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartingFlight_ReasonOfCancelationId",
                table: "DepartingFlight",
                column: "ReasonOfCancelationId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArrivingFlight");

            migrationBuilder.DropTable(
                name: "DepartingFlight");

            migrationBuilder.DropTable(
                name: "Airport");

            migrationBuilder.DropTable(
                name: "CancellationReason");

            migrationBuilder.DropTable(
                name: "Carrier");
        }
    }
}
