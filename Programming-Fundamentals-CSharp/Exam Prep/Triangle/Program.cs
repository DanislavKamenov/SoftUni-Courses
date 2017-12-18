using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Triangle
{
    class Program
    {
        static void Main(string[] args)
        {
            var incr = 3;
            var space = 1;                   
            var n = int.Parse(Console.ReadLine());

            Console.WriteLine("{0}", new string('#', (4 * n) + 1));
            for (int i = 1; i <= n ; i++)
            {               
                Console.WriteLine("{0}{1}{2}{1}{0}",
                    new string('.', i),
                    new string('#', (((4 * n) / 2) + 2) - incr),
                    new string(' ', space));
                incr += 2;
                space += 2;
                if (i == n / 2)
                {                    

                    Console.WriteLine("{0}{1}{2}{3}{4}{5}{2}{1}{0}",
                           new string('.', i + 1),
                           new string('#', (((4 * n) / 2) + 2) - incr),
                           new string(' ', space / 2 - 1),
                           new string('(', 1),
                           new string('@', 1),
                           new string(')', 1));
                    i += 1;
                    incr += 2;
                    space += 2;
                }                
            }

            incr = 3;

            for (int j = n; j < 2 * n; j++)
            {                
                Console.WriteLine("{0}{1}{0}",
                    new string('.', j + 1),
                    new string('#', (((4 * n) / 2) + 2) - incr));                
                incr += 2;
                space += 2;
            }
        }
    }
}