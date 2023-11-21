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
        
        [HttpPost]
        [Route("AddPlayers")]
        public IActionResult Post(Player p)
        {
            context.Players.Add(p);
            context.SaveChanges();
            // return Created("Players Added Successfully",p);
            return Created("Added successfully",p);
        }
        [HttpPost]
        [Route("AddTeams")]
        public IActionResult PostTeams(Team t)
        {
            context.Teams.Add(t);
            context.SaveChanges();
            return Created("Team Addedd",t);
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
            
                // player.Id=p.Id;
                player.Name=p.Name;
                player.Age=p.Age;
                player.BiddingPrice=p.BiddingPrice;
                player.Category=p.Category;
                context.SaveChanges();
                
                
            
            return Ok();
        }
        [HttpGet]
 
        [Route("ListPlayer/{id}")]
        public IActionResult GetOnePlayer(int id)
        {
            // var data=context.Teams.ToList();
            if(id==null)
            {
                return BadRequest("Id cannot be null");
            }
            var data=(from m in context.Players where m.Id==id select m).FirstOrDefault();
            // var data=context.Teams.Find(id);
            if(data==null)
            {
                return NotFound($"Player {id} not found");
            }
            return Ok(data);
           
        }
        [HttpGet]
 
        [Route("ListTeam/{id}")]
        public IActionResult Get(int id)
        {
            // var data=context.Teams.ToList();
            if(id==null)
            {
                return BadRequest("Id cannot be null");
            }
            var data=(from m in context.Teams where m.TeamId==id select m).FirstOrDefault();
            // var data=context.Teams.Find(id);
            if(data==null)
            {
                return NotFound($"Movie {id} not found");
            }
            return Ok(data);
           
        }
        [HttpDelete]
        [Route("DeletePlayer/{id}")]
        public IActionResult DeletePlayer(int id)
        {
            try{

            var data=context.Players.Find(id);
            context.Players.Remove(data);
            context.SaveChanges();
            return Ok();
            }
            catch(Exception ex){
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        [Route("EditTeam/{id}")]
        public IActionResult Put(int id, Team Team)
        {
            if(ModelState.IsValid)
            {
                Team mv = context.Teams.Find(id);
                mv.TeamName = Team.TeamName;
                context.SaveChanges();
                return Ok();
               
 
 
 
            }
            return BadRequest("Unable to Edit Record");
        }



        
    }
}