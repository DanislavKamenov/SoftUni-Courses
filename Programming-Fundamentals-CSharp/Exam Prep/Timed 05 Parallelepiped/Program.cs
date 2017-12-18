using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timed_05_Parallelepiped
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            Console.WriteLine("{0}{1}{0}{2}",
                new string('+', 1),
                new string('~', n - 2),
                new string('.',((3 * n) + 1) - n));
            for (int i = 0; i < 2 * n + 1; i++)
            {


                Console.WriteLine("{0}{1}{2}{3}{2}{4}",
                    new string('|', 1),
                    new string('.', i),
                    new string('\\', 1),
                    new string('~', n - 2),
                    new string('.', (3 * n + 1) - (n + 1) - i));
            }
            for (int i = 0; i < 2 * n + 1; i++)
            {
                Console.WriteLine("{0}{1}{2}{3}{4}{3}",
                    new string('.', i),
                    new string('\\', 1),
                    new string('.', (3 * n + 1) - (n + 1) - i),
                    new string('|', 1),
                    new string('~', n - 2));
            }
            Console.WriteLine("{0}{1}{2}{1}",
                new string('.', ((3 * n) + 1) - n),
                new string('+', 1),
                new string('~', n - 2));
        }
    }
}
