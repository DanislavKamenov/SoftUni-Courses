using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _04.Palindromes
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ');
            int baseN = int.Parse(input[0]);
            BigInteger number = BigInteger.Parse(input[1]);
            BigInteger baseNumber = 0;
            string convertedNum = string.Empty;


            while (number != 0)
            {
                baseNumber = number % baseN;
                convertedNum += baseNumber.ToString();
               number = number / baseN;
            }

            Console.WriteLine(new string(convertedNum.Reverse().ToArray()));
         }
    }
}
