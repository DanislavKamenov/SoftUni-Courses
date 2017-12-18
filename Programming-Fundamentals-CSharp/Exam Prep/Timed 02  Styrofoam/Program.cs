using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timed_02__Styrofoam
{
    class Program
    {
        static void Main(string[] args)
        {
            var budget = double.Parse(Console.ReadLine());
            var hArea = double.Parse(Console.ReadLine());
            var windows = int.Parse(Console.ReadLine()) * 2.4;
            var packSize = double.Parse(Console.ReadLine());
            var packPrice = double.Parse(Console.ReadLine());

            var totalArea = (hArea - windows) + ((hArea - windows) * 0.1);
            var packsNeeded = Math.Ceiling(totalArea / packSize) * packPrice;            

            if (budget - packsNeeded >= 0)
            {
                Console.WriteLine($"Spent: {packsNeeded, 0:f2}");
                Console.WriteLine($"Left: {budget - packsNeeded, 0:f2}");
            }
            else
            {
                Console.WriteLine($"Need more: {packsNeeded - budget, 0:f2}");
            }
        }
    }
}
