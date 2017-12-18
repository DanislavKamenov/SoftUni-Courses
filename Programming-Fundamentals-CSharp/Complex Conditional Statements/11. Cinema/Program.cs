using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Cinema
{
    class Program
    {
        static void Main(string[] args)
        {
            var movieType = Console.ReadLine().ToLower();
            var rows = int.Parse(Console.ReadLine());
            var columns = int.Parse(Console.ReadLine());
            var price = -1.00;

            if (movieType == "premiere")
                price = 12.00;
            else if (movieType == "normal")
                price = 7.50;
            else if (movieType == "discount")
                price = 5.00;
            Console.WriteLine("{0:f2}", rows * columns * price);
        }
    }
}
