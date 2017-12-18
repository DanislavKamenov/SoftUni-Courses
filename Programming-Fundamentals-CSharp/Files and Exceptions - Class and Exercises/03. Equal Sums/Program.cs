using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _03.Equal_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = File.ReadAllText(@"..\..\input.txt").Split(' ').Select(int.Parse).ToArray();            
            int sumLeft = 0;
            int sumRight = 0;

            for (int i = 0; i < input.Length; i++)
            {

                sumLeft = input.Take(i).Sum();
                sumRight = input.Skip(i + 1).Sum();
                if (sumLeft == sumRight)
                {
                    File.WriteAllText(@"..\..\output.txt", i.ToString());
                    break;
                }
                else if (i == input.Length - 1)
                {
                    File.WriteAllText(@"..\..\output.txt", "no");
                    break;
                }
            }

        }
    }
}
