using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.Rounding_Numbers_Away_From_Zero
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] input = Console.ReadLine()
                .Split(' ')
                .Select(double.Parse)
                .ToArray();

            for (int i = 0; i < input.Length; i++)
            {
                Console.WriteLine($"{input[i]} => {Math.Round(input[i], MidpointRounding.AwayFromZero)}");
            }
        }
    }
}
