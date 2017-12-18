using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var worldRecord = double.Parse(Console.ReadLine());
            var distanceMeteres = double.Parse(Console.ReadLine());
            var secPerMetre = double.Parse(Console.ReadLine());

            var waterResistance = Math.Floor((distanceMeteres / 15)) * 12.5;

            var time = secPerMetre * distanceMeteres + waterResistance;

            if (time < worldRecord)
            {
                Console.WriteLine($"Yes, he succeeded! The new world record is {time,0:f2} seconds.");
            }
            else
            {
                Console.WriteLine($"No, he failed! He was {Math.Abs(worldRecord - time),0:f2} seconds slower.");
            }
        }
    }
}
