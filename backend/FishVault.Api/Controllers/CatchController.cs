using Microsoft.AspNetCore.Mvc;
using FishVault.Api.Data;
using FishVault.Api.Models;

namespace FishVault.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatchController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CatchController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/catch
        [HttpGet]
        [Route("")]
        public IActionResult GetCatch()
        {
            var catches = _context.Catches.ToList();
            return Ok(catches);
        }

        // GET: api/catch/user/{userId}
        [HttpGet("user/{userId}")]
        public IActionResult GetUserCatches(int userId)
        {
            var userCatches = _context.Catches.Where(c => c.UserId == userId).ToList();
            return Ok(userCatches);
        }

        // GET: api/catch/{id}
        [HttpGet("{id}")]
        public IActionResult GetCatch(int id)
        {
            var catchItem = _context.Catches.Find(id);
            if (catchItem == null)
                return NotFound();
            return Ok(catchItem);
        }

        // POST: api/catch
        [HttpPost]
        [Route("")]
        public IActionResult CreateCatch(Catch catchItem)
        {
            // Require userId to be present
            if (catchItem.UserId == 0)
            {
                return Unauthorized("You must be logged in to add a catch.");
            }
            catchItem.CreatedAt = DateTime.UtcNow;
            _context.Catches.Add(catchItem);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCatch), new { id = catchItem.Id }, catchItem);
        }

        // PUT: api/catches/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateCatch(int id, Catch catchItem)
        {
            var existingCatch = _context.Catches.Find(id);
            if (existingCatch == null)
                return NotFound();

            // Update properties
            existingCatch.Species = catchItem.Species;
            existingCatch.Length = catchItem.Length;
            existingCatch.Weight = catchItem.Weight;
            existingCatch.Location = catchItem.Location;
            existingCatch.Notes = catchItem.Notes;
            existingCatch.UserId = catchItem.UserId;
            // Don't update CreatedAt or Id

            _context.SaveChanges();
            return NoContent();
        }

        // DELETE: api/catches/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteCatch(int id)
        {
            var catchItem = _context.Catches.Find(id);
            if (catchItem == null)
                return NotFound();

            _context.Catches.Remove(catchItem);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
