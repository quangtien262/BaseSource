using Microsoft.AspNetCore.Mvc;

namespace CentricMVC6.Controllers
{
    public class LayoutsController : Controller
    {
        public IActionResult Boxed()
        {
            return View();
        }
        public IActionResult Columns()
        {
            return View();
        }
        public IActionResult Containers()
        {
            return View();
        }
        public IActionResult Overlap()
        {
            return View();
        }
        public IActionResult Tabs()
        {
            return View();
        }
    }
}