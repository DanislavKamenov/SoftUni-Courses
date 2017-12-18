using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Reverse_Array_of_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            int[] arrOfInt = new int[n];
            

            for (int i = 0; i < n; i++)
            {
                arrOfInt[i] = int.Parse(Console.ReadLine());
            }

            for (int i = n; i > 0; i--)
            {
                Console.Write($"{arrOfInt[i - 1]} ");                
            }
            Console.WriteLine();
        }
    }
}
