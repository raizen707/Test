using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Test.Controllers
{
    [Route("api/[controller]")]
    public class ConcursosDataController : Controller
    {
        private static string[] Descripciones = new[]
        {
            "Compra Directa", "Contrato Abierto", "Cotización", "Subasta Publica", "Subasta Inversa", "Ventas", "Va que zi kike", "Obligame Perro"
        };

        [HttpGet("[action]")]
        public IEnumerable<Concurso> ObtenerConcursos(int startDateIndex)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Concurso
            {
                DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                NOG = rng.Next(85555, 95555),
                Monto = rng.Next(200, 5555),
                Descripcion = Descripciones[rng.Next(Descripciones.Length)]
            });
        }

        public class Concurso
        {
            public string DateFormatted { get; set; }
            public string Descripcion { get; set; }
            public int NOG { get; set; }
            public double Monto { get; set; }
             
        }
    }
}
