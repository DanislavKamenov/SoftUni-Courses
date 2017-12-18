using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Count_Real_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] realNums = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            SortedDictionary<double, int> ascendingNums = new SortedDictionary <double, int>();

            foreach (var number in realNums.OrderByDescending(x => x))
            {
                if (ascendingNums.ContainsKey(number))
                {
                    ascendingNums[number]++;
                }
                else
                {
                    ascendingNums[number] = 1;
                }               
            }            
                Console.WriteLine(string.Join("\n", ascendingNums.Select(x => x.Key + " -> " + x.Value)));
          
        }
            
    }
}
