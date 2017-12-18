using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Camera_View
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] elements = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int m = elements[0];
            int n = elements[1];
            string inputLine = Console.ReadLine();
            string pattern = $"\\|\\<(.{{0,{m}}})(.{{0,{n}}})";

            Regex regex = new Regex(pattern);
            Match match = regex.Match(inputLine);

            List<string> results = new List<string>();

            while (inputLine.Length > match.Index + 2 && match.Success)
            {
                string matchToAdd = match.Groups[2].Value;

                if (matchToAdd.Contains("|"))
                {
                    matchToAdd = matchToAdd.Substring(0, matchToAdd.IndexOf("|"));
                }
                if (matchToAdd.Contains("<"))
                {
                    matchToAdd = matchToAdd.Substring(0, matchToAdd.IndexOf("<"));
                }
                results.Add(matchToAdd);
                inputLine = inputLine.Substring(match.Index + 2);
                match = regex.Match(inputLine);
            }
            Console.WriteLine(string.Join(", ", results));
        }
    }
}
