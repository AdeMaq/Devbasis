using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        // Link back to User
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
