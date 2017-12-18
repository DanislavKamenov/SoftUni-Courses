using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Append_Lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> tokens = Console.ReadLine()
                .Split('|')
                .ToList();               
                

            List<int> result = new List<int>();

            for (int i = tokens.Count - 1; i >= 0; i--)
            {
                List<int> elements = tokens[i].Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();
                result.AddRange(elements);
            }

            Console.WriteLine(string.Join(" ", result));
        }
    }
}
