using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Equal_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            for (int i = 0; i < nums.Length; i++)
            {
                var sumLeft = 0;
                var sumRight = 0;

                for (int j = 0; j < i; j++)
                {
                    sumLeft += nums[j];
                }

                for (int k = i + 1; k < nums.Length; k++)
                {
                    sumRight += nums[k];
                }

                if (sumLeft == sumRight)
                {
                    Console.WriteLine(i);
                    return;
                }
            }
            Console.WriteLine("no");
        }
    }
}