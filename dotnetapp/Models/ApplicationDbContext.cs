using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Models {
    public class ApplicationDbContext : DbContext {
        public virtual DbSet<Player> Players {get; set;}
        public virtual DbSet<Team> Teams {get; set;}
        public virtual DbSet<User> Users {get; set;}

        public ApplicationDbContext() {

        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {

        } 

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if(!optionsBuilder.IsConfigured) {
                optionsBuilder.UseSqlServer("User ID=sa;password=examlyMssql@123; server=localhost;Database=IPLDb;trusted_connection=false;Persist Security Info=False;Encrypt=False");
            }
        }
    }
}