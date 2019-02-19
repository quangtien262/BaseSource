using Microsoft.AspNetCore.Mvc;

namespace CentricMVC6.Controllers
{
    public class ChartsController : Controller
    {
        public IActionResult Flot()
        {
            return View();
        }
        public IActionResult Radial()
        {
            return View();
        }
        public IActionResult Rickshaw()
        {
            return View();
        }

    }
}