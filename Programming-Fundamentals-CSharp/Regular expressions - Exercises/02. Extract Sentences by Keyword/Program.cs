using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _02.Extract_Sentences_by_Keyword
{
    class Program
    {
        static void Main(string[] args)
        {
            string scanWord = Console.ReadLine();
            string pattern = @"\b[^.!?]+\b" + scanWord + @"\b.*?[.!?]";
            string input = Console.ReadLine();

            MatchCollection words = Regex.Matches(input, pattern);

            Console.WriteLine(string.Join(Environment.NewLine, words.Cast<Match>().Select(x => x.Value.TrimEnd('!', '?', '.'))));
        }
    }
}
