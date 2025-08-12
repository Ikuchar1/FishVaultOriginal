using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace FishVault.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddCatchImageUrl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Catches_FishingTrips_FishingTripId",
                table: "Catches");

            migrationBuilder.DropTable(
                name: "FishingTrips");

            migrationBuilder.DropIndex(
                name: "IX_Catches_FishingTripId",
                table: "Catches");

            migrationBuilder.DropColumn(
                name: "FishingTripId",
                table: "Catches");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Catches",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Catches");

            migrationBuilder.AddColumn<int>(
                name: "FishingTripId",
                table: "Catches",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "FishingTrips",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    Location = table.Column<string>(type: "text", nullable: false),
                    Notes = table.Column<string>(type: "text", nullable: false),
                    TripDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FishingTrips", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FishingTrips_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Catches_FishingTripId",
                table: "Catches",
                column: "FishingTripId");

            migrationBuilder.CreateIndex(
                name: "IX_FishingTrips_UserId",
                table: "FishingTrips",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Catches_FishingTrips_FishingTripId",
                table: "Catches",
                column: "FishingTripId",
                principalTable: "FishingTrips",
                principalColumn: "Id");
        }
    }
}
