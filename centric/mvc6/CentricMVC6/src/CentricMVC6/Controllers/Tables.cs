using Microsoft.AspNetCore.Mvc;

namespace CentricMVC6.Controllers
{
    public class TablesController : Controller
    {
        public IActionResult Bootgrid()
        {
            return View();
        }
        public IActionResult Datatable()
        {
            return View();
        }
        public IActionResult Classic()
        {
            return View();
        }
    }
}