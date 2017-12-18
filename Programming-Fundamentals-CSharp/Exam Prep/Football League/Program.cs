using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football_League
{
    class Program
    {
        static void Main(string[] args)
        {
            var capacity = int.Parse(Console.ReadLine());
            var fans = int.Parse(Console.ReadLine());
            var sectorA = 0.0;
            var sectorB = 0.0;
            var sectorV = 0.0;
            var sectorG = 0.0;
            for (int i = 0; i < fans; i++)
            {
                var sector = Console.ReadLine();
                switch (sector)
                {
                    case("A"):
                        sectorA += 1;
                        break;
                    case ("B"):
                        sectorB += 1;
                        break;
                    case ("V"):
                        sectorV += 1;
                        break;
                    case ("G"):
                        sectorG += 1;
                        break;
                }
            }
            var percentageA = (sectorA / fans) * 100;
            var percentageB = (sectorB / fans) * 100;
            var percentageV = (sectorV / fans) * 100;
            var percentageG = (sectorG / fans) * 100;
            double totalPercentage = (1.0 * fans / capacity) * 100;

            Console.WriteLine($"{percentageA,0:f2}%");
            Console.WriteLine($"{percentageB,0:f2}%");
            Console.WriteLine($"{percentageV,0:f2}%");
            Console.WriteLine($"{percentageG,0:f2}%");
            Console.WriteLine($"{totalPercentage,0:f2}%");
        }
    }
}
