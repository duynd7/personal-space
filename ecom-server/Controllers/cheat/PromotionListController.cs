using Microsoft.AspNetCore.Mvc;
using ecom_server.EcomLogic;

namespace ecom_server.Controllers.Cheat;

[ApiController]
[Route("cheat/[controller]")]
public class PromotionListController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        List<PromotionData> promotionList = new List<PromotionData>
        {
            new PromotionData() { Id = "0001", ImagePath = "./images/promo_0001.png" },
            new PromotionData() { Id = "0002", ImagePath = "./images/promo_0001.png" },
            new PromotionData() { Id = "0003", ImagePath = "./images/promo_0001.png" },
            new PromotionData() { Id = "0004"},
            new PromotionData() { Id = "0005", ImagePath = "./images/promo_0001.png" },
            new PromotionData() { Id = "0006", ImagePath = "./images/promo_0001.png" },
            new PromotionData() { Id = "0007", ImagePath = "./images/promo_0001.png" },
        };

        return Ok(promotionList);
    }
}