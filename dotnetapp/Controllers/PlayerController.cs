    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using dotnetapp.Models;

    namespace dotnetapp.Controllers
    {
        

        public class UserController : ControllerBase
        {
            private readonly ApplicationDbContext context;

            public UserController(ApplicationDbContext _context)
            {
                context = _context;
            }

            [HttpGet]
    
            [Route("ListTeam")]
            public IActionResult Get()
            {
                var data=from m in context.Teams select m;
                return Ok(data);
            }

            [HttpPost]
            [Route("UserLogin")]

            public IActionResult Login() {
                return Ok();
            }

            [HttpPost]
            [Route("UserRegister")]
            public IActionResult Register() {
                return Ok();
            }



            
        }
    }