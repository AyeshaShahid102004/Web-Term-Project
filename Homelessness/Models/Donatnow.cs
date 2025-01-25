using System.ComponentModel.DataAnnotations;

namespace Homelessness.Models
{
    public class Donatnow
    {


        [Key]

        [Required]
        [StringLength(100)]
        public string dname { get; set; }

        [Required]
        [EmailAddress]
        public string demail { get; set; }

        [Required]
        [Range(1, double.MaxValue, ErrorMessage = "Please enter a valid donation amount.")]
        public decimal damount { get; set; }

        [StringLength(500)]
        public string message { get; set; }



    }
    }

