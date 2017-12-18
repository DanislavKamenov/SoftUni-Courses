using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timed_01_Grape_and_Rakia
{
    class Program
    {
        static void Main(string[] args)
        {
            var yard = double.Parse(Console.ReadLine());
            var kgPerMetre = double.Parse(Console.ReadLine());
            var waste = double.Parse(Console.ReadLine());
            var totalGrapes = yard * kgPerMetre - waste;
            var grapesForRakia = totalGrapes * 0.45;
            var grapesForSale = totalGrapes * 0.55;

            Console.WriteLine($"{(grapesForRakia / 7.5) * 9.80, 0:f2}");
            Console.WriteLine($"{grapesForSale * 1.50, 0:f2}");
        }
    }
}
