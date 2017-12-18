using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;


namespace _13.Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            BigInteger factorial = n;            

            for (int i = n - 1; i >= 1; i--)
            {
                factorial *= i;                
            }
            Console.WriteLine(factorial);
        }
    }
}
