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

        // [HttpPost]
        // public IActionResult CreateUser(User user)
        // {
        //     user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);
        //     user.CreatedAt = DateTime.UtcNow;

        //     _context.Users.Add(user);
        //     _context.SaveChanges();

        //     return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        // }

        [HttpPost]
        public IActionResult Register([FromBody] RegisterDto registerDto)
        {
            if (registerDto == null)
            {
                return BadRequest("Invalid registration data.");
            }

            if (_context.Users.Any(u => u.Email == registerDto.Email))
            {
                return Conflict("Email already in use.");
            }

            var HashPassword = BCrypt.Net.BCrypt.HashPassword(registerDto.Password);
            var user = new User
            {
                Name = registerDto.Name,
                Email = registerDto.Email,
                PasswordHash = HashPassword,
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, new {
                user.Id,
                user.Name,
                user.Email
            });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto logindto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == logindto.Email);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(logindto.Password, user.PasswordHash);
            if (!isPasswordValid)
            {
                return Unauthorized("Invalid password.");
            }

            return Ok(new
            {
                user.Id,
                user.Name,
                user.Email
            });
        }

        // delete user
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            _context.Users.Remove(user);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
