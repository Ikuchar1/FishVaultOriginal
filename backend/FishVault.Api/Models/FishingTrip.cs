namespace FishVault.Api.Models
{
    public class FishingTrip
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime TripDate { get; set; } = DateTime.UtcNow;
        public string Location { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
        //relationships
        public User? User { get; set; } = null!;
        public List<Catch> Catches { get; set; } = new List<Catch>();

    }
}