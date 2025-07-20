using Microsoft.AspNetCore.Mvc;
using FishVault.Api.Data;
using FishVault.Api.Models;

namespace FishVault.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FishingTripController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FishingTripController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/fishingtrip
        [HttpGet]
        [Route("")]
        public IActionResult GetFishingTrips()
        {
            var fishingTrips = _context.FishingTrips.ToList();
            return Ok(fishingTrips);
        }

        // GET: api/fishingtrip/{id}
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetFishingTrip(int id)
        {
            var fishingTrip = _context.FishingTrips.Find(id);
            if (fishingTrip == null)
            {
                return NotFound();
            }
            return Ok(fishingTrip);
        }

        // POST: api/fishingtrip
        [HttpPost]
        [Route("")]
        public IActionResult CreateFishingTrip([FromBody] FishingTrip fishingTrip)
        {
            if (fishingTrip == null)
            {
                return BadRequest();
            }

            _context.FishingTrips.Add(fishingTrip);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetFishingTrip), new { id = fishingTrip.Id }, fishingTrip);
        }

        // PUT: api/fishingtrip/{id}
        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateFishingTrip(int id, [FromBody] FishingTrip fishingTrip)
        {
            if (fishingTrip == null || fishingTrip.Id != id)
            {
                return BadRequest();
            }

            var existingTrip = _context.FishingTrips.Find(id);
            if (existingTrip == null)
            {
                return NotFound();
            }

            // Update only the properties that exist
            existingTrip.Location = fishingTrip.Location;
            existingTrip.TripDate = fishingTrip.TripDate;
            existingTrip.Notes = fishingTrip.Notes;
            // If you want to update Catches, handle it separately

            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/fishingtrip/{id}
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteFishingTrip(int id)
        {
            var fishingTrip = _context.FishingTrips.Find(id);
            if (fishingTrip == null)
            {
                return NotFound();
            }

            _context.FishingTrips.Remove(fishingTrip);
            _context.SaveChanges();

            return NoContent();
        }
    }
}