using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _02.Advertisement_Message
{
    class Program
    {
        static void Main(string[] args)
        {
            int input = int.Parse(File.ReadAllText(@"..\..\input.txt"));

            string[] phrase = { "Excellent product.", "Such a great product.", "I always use that product.",
                "Best product of its category.", "Exceptional product.", "I can’t live without this product." };
            string[] personEvent = { "Now I feel good.", "I have succeeded with this product.",
                "Makes miracles. I am happy of the results!", "I cannot believe but now I feel awesome.",
                "Try it yourself, I am very satisfied.", "I feel great!" };
            string[] author = { "Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva" };
            string[] city = { "Burgas", "Sofia", "Plovdiv", "Varna", "Ruse" };

            Random rnd = new Random();


            File.WriteAllText(@"..\..\output.txt", string.Empty);
            for (int i = 0; i < input; i++)
            {
                int phraseIndex = rnd.Next(0, phrase.Length - 1);
                int eventIndex = rnd.Next(0, phrase.Length - 1);
                int authorIndex = rnd.Next(0, phrase.Length - 1);
                int townIndex = rnd.Next(0, phrase.Length - 1);
                File.AppendAllText(@"..\..\output.txt", $"{phrase[phraseIndex]} {personEvent[eventIndex]} {author[authorIndex]} - {city[townIndex]}" + Environment.NewLine);
            }
        }
    }
}
