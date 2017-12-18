using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Rotated_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int k = int.Parse(Console.ReadLine());

            int[] sum = new int[nums.Length];

            for (int i = 0; i < k; i++)
            {
                RotateArray(nums);
                for (int j = 0; j < sum.Length; j++)
                {
                   sum[j] = sum[j] + nums[j];
                }
            }
            Console.WriteLine(string.Join(" ", sum));
        }

        static void RotateArray(int[] nums)
        {
            var lastNumber = nums.Last();

            for (int i = nums.Length - 1; i > 0; i--)
            {
                nums[i] = nums[i - 1];
            }
            nums[0] = lastNumber;
        }
    }
}
