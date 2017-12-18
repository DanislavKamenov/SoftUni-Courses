using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Index_of_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            var word = Console.ReadLine();

            char[] alphabet = new char[26];           

            for (char i = 'a'; i <= 'z'; i++)
            {
                alphabet[i - 97] = i;
            }

            for (int i = 0; i < word.Length; i++)
            {
                for (int k = 0; k < alphabet.Length; k++)
                {
                    if (word[i] == alphabet[k])
                    {
                        Console.WriteLine($"{word[i]} -> {k}");
                    }
                }
                //Console.WriteLine(word[i] + " -> " + Array.IndexOf(alphabet, word[i])); Removes the need for the last For loop.
            }
        }
    }
}
