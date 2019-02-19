using Microsoft.AspNetCore.Mvc;

namespace CentricMVC6.Controllers
{
    public class MapsController : Controller
    {
        public IActionResult Google()
        {
            return View();
        }
        public IActionResult GoogleFull()
        {
            return View();
        }
        public IActionResult Vector()
        {
            return View();
        }
        public IActionResult Datamaps()
        {
            return View();
        }
    }
}