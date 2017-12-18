using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Number_range_1_to_100
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Еnter a number in the range [1...100]: ");
            var n = int.Parse(Console.ReadLine());

            while (n < 1 || n > 100)
            {
                Console.WriteLine("Invalid number!");
                Console.WriteLine("Еnter a number in the range [1...100]: ");
                n = int.Parse(Console.ReadLine());
            }
            Console.WriteLine($"The number is: {n}");
        }
    }
}
