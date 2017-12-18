using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Square_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();
            List<int> isSquared = new List<int>();

            for (int i = 0; i < nums.Count; i++)
            {
                if (Math.Sqrt(nums[i]) == (int)Math.Sqrt(nums[i]))
                {
                    isSquared.Add(nums[i]);
                }
            }
            isSquared.Sort((a, b) => b.CompareTo(a));
            Console.WriteLine(string.Join(" ", isSquared));
        }
    }
}
