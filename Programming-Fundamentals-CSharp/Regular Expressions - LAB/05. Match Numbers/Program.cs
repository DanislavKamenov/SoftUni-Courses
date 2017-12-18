using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _05.Match_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Regex pattern = new Regex(@"(^|(?<=\s))-?\d+(\.\d+)?($|(?=\s))");
            string input = Console.ReadLine();

            var numbers = pattern.Matches(input).Cast<Match>();

            Console.WriteLine(string.Join(" ", numbers));            
        }
    }
}
