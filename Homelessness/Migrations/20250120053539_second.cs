using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Homelessness.Migrations
{
    /// <inheritdoc />
    public partial class second : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Donatnow",
                table: "Donatnow");

            migrationBuilder.DropColumn(
                name: "DonationId",
                table: "Donatnow");

            migrationBuilder.DropColumn(
                name: "DonationDate",
                table: "Donatnow");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Donatnow",
                table: "Donatnow",
                column: "dname");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Donatnow",
                table: "Donatnow");

            migrationBuilder.AddColumn<int>(
                name: "DonationId",
                table: "Donatnow",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<DateTime>(
                name: "DonationDate",
                table: "Donatnow",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Donatnow",
                table: "Donatnow",
                column: "DonationId");
        }
    }
}
