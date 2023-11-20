using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
 
namespace dotnetapp.Models
{
       
        public class Player
        {
           
            [Key]
            public int Id {get;set;}
 
            [ForeignKey("Team")]
            public int TeamId {get; set;}
 
 
            [Required(ErrorMessage = "Name is required.")]
            public string Name {get;set;}
            public int Age {get;set;}
            public string Category {get;set;}
            [Range(0.1,int.MaxValue, ErrorMessage = "Bidding amount must be greater than 0.")]
            public decimal BiddingAmount {get;set;}  
            public Team ?Team {get; set;}
        }
}