using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timed_05_Soft_Uni_Logo
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var height = 4 * n - 2;
            var width = 12 * n - 5;
            var hat = 1;

            for (int i = 0; i < height / 2; i++)
            {
                Console.WriteLine("{0}{1}{0}",
                    new string('.', (width - hat) / 2),
                    new string ('#', hat));
                hat += 6;
            }
            Console.WriteLine("{0}", new string ('#', width));
            hat -= 6;
            for (int j = 0; j < n - 2; j++)
            {                
                Console.WriteLine("|{0}{1}{2}",
                    new string('.', (width - hat) / 2 - 1),
                    new string('#', hat),
                    new string('.', (width - hat) / 2));
                hat -= 6;
            }
            for (int h = 0; h < n - 1; h++)
            {
                Console.WriteLine("|{0}{1}{2}",
                    new string('.', (width - hat) / 2 - 1),
                    new string('#', hat),
                    new string('.', (width - hat) / 2));
            }
            Console.WriteLine("@{0}{1}{2}",
                    new string('.', (width - hat) / 2 - 1),
                    new string('#', hat),
                    new string('.', (width - hat) / 2));
        }
    }
}
