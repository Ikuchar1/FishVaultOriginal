using Microsoft.EntityFrameworkCore;
using FishVault.Api.Models;
using System.Linq.Expressions;

namespace FishVault.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Catch> Catches { get; set; }
}