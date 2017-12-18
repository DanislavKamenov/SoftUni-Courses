using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Split_by_Word_Casing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> words = Console.ReadLine().Split(new char[] {' ', ',', ':', '.', ';', '!', '(', ')'
                ,'"', '\'', '\\', '/', '[', ']' }, StringSplitOptions.RemoveEmptyEntries).ToList();
            List<string> lowerCase = new List<string>();
            List<string> mixedCase = new List<string>();
            List<string> upperCase = new List<string>();
            

            for (int i = 0; i < words.Count; i++)
            {
                if (words[i].All(char.IsUpper))
                {
                    upperCase.Add(words[i]);
                }
                else if (words[i].All(char.IsLower))
                {
                    lowerCase.Add(words[i]);
                }
                else if (words[i].Any(char.IsLetterOrDigit))
                {
                    mixedCase.Add(words[i]);
                }
            }
            Console.WriteLine(string.Concat($"Lower-case: ", string.Join(", ", lowerCase)));
            Console.WriteLine(string.Concat($"Mixed-case: ", string.Join(", ", mixedCase)));
            Console.WriteLine(string.Concat($"Upper-case: ", string.Join(", ", upperCase)));
        }
    }
}
