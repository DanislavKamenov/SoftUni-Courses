using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Short_Words_Sorted
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] tokens = Console.ReadLine()
                .ToLower()
                .Split(new char[] { '?', '.', ',', ':', ';', '(', ')', '[', ']', '"', '\'', '\\', '/', '!', ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Where(x => x.Length < 5)
                .Distinct()
                .OrderBy(x => x)              
                .ToArray();

            Console.WriteLine(string.Join(", ", tokens));            
        }
    }
}
