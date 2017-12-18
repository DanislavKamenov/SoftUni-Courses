using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Largest_3_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] realNums = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            Console.WriteLine(string.Join(" ", realNums.OrderByDescending(x => x).Take(3)));
        }
    }
}
