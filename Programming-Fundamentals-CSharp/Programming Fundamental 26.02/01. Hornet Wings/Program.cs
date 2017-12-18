using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _01.Hornet_Wings
{
    class Program
    {
        static void Main(string[] args)
        {
            int flaps = int.Parse(Console.ReadLine());
            double distancePer1000Flaps = double.Parse(Console.ReadLine());
            BigInteger endurance = BigInteger.Parse(Console.ReadLine());

            var distance = (flaps / 1000) * distancePer1000Flaps;
            var time = flaps / 100 + (flaps / endurance) * 5;
            Console.WriteLine($"{distance:F2} m.");
            Console.WriteLine($"{time} s.");
        }
    }
}
