using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Rectangle_Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double hight = double.Parse(Console.ReadLine());

            Console.WriteLine(2 * (hight + width));
            Console.WriteLine(width * hight);
            Console.WriteLine(Math.Sqrt(Math.Pow(width, 2) + Math.Pow(hight, 2)));
        }
    }
}
