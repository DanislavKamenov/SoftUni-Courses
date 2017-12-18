using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using AnimeList.Models;

namespace AnimeList.Controllers
{
    [ValidateInput(false)]
    public class AnimeController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var db = new AnimeListDbContext())
            {
                List<Anime> animes = db.Animes.ToList();

                return View(animes);
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
        public ActionResult Create(Anime anime)
        {
            if (ModelState.IsValid)
            {
                using (var db = new AnimeListDbContext())
                {
                    db.Animes.Add(anime);
                    db.SaveChanges();

                    return Redirect("/");
                }
            }
            return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        }

        [HttpGet]
        [Route("delete/{id}")]
        public ActionResult Delete(int? id)
        {
            using (var db = new AnimeListDbContext())
            {
                Anime anime = db.Animes.Where(x => x.Id == id).First();

                return View(anime);

            }               
        }

        [HttpPost]
        [Route("delete/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirm(int? id, Anime animeModel)
        {            
            using (var db = new AnimeListDbContext())
            {
                db.Animes.Attach(animeModel);
                db.Animes.Remove(animeModel);
                db.SaveChanges();

                return Redirect("/");
            }
        }
    }
}