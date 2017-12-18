using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Last_K_Numbers_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var k = int.Parse(Console.ReadLine());            

            int[] intArray = new int [n];
            intArray[0] = 1;

            for (int i = 1; i < n; i++)
            {
                for (int j = 1; j <= k && j <= i; j++)
                {
                    intArray[i] += intArray[i - j];
                }
                if (k == 0)
                {
                    intArray[i] = intArray[0];
                }
            }
            Console.WriteLine(string.Join(" ", intArray));
        }
    }
}
