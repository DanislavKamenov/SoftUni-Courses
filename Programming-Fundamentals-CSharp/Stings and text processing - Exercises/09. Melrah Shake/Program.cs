    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace _09.Melrah_Shake
    {
        class Program
        {
            static void Main(string[] args)
            {
                string word = Console.ReadLine();
                string pattern = Console.ReadLine();

                while (true)
                {
                    int firstMatch = word.IndexOf(pattern);
                    if (firstMatch == -1 || pattern.Length == 0)
                    {
                        Console.WriteLine("No shake.");
                        Console.WriteLine(word);
                        break;
                    }
                    word = word.Remove(firstMatch, pattern.Length);
                    int secondMatch = word.LastIndexOf(pattern);
                    if (secondMatch == -1)
                    {
                        Console.WriteLine("No shake.");
                        Console.WriteLine(word);
                        break;
                    }                
                    word = word.Remove(secondMatch, pattern.Length);
                    Console.WriteLine("Shaked it.");                
                    pattern = pattern.Remove(pattern.Length / 2, 1);               
                }
            }
        }
    }
