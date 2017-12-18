using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Rage_Quit
{
    class Program
    {
        static void Main()
        {
            string argsLine = Console.ReadLine();
            string pattern = @"(?<strings>\D+)(?<digits>\d+)";

            var args = Regex.Matches(argsLine, pattern);

            StringBuilder sb = new StringBuilder();
            List<char> charCount = new List<char>();
            foreach (Match strg in args)
            {
                if (int.Parse(strg.Groups["digits"].Value) > 0)
                {
                    charCount.AddRange(strg.Groups["strings"].Value.ToUpper().ToList());
                }                
                sb.Append(string.Concat(Enumerable.Repeat(($"{strg.Groups["strings"].Value.ToUpper()}"), int.Parse(strg.Groups["digits"].ToString()))));
            }           
            
            Console.WriteLine($"Unique symbols used: {charCount.Distinct().Count()}");
            Console.WriteLine(sb.ToString());
        }
    }
}
