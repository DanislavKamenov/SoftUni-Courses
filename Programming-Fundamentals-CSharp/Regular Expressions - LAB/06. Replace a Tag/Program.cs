using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _06.Replace_a_Tag
{
    class Program
    {
        static void Main(string[] args)
        {
            string htmlCode = Console.ReadLine();
            string pattern1 = @"<a.*?href.*?=(.*)>(.*?)<\/a>";
            string replacement = @"[URL href=$1]$2[/URL]";
            string result = string.Empty;

            while (!Regex.IsMatch(htmlCode, "end"))
            {
                result = Regex.Replace(htmlCode, pattern1, replacement);
                htmlCode += Console.ReadLine();
            }           
            Console.WriteLine(result);
        }
    }
}
