using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _01.Match_Full_Name
{
    class Program
    {
        static void Main(string[] args)
        {
            string regex = @"\b[A-Z][a-z]+ [A-Z][a-z]+\b";
            string word = Console.ReadLine();

            MatchCollection totalMatches = Regex.Matches(word, regex);

            foreach (Match m in totalMatches)
            {
                Console.Write(m.Value + " ");
            }
        }
    }
}
