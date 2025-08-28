using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AirportManagement.Service.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate082420251121 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Airport",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 120, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 255, nullable: true),
                    AirportCode = table.Column<string>(type: "TEXT", maxLength: 3, nullable: false),
                    Created = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Updated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airport", x => x.Id);
                });

            migrationBuilder.AddColumn<byte[]>(
                name: "Timestamp",
                table: "Airport",
                rowVersion: true,
                nullable: true);

            migrationBuilder.Sql(
                @"
                    CREATE TRIGGER SetContactTimestampOnUpdate
                    AFTER UPDATE ON Contacts
                    BEGIN
                        UPDATE Contacts
                        SET Timestamp = randomblob(8)
                        WHERE rowid = NEW.rowid;
                    END
                ");
                        migrationBuilder.Sql(
                            @"
                    CREATE TRIGGER SetContactTimestampOnInsert
                    AFTER INSERT ON Contacts
                    BEGIN
                        UPDATE Contacts
                        SET Timestamp = randomblob(8)
                        WHERE rowid = NEW.rowid;
                    END
            ");

            migrationBuilder.CreateTable(
                name: "Gate",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    ConcourseId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 120, nullable: false),
                    GateType = table.Column<int>(type: "INTEGER", nullable: false),
                    IsInternational = table.Column<bool>(type: "INTEGER", nullable: false),
                    Created = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Updated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gate", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Runway",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    MagneticHeading = table.Column<int>(type: "INTEGER", nullable: true),
                    IsParallel = table.Column<bool>(type: "INTEGER", nullable: true),
                    Position = table.Column<int>(type: "INTEGER", nullable: true),
                    Created = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Updated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Runway", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Taxiway",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Created = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Updated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Taxiway", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Terminal",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    AirportId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 120, nullable: false),
                    Created = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Updated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Terminal", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Terminal_Airport_AirportId",
                        column: x => x.AirportId,
                        principalTable: "Airport",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Terminal_AirportId",
                table: "Terminal",
                column: "AirportId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Gate");

            migrationBuilder.DropTable(
                name: "Runway");

            migrationBuilder.DropTable(
                name: "Taxiway");

            migrationBuilder.DropTable(
                name: "Terminal");

            migrationBuilder.DropTable(
                name: "Airport");
        }
    }
}
