using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Largest_Common_End
    {
        class Program
        {
            static void Main(string[] args)
            {
                string[] firstString = Console.ReadLine().Split(' ').ToArray();
                string[] secondString = Console.ReadLine().Split(' ').ToArray();


                Console.WriteLine(Largest_Common_End(firstString, secondString));
            }

            static int Largest_Common_End(string[] firstSentence, string[] secondSentence)
            {
                var shortest = Math.Min(firstSentence.Length, secondSentence.Length);                
                var leftRight = 0;
                var rightLeft = 0;                

                for (int i = 0; i < shortest; i++)
                {
                    if (firstSentence[i] == secondSentence[i])
                        leftRight++;
                    if (firstSentence[firstSentence.Length - i - 1] == secondSentence[secondSentence.Length - i - 1])
                        rightLeft++;
                }
                return Math.Max(leftRight, rightLeft);
            }
        }
    }