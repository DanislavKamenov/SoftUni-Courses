using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Odd_Occurances
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            var words = input.ToLower().Split(' ');

            var count = new Dictionary<string, int>();
            foreach (var item in words)
            {
                if (count.ContainsKey(item))
                {
                    count[item]++;
                }
                else
                {
                    count[item] = 1;
                }
            }
            Console.WriteLine(string.Join(", ", count));

            
        }
    }
}
