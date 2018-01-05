using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Regexmon
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string didiPattern = @"([^A-Za-z-]+)";
            string bojoPattern = @"([A-Za-z]+-[A-Za-z]+)";            

            while (input != string.Empty)
            {
                if (Regex.IsMatch(input, didiPattern))
                {
                    Match match = Regex.Match(input, didiPattern);
                    Console.WriteLine(match);

                    input = input.Substring(match.Index + match.Length);
                }
                else
                {
                    break;
                }

                if (Regex.IsMatch(input, bojoPattern))
                {
                    Match match = Regex.Match(input, bojoPattern);
                    Console.WriteLine(match);

                    input = input.Substring(match.Index + match.Length);
                }
                else
                {
                    break;
                }
            }
        }
    }
}
