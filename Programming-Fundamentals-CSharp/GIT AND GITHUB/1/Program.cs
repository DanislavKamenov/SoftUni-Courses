using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n / 2; i++)
            {
                Console.WriteLine("{0}{1}{2}{3}{4}",
                        new string(' ', i),
                        new string('x', 1),
                        new string(' ', n - 2 - i * 2),                       
                        new string('x', 1),
                        new string(' ', i));
            }

            Console.WriteLine("{0}{1}{0}",
                    new string(' ', n / 2),
                    new string('x', 1),
                    new string(' ', n / 2));

            for (int i = n; i >= 3; i -= 2)
            {
                Console.WriteLine("{0}{1}{2}{3}{4}",
                        new string(' ', (i - 1) / 2 - 1),
                        new string('x', 1),
                        new string(' ', n - (i - 1)),
                        new string('x', 1),
                        new string(' ', (i - 1) / 2 - 1));
            }
        }
    }
}
