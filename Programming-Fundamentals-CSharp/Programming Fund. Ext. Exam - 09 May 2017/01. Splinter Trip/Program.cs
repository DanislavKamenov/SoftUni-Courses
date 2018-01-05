using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01._Splinter_Trip
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal distance = decimal.Parse(Console.ReadLine());
            decimal capacity = decimal.Parse(Console.ReadLine());
            decimal heavyWindDistance = decimal.Parse(Console.ReadLine());

            decimal fuelNeeded = (distance - heavyWindDistance) * 25 + (heavyWindDistance * 25 * 1.5M);
            fuelNeeded += fuelNeeded * 0.05M;

            Console.WriteLine($"Fuel needed: {Math.Round(fuelNeeded, 2, MidpointRounding.AwayFromZero)}L");

            if (capacity >= fuelNeeded)
            {
                Console.WriteLine($"Enough with {(capacity - fuelNeeded).ToString("0.00")}L to spare!");
            }
            else
            {
                Console.WriteLine($"We need {Math.Round(Math.Abs(capacity - fuelNeeded), 2, MidpointRounding.AwayFromZero)}L more fuel.");
            }
        }
    }
}
