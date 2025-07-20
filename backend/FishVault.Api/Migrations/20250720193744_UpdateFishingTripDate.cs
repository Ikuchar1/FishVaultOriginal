using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FishVault.Api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateFishingTripDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "FishingTrips");

            migrationBuilder.RenameColumn(
                name: "StartTime",
                table: "FishingTrips",
                newName: "TripDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TripDate",
                table: "FishingTrips",
                newName: "StartTime");

            migrationBuilder.AddColumn<DateTime>(
                name: "EndTime",
                table: "FishingTrips",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
