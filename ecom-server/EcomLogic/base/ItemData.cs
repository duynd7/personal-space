namespace ecom_server.EcomLogic;

public class ItemData
{
    public string Id { get; set; } = "";
    public string DisplayName { get; set; } = "";
    public int FullPrice { get; set; } = 0;
    public float Discount { get; set; } = 0f;
    public string ImagePath{ get; set; } = "";
    public string ShopName { get; set; } = "";

    public ItemData()
    {

    }
}