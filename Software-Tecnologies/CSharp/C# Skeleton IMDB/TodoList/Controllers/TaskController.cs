using System;
using System.Linq;
using System.Web.Mvc;
using TodoList.Models;

namespace TodoList.Controllers
{
        [ValidateInput(false)]
	public class TaskController : Controller
	{
	    [HttpGet]
        [Route("")]
	    public ActionResult Index()
	    {
	        //TODO: Implement me...
	        return View();
        }

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
		{
			//TODO: Implement me...
		    return null;
		}

		[HttpPost]
		[Route("create")]
        [ValidateAntiForgeryToken]
		public ActionResult Create(Task task)
		{
		    //TODO: Implement me...
		    return null;
        }

		[HttpGet]
		[Route("delete/{id}")]
        public ActionResult Delete(int id)
		{
		    //TODO: Implement me...
		    return null;
        }

		[HttpPost]
		[Route("delete/{id}")]
        [ValidateAntiForgeryToken]
		public ActionResult DeleteConfirm(int id)
		{
		    //TODO: Implement me...
		    return null;
        }
	}
}