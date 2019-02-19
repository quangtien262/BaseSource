using Microsoft.AspNetCore.Mvc;

namespace CentricMVC6.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Dashboard()
        {
            return View();
        }
    }
}