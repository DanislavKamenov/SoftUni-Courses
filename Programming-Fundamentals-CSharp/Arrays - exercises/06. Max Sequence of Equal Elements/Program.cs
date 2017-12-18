using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] sequence = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int length = 1;
            int longestseq = 0;
            int highestStart = 0;

            for (int i = 0; i < sequence.Length - 1; i++)
            {
                length = 1;

                for (int j = 1; j <= sequence.Length; j++)
                {
                    if (sequence[i] == sequence[j + 1])
                    {
                        length++;
                        if (longestseq < length)
                            longestseq = length;
                        if (highestStart < sequence[i])
                            highestStart = sequence[i];
                    }
                } 
            }
            for (int i = 0; i < longestseq; i++)
            {
                Console.Write(highestStart + " ");
            }
            Console.WriteLine();
        }
    }
}
