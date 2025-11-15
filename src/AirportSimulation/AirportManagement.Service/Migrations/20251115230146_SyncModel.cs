using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AirportManagement.Service.Migrations
{
    /// <inheritdoc />
    public partial class SyncModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AirportId",
                table: "Taxiway",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "AirportId",
                table: "Runway",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "AirportId",
                table: "Gate",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Taxiway_AirportId",
                table: "Taxiway",
                column: "AirportId");

            migrationBuilder.CreateIndex(
                name: "IX_Runway_AirportId",
                table: "Runway",
                column: "AirportId");

            migrationBuilder.CreateIndex(
                name: "IX_Gate_AirportId",
                table: "Gate",
                column: "AirportId");

            migrationBuilder.AddForeignKey(
                name: "FK_Gate_Airport_AirportId",
                table: "Gate",
                column: "AirportId",
                principalTable: "Airport",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Runway_Airport_AirportId",
                table: "Runway",
                column: "AirportId",
                principalTable: "Airport",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Taxiway_Airport_AirportId",
                table: "Taxiway",
                column: "AirportId",
                principalTable: "Airport",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gate_Airport_AirportId",
                table: "Gate");

            migrationBuilder.DropForeignKey(
                name: "FK_Runway_Airport_AirportId",
                table: "Runway");

            migrationBuilder.DropForeignKey(
                name: "FK_Taxiway_Airport_AirportId",
                table: "Taxiway");

            migrationBuilder.DropIndex(
                name: "IX_Taxiway_AirportId",
                table: "Taxiway");

            migrationBuilder.DropIndex(
                name: "IX_Runway_AirportId",
                table: "Runway");

            migrationBuilder.DropIndex(
                name: "IX_Gate_AirportId",
                table: "Gate");

            migrationBuilder.DropColumn(
                name: "AirportId",
                table: "Taxiway");

            migrationBuilder.DropColumn(
                name: "AirportId",
                table: "Runway");

            migrationBuilder.DropColumn(
                name: "AirportId",
                table: "Gate");
        }
    }
}
