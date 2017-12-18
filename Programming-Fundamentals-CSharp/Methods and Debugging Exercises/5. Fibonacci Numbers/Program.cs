using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.Fibonacci_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Fib(int.Parse(Console.ReadLine()));
        }

        static void Fib(int n)
        {
            var fibNumStart = 0;
            var fibNum = 1;
            var fibNumOld = 1;

            Console.WriteLine(fibNumStart);

            for (int i = 1; i <= n; i++)
            {
                fibNumOld = fibNum;
                fibNum = fibNumStart;
                fibNum += fibNumOld;
            }
        }
    }
}
