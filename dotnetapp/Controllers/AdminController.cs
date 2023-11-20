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
    [Route("/[controller]")]

    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public AdminController(ApplicationDbContext _context)
        {
            context = _context;
        }

        [HttpGet]
        [Route("showplayers")]

        public IActionResult GetPlayers()
        {
            var data=context.Players.ToList();
            return Ok(data);

        }
        public IActionResult CreatePlayer()
        {
            return Ok();
        }
        [HttpPost]
        [Route("AddPlayers")]
        public IActionResult CreatePlayer(Player p)
        {
            context.Players.Add(p);
            context.SaveChanges();
            // return Created("Players Added Successfully",p);
            return Ok();
        }
        public IActionResult CreateTeams()
        {
            return Ok();
        }
        [HttpPost]
        [Route("AddTeams")]
        public IActionResult CreateTeams(Team t)
        {
            context.Teams.Add(t);
            context.SaveChanges();
            // return Created("Teams added Successfully",p);
            return Ok();
        }
        
        [HttpGet]
        [Route("ShowTeams")]

        public IActionResult GetTeams()
        {
            var data=context.Teams.ToList();
            return Ok(data);
            
        }
        [HttpPut]
        [Route("EditPlayer/{id}")]
        public IActionResult PutPlayer(int id, Player p)
        {
            Player player=context.Players.Find(id);
            if(ModelState.IsValid){
                player.Id=p.Id;
                player.Name=p.Name;
                player.Age=p.Age;
                player.BiddingPrice=p.BiddingPrice;
                player.Category=p.Category;
                
                
            }
            return Ok();
        }
        [HttpDelete]
        [Route("DeletePlayer/{id}")]
        public IActionResult DeletePlayer(int id)
        {
            try{

            var data=context.Players.Find(id);
            context.Players.Remove(data);
            return Ok();
            }
            catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }



        
    }
}