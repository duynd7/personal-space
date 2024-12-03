using Microsoft.AspNetCore.Mvc;

namespace ecom_server.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloWorldController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { message = "Hello, world" });
    }
}