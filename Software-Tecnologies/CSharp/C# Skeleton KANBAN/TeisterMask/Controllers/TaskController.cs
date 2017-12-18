using System;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using TeisterMask.Models;

namespace TeisterMask.Controllers
{
        [ValidateInput(false)]
	public class TaskController : Controller
	{
	    [HttpGet]
            [Route("")]
	    public ActionResult Index()
	    {
            using (var db = new TeisterMaskDbContext())
            {
                var tasks = db.Tasks.ToList();

                return View(tasks);
            }                  
		}

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
		{
            return View();
		}

		[HttpPost]
		[Route("create")]
        [ValidateAntiForgeryToken]
		public ActionResult Create(Task task)
		{
            if (ModelState.IsValid)
            {
                using (var db = new TeisterMaskDbContext())
                {
                    if (IsCorrectStatus(task.Status))
                    {
                        db.Tasks.Add(task);
                        db.SaveChanges();

                        return RedirectToAction("Index");
                    }
                }
            }
            return View();
        }

		[HttpGet]
		[Route("edit/{id}")]
        public ActionResult Edit(int id)
		{
            using (var db = new TeisterMaskDbContext())
            {
                Task task = new Task();
                task = db.Tasks.Find(id);

                return View(task);
            }
        }

		[HttpPost]
		[Route("edit/{id}")]
        [ValidateAntiForgeryToken]
		public ActionResult EditConfirm(int id, Task taskModel)
		{
            if (IsCorrectStatus(taskModel.Status))
            {
                using (var db = new TeisterMaskDbContext())
                {
                    Task task = new Task();
                    task = db.Tasks.Find(id);

                    task.Title = taskModel.Title;
                    task.Status = taskModel.Status;

                    db.SaveChanges();
                    

                    return RedirectToAction("Index");
                }
            }
            return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        }

        public bool IsCorrectStatus(string status)
        {
            switch (status)
            {
                case "Open":
                    return true;
                case "In Progress":
                    return true;
                case "Finished":
                    return true;
            }
            return false;
        }
    }
}