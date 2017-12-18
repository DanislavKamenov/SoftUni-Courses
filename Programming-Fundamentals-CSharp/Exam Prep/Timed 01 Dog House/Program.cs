using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timed_01_Dog_House
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = double.Parse(Console.ReadLine());
            var b = double.Parse(Console.ReadLine());

            var leftRightWall = 2 * (a * a / 2);

            var backWall = ((a / 2) * (a / 2)) + ((a / 2) * (b - (a / 2)) / 2);
            var frontWall = ((a / 2) * (a / 2)) + ((a / 2) * (b - (a / 2)) / 2) - ((a / 5) * (a / 5));
            var frontBackWall = backWall + frontWall;

            var roof = leftRightWall;

            Console.WriteLine($"{(leftRightWall + frontBackWall) / 3,0:f2}");
            Console.WriteLine($"{roof / 5,0:f2}");
        }
    }
}
