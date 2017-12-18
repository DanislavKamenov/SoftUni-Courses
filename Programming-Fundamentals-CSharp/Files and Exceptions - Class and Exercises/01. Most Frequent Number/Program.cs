using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _01.Most_Frequent_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] sequence = File.ReadAllText(@"..\..\input.txt").Split().Select(int.Parse).ToArray();
            int count = 0;
            int longestCount = 0;
            int mostFrequentNumber = 0;

            for (int i = 0; i < sequence.Length; i++)
            {
                for (int j = 0; j < sequence.Length; j++)
                {
                    if (sequence[i] == sequence[j])
                    {
                        count++;
                    }

                    if (longestCount < count)
                    {
                        longestCount = count;
                        mostFrequentNumber = sequence[i];
                    }
                }
                count = 0;
            }
            File.WriteAllText(@"..\..\output.txt", mostFrequentNumber.ToString());
        }
    }
}