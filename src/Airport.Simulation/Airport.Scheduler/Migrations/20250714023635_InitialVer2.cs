using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Airport.Scheduler.Migrations
{
    /// <inheritdoc />
    public partial class InitialVer2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ArrivingFlight_Carrier_CarrierId",
                table: "ArrivingFlight");

            migrationBuilder.DropForeignKey(
                name: "FK_DepartingFlight_CancellationReason_ReasonOfCancelationId",
                table: "DepartingFlight");

            migrationBuilder.DropTable(
                name: "CancellationReason");

            migrationBuilder.DropIndex(
                name: "IX_DepartingFlight_ReasonOfCancelationId",
                table: "DepartingFlight");

            migrationBuilder.DropColumn(
                name: "FlightStatus",
                table: "DepartingFlight");

            migrationBuilder.DropColumn(
                name: "ReasonOfCancelationId",
                table: "DepartingFlight");

            migrationBuilder.DropColumn(
                name: "ActualArrivalTime",
                table: "ArrivingFlight");

            migrationBuilder.DropColumn(
                name: "AirportCode",
                table: "ArrivingFlight");

            migrationBuilder.DropColumn(
                name: "FlightStatus",
                table: "ArrivingFlight");

            migrationBuilder.DropColumn(
                name: "Origin",
                table: "ArrivingFlight");

            migrationBuilder.AlterColumn<string>(
                name: "FlightNumber",
                table: "ArrivingFlight",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CarrierId",
                table: "ArrivingFlight",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DestinationId",
                table: "ArrivingFlight",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OriginId",
                table: "ArrivingFlight",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ArrivingFlight_DestinationId",
                table: "ArrivingFlight",
                column: "DestinationId");

            migrationBuilder.CreateIndex(
                name: "IX_ArrivingFlight_OriginId",
                table: "ArrivingFlight",
                column: "OriginId");

            migrationBuilder.AddForeignKey(
                name: "FK_ArrivingFlight_Airport_DestinationId",
                table: "ArrivingFlight",
                column: "DestinationId",
                principalTable: "Airport",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ArrivingFlight_Airport_OriginId",
                table: "ArrivingFlight",
                column: "OriginId",
                principalTable: "Airport",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ArrivingFlight_Carrier_CarrierId",
                table: "ArrivingFlight",
                column: "CarrierId",
                principalTable: "Carrier",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ArrivingFlight_Airport_DestinationId",
                table: "ArrivingFlight");

            migrationBuilder.DropForeignKey(
                name: "FK_ArrivingFlight_Airport_OriginId",
                table: "ArrivingFlight");

            migrationBuilder.DropForeignKey(
                name: "FK_ArrivingFlight_Carrier_CarrierId",
                table: "ArrivingFlight");

            migrationBuilder.DropIndex(
                name: "IX_ArrivingFlight_DestinationId",
                table: "ArrivingFlight");

            migrationBuilder.DropIndex(
                name: "IX_ArrivingFlight_OriginId",
                table: "ArrivingFlight");

            migrationBuilder.DropColumn(
                name: "DestinationId",
                table: "ArrivingFlight");

            migrationBuilder.DropColumn(
                name: "OriginId",
                table: "ArrivingFlight");

            migrationBuilder.AddColumn<int>(
                name: "FlightStatus",
                table: "DepartingFlight",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ReasonOfCancelationId",
                table: "DepartingFlight",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "FlightNumber",
                table: "ArrivingFlight",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<int>(
                name: "CarrierId",
                table: "ArrivingFlight",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<DateTime>(
                name: "ActualArrivalTime",
                table: "ArrivingFlight",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "AirportCode",
                table: "ArrivingFlight",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "FlightStatus",
                table: "ArrivingFlight",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Origin",
                table: "ArrivingFlight",
                type: "TEXT",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_DepartingFlight_ReasonOfCancelationId",
                table: "DepartingFlight",
                column: "ReasonOfCancelationId");

            migrationBuilder.AddForeignKey(
                name: "FK_ArrivingFlight_Carrier_CarrierId",
                table: "ArrivingFlight",
                column: "CarrierId",
                principalTable: "Carrier",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DepartingFlight_CancellationReason_ReasonOfCancelationId",
                table: "DepartingFlight",
                column: "ReasonOfCancelationId",
                principalTable: "CancellationReason",
                principalColumn: "Id");
        }
    }
}
