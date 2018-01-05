using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Poke_Mon
{
    class Program
    {
        static void Main(string[] args)
        {
            long n = long.Parse(Console.ReadLine());
            long nOriginal = n;
            decimal halfOfN = (decimal)nOriginal / 2;
            long m = long.Parse(Console.ReadLine());
            int y = int.Parse(Console.ReadLine());

            int count = 0;

            while (n >= m)
            {
                n -= m;
                count++;

                if (n == halfOfN && y != 0)
                {
                    n /= y;
                }
            }

            Console.WriteLine(n);
            Console.WriteLine(count);
        }
    }
}
