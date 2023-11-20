using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Player> Players{get;set;}
        public virtual DbSet<Team> Teams{get;set;}

        public virtual DbSet<User> Users{get;set;}
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("User ID=sa;password=examlyMssql@123; server=localhost;Database=IplDB;trusted_connection=false;Persist Security Info=False;Encrypt=False;");
            }
        }

        // Add DbSet properties for other entities as needed
    }
}
