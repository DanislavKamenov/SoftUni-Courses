using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _14.Factorial_Trailing_Zeroes
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
            Console.WriteLine(AmountOfTrailingZeros(factorial));            
        }

        static int AmountOfTrailingZeros(BigInteger factorial)
        {
            BigInteger factorialWithTrailingZeros = factorial;

           var trailingZeros = 0;

            while (factorialWithTrailingZeros % 10 == 0)
            {
                trailingZeros ++;
                factorialWithTrailingZeros /= 10;
            }                        
           return trailingZeros;
            
        }
    }
}
