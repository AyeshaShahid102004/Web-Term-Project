using Homelessness.Data;
using Homelessness.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Homelessness.Controllers
{
    public class HomeController : Controller
    {
        

        public IActionResult Index()

        {
            return View();
        }
        public IActionResult Becomemember()
        {
            return View();
        }
        public IActionResult Selfassessmenttool()
        {
            return View();
        }
        public IActionResult Supportinglocalpartnership()
        {
            return View();
        }
        public IActionResult Workforce()
        {
            return View();
        }
        public IActionResult Donat()
        {
            return View();
        }
        public IActionResult Donatnow()
        {
            return View();
        }
        public IActionResult Membership()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private readonly ILogger<HomeController> _logger;
        private readonly AppDbContext _appDbContext;
        public HomeController(ILogger<HomeController> logger, AppDbContext appDbContext)
        {
            _logger = logger;
            _appDbContext = appDbContext;
        }


       



    [HttpPost]
    public IActionResult SaveData(Donatnow apply)
    {
        if (ModelState.IsValid)
        {
            try
            {
                _appDbContext.Add(apply);
                _appDbContext.SaveChanges();
                ViewBag.Message = "Data saved successfully";
            }
            catch (Exception ex)
            {
                ViewBag.Message = "Error occurred";
            }
        }
        return View("index");
    }

}
    }

