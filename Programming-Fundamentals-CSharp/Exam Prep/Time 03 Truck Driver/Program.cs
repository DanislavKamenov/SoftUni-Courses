using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Time_03_Truck_Driver
{
    class Program
    {
        static void Main(string[] args)
        {
            var season = Console.ReadLine();
            var kmPerMonth = double.Parse(Console.ReadLine());
            var pricePerKm = 0.0;

            if (season == "Spring" || season == "Autumn")
            {
                if (kmPerMonth <= 5000)
                {
                    pricePerKm = 0.75;
                }
                else if (5000 < kmPerMonth && kmPerMonth <= 10000)
                {
                    pricePerKm = 0.95;
                }                
            }
            if (season == "Summer")
            {
                if (kmPerMonth <= 5000)
                {
                    pricePerKm = 0.90;
                }
                else if (5000 < kmPerMonth && kmPerMonth <= 10000)
                {
                    pricePerKm = 1.10;
                }
            }
            if (season == "Winter")
            {
                if (kmPerMonth <= 5000)
                {
                    pricePerKm = 1.05;
                }
                else if (5000 < kmPerMonth && kmPerMonth <= 10000)
                {
                    pricePerKm = 1.25;
                }
            }
            if (10000 < kmPerMonth && kmPerMonth <= 20000)
            {
                pricePerKm = 1.45;
            }

            var salary = (kmPerMonth * pricePerKm) * 4 - (((kmPerMonth * pricePerKm) * 4) * 0.1);
            Console.WriteLine($"{salary, 0:f2}");
        }
    }
}
