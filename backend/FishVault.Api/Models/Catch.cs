namespace FishVault.Api.Models;

using System.ComponentModel.DataAnnotations;
    public class Catch
    {
        // needs an Id, User Id, species string, length float, weight float, location string, notes string, created at datetime
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Species { get; set; } = string.Empty;
        public float Length { get; set; }
        public float Weight { get; set; }
        public string Location { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public User? User { get; set; } = null!;
    }
