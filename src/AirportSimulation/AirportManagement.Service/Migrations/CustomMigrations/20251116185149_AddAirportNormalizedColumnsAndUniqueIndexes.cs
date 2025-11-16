using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AirportManagement.Service.Migrations.CustomMigrations
{
    /// <inheritdoc />
    public partial class AddAirportNormalizedColumnsAndUniqueIndexes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NormalizedAirportCode",
                table: "Airport",
                type: "TEXT",
                maxLength: 10,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedName",
                table: "Airport",
                type: "TEXT",
                maxLength: 255,
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "UX_Airport_NormalizedAirportCode",
                table: "Airport",
                column: "NormalizedAirportCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UX_Airport_NormalizedName",
                table: "Airport",
                column: "NormalizedName",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "UX_Airport_NormalizedAirportCode",
                table: "Airport");

            migrationBuilder.DropIndex(
                name: "UX_Airport_NormalizedName",
                table: "Airport");

            migrationBuilder.DropColumn(
                name: "NormalizedAirportCode",
                table: "Airport");

            migrationBuilder.DropColumn(
                name: "NormalizedName",
                table: "Airport");
        }
    }
}
