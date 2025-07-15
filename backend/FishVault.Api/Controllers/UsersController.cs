using Microsoft.AspNetCore.Mvc;
using FishVault.Api.Data;
using FishVault.Api.Models;

namespace FishVault.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/users
        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = _context.Users.ToList();
            return Ok(users);
        }

        // [HttpGet]
        // public IActionResult GetUsers()
        // {
        //     return Ok("Users endpoint is working!");
        // }

        // POST: api/users
        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            user.CreatedAt = DateTime.UtcNow;
            _context.Users.Add(user);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        }
    }
}
