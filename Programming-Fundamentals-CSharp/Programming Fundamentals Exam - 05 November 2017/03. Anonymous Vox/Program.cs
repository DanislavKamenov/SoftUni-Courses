using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Anonymous_Vox
{
    class Program
    {
        static void Main(string[] args)
        {
            var encodedText = Console.ReadLine();
            var decodeWord = Console.ReadLine().Split(new char[] { '{', '}' }, StringSplitOptions.RemoveEmptyEntries);
            string pattern = @"([a-zA-Z]+)(?'placeholder'.+)(\1)";

            MatchCollection placeholders = Regex.Matches(encodedText, pattern);

            int count = 0;
            foreach (Match item in placeholders)
            {
                string replacePattern = item.Groups["placeholder"].Value;
                string replaced = Regex.Replace(encodedText, replacePattern, decodeWord[count]);
                encodedText = replaced;
                count++;
                if (decodeWord.Length - 1 < count)
                {
                    break;
                }
            }
            Console.WriteLine(encodedText);            
        }        
    }
}
