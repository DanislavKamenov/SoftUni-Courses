using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _01.Extract_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = @"(^|(?<= ))[a-z]+[0-9]*[.\-_]?([a-z]+)?[0-9]*@[a-z]+-?([a-z]+)?([.]+)[a-z]+([.])?([a-z]+)?(\.?)[a-z]+";
            string input = Console.ReadLine();

            MatchCollection result = Regex.Matches(input, pattern);

            foreach (Match mail in result)
            {
                Console.WriteLine(mail.Value);
            }
        }
    }
}
