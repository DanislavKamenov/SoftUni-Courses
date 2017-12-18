using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Triple_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToArray();
            int sums = 0;
            bool neverMatched = true;

            for (int i = 0; i < input.Length - 1; i++)
            {                
                for (int j = i + 1; j < input.Length; j++)
                {                    
                    sums = input[i] + input[j];
                    for (int k = 0; k < input.Length; k++)
                    {                       
                        if (sums == input[k])
                        {
                            neverMatched = false;
                            Console.WriteLine($"{input[i]} + {input[j]} == {input[k]}");
                        }
                        else if (neverMatched && i == input.Length - 2 && k == input.Length - 1 && j == input.Length - 1)
                        {
                            Console.WriteLine("No");
                            return;
                        }
                    }                    
                }
            }
        }
    }
}
