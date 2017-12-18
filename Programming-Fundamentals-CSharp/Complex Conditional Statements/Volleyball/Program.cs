using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Volleyball
{
    class Program
    {
        static void Main(string[] args)
        {
            var year = Console.ReadLine().ToLower();
            var holidays = double.Parse(Console.ReadLine());
            var home = double.Parse(Console.ReadLine());
            var result = (48 - home) * (3.0 / 4) + (holidays * (2.0 / 3)) + home;

            if (year == "normal")
            {
                Console.WriteLine(Math.Floor(result));
            }
            else if (year == "leap")
            {
                Console.WriteLine(Math.Floor(result + (result * 0.15)));
            }
        }
    }
}
