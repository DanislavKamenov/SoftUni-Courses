using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Resurrection
{
    class Program
    {
        static void Main(string[] args)
        {
            int PhCount = int.Parse(Console.ReadLine());

            for (int i = 0; i < PhCount; i++)
            {
                int totalLenght = int.Parse(Console.ReadLine());
                decimal totalWidth = decimal.Parse(Console.ReadLine());
                int wingLenght = int.Parse(Console.ReadLine());

                decimal totalYears = (decimal)Math.Pow(totalLenght, 2) * (totalWidth + 2 * wingLenght);

                Console.WriteLine(totalYears);
            }
        }
    }
}
