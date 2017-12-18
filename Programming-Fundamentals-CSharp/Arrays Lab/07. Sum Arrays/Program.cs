using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Sum_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int[] nums2 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var maxLength = Math.Max(nums.Length, nums2.Length);

            int[] sum = new int[maxLength];

            

            for (int i = 0; i < maxLength; i++)
            {
               sum[i] = nums[i % nums.Length] + nums2[i % nums2.Length];
            }
            Console.WriteLine(string.Join(" ", sum));
        }
    }
}
