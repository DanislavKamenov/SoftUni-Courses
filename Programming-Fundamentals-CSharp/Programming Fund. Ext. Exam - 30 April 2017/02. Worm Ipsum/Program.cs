using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _02.Worm_Ipsum
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = string.Empty;
            var pattern = @"^[A-Z][^.]+.$";

            while ((input = Console.ReadLine()) != "Worm Ipsum")
            {
                if (Regex.IsMatch(input, pattern))
                {   
                    var translatedSentence = new StringBuilder();
                    var validSentence = input.Split(new[] { ' ', '.' }, StringSplitOptions.RemoveEmptyEntries);
                    foreach (var word in validSentence)
                    {
                        var max = 1;
                        char mostCommonLetter = char.MinValue;

                        for (int i = 0; i < word.Length; i++)
                        {
                            var currentLetter = word[i];
                            var count = 1;

                            if (currentLetter == mostCommonLetter)
                            {
                                continue;
                            }

                            for (int j = i + 1; j < word.Length; j++)
                            {                                
                                var nextLetter = word[j];                                

                                if (currentLetter == nextLetter)
                                {
                                    count++;
                                    if (count > max)
                                    {
                                        max = count;
                                        mostCommonLetter = currentLetter;
                                    }
                                }
                            }
                        }
                        if (max > 1)
                        {
                            translatedSentence.Append(mostCommonLetter, word.Length);

                            if (validSentence[validSentence.Length - 1] != word)
                            {
                                translatedSentence.Append(' ');
                            }
                            else
                            {
                                translatedSentence.Append('.');
                            }
                        }
                        else
                        {
                            translatedSentence.Append(word);
                            
                            if (validSentence[validSentence.Length - 1] != word)
                            {
                                translatedSentence.Append(' ');
                            }
                            else
                            {
                                translatedSentence.Append('.');
                            }
                        }
                    }
                    Console.WriteLine(translatedSentence);
                }                
            }
        }
    }
}
