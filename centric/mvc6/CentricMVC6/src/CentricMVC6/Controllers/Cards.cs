using Microsoft.AspNetCore.Mvc;

namespace CentricMVC6.Controllers
{
    public class CardsController : Controller
    {
        public IActionResult Cards()
        {
            return View();
        }
    }
}