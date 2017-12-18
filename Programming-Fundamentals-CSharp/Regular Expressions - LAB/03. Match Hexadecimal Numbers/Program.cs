using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Match_Hexadecimal_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Regex pattern = new Regex(@"\b[0x]*[0-9A-F]+\b");
            string hex = Console.ReadLine();

            var validHex = pattern.Matches(hex).Cast<Match>();

            Console.WriteLine(string.Join(" ", validHex));
        }
    }
}
    