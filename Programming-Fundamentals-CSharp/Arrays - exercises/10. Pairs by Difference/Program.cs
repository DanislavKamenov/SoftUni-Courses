using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Pairs_by_Difference
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int n = int.Parse(Console.ReadLine());

            var count = 0;

            for (int i = 0; i < nums.Length; i++)
            {
                for (int k = 0; k < nums.Length; k++)
                {
                    if (nums[i] == nums[k] - n)
                    {
                        count++;
                    }
                }
            }

            Console.WriteLine(count);
        }
    }
}
