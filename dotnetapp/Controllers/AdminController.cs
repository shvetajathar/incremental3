using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("/[contoller]")]

    

    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public AdminController(ApplicationDbContext _context)
        {
            context = _context;
        }

        public IActionResult GetPlayers()
        {
            var data=context.Players.ToList();
            return Ok(data);

        }
        public IActionResult GetTeams()
        {
            var data=context.Teams.ToList();
            return Ok(data);
            
        }
        [HttpPut]
        [Route("EditPlayer/{id}")]
        public IActionResult PutPlayer(int id, Player p)
        {
            if(ModelState.IsValid){
            Player P=context.Players.Find(id);
            P.Id=p.Id;
            P.Name=p.Name;
            P.Age=P.Age;
            P.BiddingPrice=P.BiddingPrice;
            P.Category=P.Category;
            context.SaveChanges();
            }
            return Ok();
        }
        public IActionResult DeletePlayer(int id)
        {
            var data=context.Players.Find(id);
            context.Players.Remove(data);
            return Ok();
        }



        
    }
}