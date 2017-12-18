using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Two_Numbers_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var begining = int.Parse(Console.ReadLine());
            var end = int.Parse(Console.ReadLine());
            var magicNumber = int.Parse(Console.ReadLine());
            var combinationCount = 0;

            for (int i = begining; i >= end; i--)
            {
                for (int j = begining; j >= end; j--)
                {
                    combinationCount += 1;
                    if (i + j == magicNumber)
                    {
                        Console.WriteLine($"Combination N:{combinationCount} ({i} + {j} = {magicNumber})");
                        return;
                    }
                    else if (i + j != magicNumber && i == end && j == end)
                    {
                        Console.WriteLine($"{combinationCount} combinations - neither equals {magicNumber}");
                    }
                }
            }
        }
    }
}
