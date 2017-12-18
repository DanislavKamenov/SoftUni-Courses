using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hourglass
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            Console.WriteLine("{0}",
                new string('*', 2 * n + 1));
            Console.WriteLine("{0}{1}{2}{1}{0}",
                new string('.', 1),
                new string('*', 1),
                new string(' ', 2 * n - 3));
            for (int i = 0; i < n - 2; i++)
            {
                Console.WriteLine("{0}{1}{2}{1}{0}",
                    new string('.', i + 2),
                    new string('*', 1),
                    new string('@', ((2 * n + 1) - 6) - i * 2));
            }
            Console.WriteLine("{0}{1}{0}",
                new string('.', n),
                new string('*', 1));
            for (int i = 0; i < n - 2; i++)
            {
                Console.WriteLine("{0}{1}{2}{3}{2}{1}{0}",
                    new string('.', (n - i) - 1),
                    new string('*', 1),
                    new string(' ', i),
                    new string('@', 1));
            }            
            Console.WriteLine("{0}{1}{2}{1}{0}",
                new string('.', 1),
                new string('*', 1),
                new string('@', 2 * n - 3));
            Console.WriteLine("{0}",
                new string('*', 2 * n + 1));
        }
    }
}
