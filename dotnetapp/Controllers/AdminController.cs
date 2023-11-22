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
    //    ApplicationDbContext context = new ApplicationDbContext();

        public AdminController(ApplicationDbContext _context)
        {
            context = _context;
        }

        [HttpGet]
 
        [Route("ListTeam")]
        public IActionResult GetTeams()
        {
            var data=from m in context.Teams select m;
            return Ok(data);
        }

        [HttpGet]
        [Route("ListPlayer")]
        public IActionResult GetPlayer()
        {
            var data=from m in context.Players select m;
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
        [HttpPost]
        [Route("AddTeam")]
        public IActionResult Post(Team Team)
        {
            if(ModelState.IsValid)
            {
                try{
                    context.Teams.Add(Team);
                    context.SaveChanges();
 
                }
                catch(System.Exception ex){
                    return BadRequest(ex.InnerException.Message);
 
                }
            }
            return Created("Record Added",Team);
 
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
        [HttpDelete]
        [Route("DeleteTeam/{id}")]
        public IActionResult Delete(int id)
        {
  
                var data=context.Teams.Find(id);
                context.Teams.Remove(data);
                context.SaveChanges();
                return Ok();
 
           
        }


        // ------------Player Controller---------------------

        [HttpPost]
        [Route("AddPlayer")]
        public IActionResult Post(Player Player)
        {
            if(ModelState.IsValid)
            {
                try{
                    context.Players.Add(Player);
                    context.SaveChanges();
 
                }
                catch(System.Exception ex){
                    return BadRequest(ex.InnerException.Message);
 
                }
            }
            return Created("Record Added", Player);
 
        }

        [HttpPut]
        [Route("EditPlayer/{id}")]
        public IActionResult PutPlayer(int id, Player Player)
        {
            if(ModelState.IsValid)
            {
                Player mv = context.Players.Find(id);
                mv.Name = Player.Name;
                mv.Age = Player.Age;
                mv.Category = Player.Category;
                mv.BiddingPrice = Player.BiddingPrice;
                context.SaveChanges();
                return Ok();
               
 
 
 
            }
            return BadRequest("Unable to Edit Record");
        }

        [HttpDelete]
        [Route("DeletePlayer/{id}")]
        public IActionResult DeletePlayer(int id)
        {
  
                var data=context.Players.Find(id);
                context.Players.Remove(data);
                context.SaveChanges();
                return Ok();
 
           
        }

        [HttpGet]
        [Route("DisplayTeamPlayers/(id)")]
 
        public IActionResult GetMovieDetail(int id)
        {
            var data = from d in context.Players where d.TeamId == id select new{
                Name = d.Name, Age = d.Age, Category = d.Category, BiddingPrice = d.BiddingPrice};
                return Ok(data);
        }

    }
}