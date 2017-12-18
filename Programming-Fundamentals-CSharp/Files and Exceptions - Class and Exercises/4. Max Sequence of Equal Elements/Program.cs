using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _4.Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = File.ReadAllText(@"..\..\input.txt").Split(' ').Select(int.Parse).ToArray();
            int count = 1;
            int oldCOunt = 1;
            int longestNum = 0;

            for (int i = 0; i < input.Length; i++)
            {
                count = 1;
                for (int k = i + 1; k < input.Length; k++)
                {
                    if (input[i] == input[k])
                    {
                        count++;
                        if (count > oldCOunt)
                        {
                            longestNum = input[i];
                            oldCOunt = count;
                        }
                    }
                    else
                    {
                        break;
                    }
                }
            }
            for (int i = 0; i < oldCOunt; i++)
            {
                File.AppendAllText(@"..\..\output.txt", longestNum + " ");
            }            
        }

    }
}

