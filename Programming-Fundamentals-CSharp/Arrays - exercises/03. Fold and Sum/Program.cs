using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] fourTimesK = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int[] leftSide = new int[fourTimesK.Length / 4];
            int[] rightSide = new int[fourTimesK.Length / 4];
            int[] sum = new int[fourTimesK.Length / 2];            

            for (int i = 0; i < fourTimesK.Length / 4; i++)
            {
                leftSide[i] = fourTimesK[i];
                rightSide[i] = fourTimesK[fourTimesK.Length - 1 - i];
            }            

            int[] leftSideReversed = leftSide.Reverse().ToArray();
            
            int[] reverseCombined = new int [leftSide.Length + rightSide.Length];
            Array.Copy(leftSideReversed, reverseCombined, leftSide.Length);
            Array.Copy(rightSide, 0, reverseCombined, leftSide.Length, rightSide.Length);

            for (int i = 0; i < fourTimesK.Length / 2; i++)
            {
                sum[i] = reverseCombined[i] + fourTimesK [i + leftSide.Length]; 
            }
            Console.WriteLine(string.Join(" ", sum));
        }
    }
}
