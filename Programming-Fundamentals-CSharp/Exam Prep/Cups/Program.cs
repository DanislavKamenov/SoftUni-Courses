using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cups
{
    class Program
    {
        static void Main(string[] args)
        {
            var cups = int.Parse(Console.ReadLine());
            var workers = int.Parse(Console.ReadLine());
            var days = int.Parse(Console.ReadLine());

            var workHours = workers * days * 8;
            var cupsMade = workHours / 5;

            if (cups < cupsMade)
            {
                Console.WriteLine($"{(cupsMade - cups) * 4.20, 0:f2} extra money");
            }
            else if (cups > cupsMade)
            {
                Console.WriteLine($"Losses: {(cups - cupsMade) * 4.20, 0:f2}");
            }
        }
    }
}
