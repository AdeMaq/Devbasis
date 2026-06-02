using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IUserService
    {
        Task<User?> GetByEmailAsync(string email);
        Task<bool> ExistsByEmailAsync(string email);
        Task<User> RegisterAsync(string username, string email, string password);
        Task<User?> LoginAsync(string email, string password);
    }
}
