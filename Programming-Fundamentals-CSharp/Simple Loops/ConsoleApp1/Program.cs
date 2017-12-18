using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int amount = int.Parse(Console.ReadLine());
            var sum = 0;
            var equalNumber = 0;
            var sumCompare = 0;

            for (int i = 1; i <= amount; i++)
            {
                int elements = int.Parse(Console.ReadLine());
                sum += elements;
                sumCompare = sum - elements;

                if (sumCompare == elements)
                {
                    equalNumber = elements;
                }
                else
                {
                    equalNumber = Math.Abs(sum - elements);
                }
            }
            if (sumCompare == equalNumber)
            {
                Console.WriteLine("Yes sum = " + equalNumber);
            }
            else
            {
                Console.WriteLine("No diff = " + equalNumber);
            }
        }
    }
}
