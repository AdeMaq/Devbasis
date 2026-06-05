using Microsoft.AspNetCore.Mvc;
using WebApplication1.Api.DTOs;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(UserDto req)
        {
            if (await _userService.ExistsByEmailAsync(req.Email))
                return BadRequest("Email already registered.");

            await _userService.RegisterAsync(req.Username, req.Email, req.Password);
            return Ok("User registered successfully!");
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserDto req)
        {
            var cred = await _userService.LoginAsync(req.Email, req.Password);
            if (cred == null)
                return BadRequest("Invalid email or password.");

            return Ok("Login successful.");
        }
    }
}
