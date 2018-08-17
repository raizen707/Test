using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RESTFulConcursos.Models;

namespace RESTFulConcursos.Controllers
{
    public class ConcursosController : ApiController
    {
        private ConcursosEntities db = new ConcursosEntities();

        // GET: api/Concursos
        public IQueryable<Concurso> GetConcursoes()
        {
            return db.Concursoes;
        }

        // GET: api/Concursos/5
        [ResponseType(typeof(Concurso))]
        public IHttpActionResult GetConcurso(int id)
        {
            Concurso concurso = db.Concursoes.Find(id);
            if (concurso == null)
            {
                return NotFound();
            }

            return Ok(concurso);
        }

        // PUT: api/Concursos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutConcurso(int id, Concurso concurso)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != concurso.Id)
            {
                return BadRequest();
            }

            db.Entry(concurso).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConcursoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Concursos
        [ResponseType(typeof(Concurso))]
        public IHttpActionResult PostConcurso(Concurso concurso)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Concursoes.Add(concurso);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = concurso.Id }, concurso);
        }

        // DELETE: api/Concursos/5
        [ResponseType(typeof(Concurso))]
        public IHttpActionResult DeleteConcurso(int id)
        {
            Concurso concurso = db.Concursoes.Find(id);
            if (concurso == null)
            {
                return NotFound();
            }

            db.Concursoes.Remove(concurso);
            db.SaveChanges();

            return Ok(concurso);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ConcursoExists(int id)
        {
            return db.Concursoes.Count(e => e.Id == id) > 0;
        }
    }
}