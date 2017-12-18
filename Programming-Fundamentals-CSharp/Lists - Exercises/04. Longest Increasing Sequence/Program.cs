using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Longest_Increasing_Subsequence
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> lis = new List<int>();
            int lenght = 0;
            int left = 0;
            bool initialRemove = true;

            lis.Add(nums[0]);

            for (int k = 1; k < nums.Count; k++)
            {                
                if (lis[lis.Count - 1] < nums[k])
                {
                    lis.Add(nums[k]);
                    lenght++;
                    if (lis[k] > left)
                        left = lis[k];
                }
            }
            Console.WriteLine(string.Join(" ", lis));

        }
    }
}

