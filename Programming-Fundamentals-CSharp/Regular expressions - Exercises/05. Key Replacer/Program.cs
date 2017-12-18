using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _05.Key_Replacer
{
    class Program
    {
        static void Main(string[] args)
        {
            string keyLine = Console.ReadLine();
            string scanLine = Console.ReadLine();
            string searchKeyPattern = @"(?<start>^[A-Za-z]+)(?:[<|\\].*[<|\\])(?<end>[A-Za-z]+$)";

            Match keySearch = Regex.Match(keyLine, searchKeyPattern);
            string keyPattern = $"{keySearch.Groups["start"]}(?<word>.*?){keySearch.Groups["end"]}";
            MatchCollection words = Regex.Matches(scanLine, keyPattern);

            bool isEmpty = true;
            foreach (Match word in words)
            {
                if (word.Groups["word"].Value != string.Empty)
                {
                    Console.Write(word.Groups["word"]);
                    isEmpty = false;
                }                
            }
            if (isEmpty)
            {
                Console.Write("Empty result");
            }
            Console.WriteLine();
        }   
    }
}
