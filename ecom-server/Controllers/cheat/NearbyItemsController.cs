using Microsoft.AspNetCore.Mvc;
using ecom_server.EcomLogic;

namespace ecom_server.Controllers.Cheat;

[ApiController]
[Route("cheat/[controller]")]
public class NearbyItemsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        List<NearbyItemData> items = new()
        {
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"},
            new() {Id = "0001", DisplayName = "Item 0001", FullPrice = 70000, Discount = 0.1f, ImagePath = "./images/hamburger.jpg", ShopName = "Shop Temp"}
        };

        return Ok(items);
    }
}