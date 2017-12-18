using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Remove_Negatives_and_Reverse
{
    class Program
    {
        static void Main(string[] args)
        {
            List <int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> positiveNums = new List<int>();

            for (int i = 0; i < nums.Count; i++)
            {
                if (nums[nums.Count - 1 - i] >= 0)
                {
                positiveNums.Add(nums[nums.Count - 1 - i]);
                }
            }
            if (positiveNums.Count == 0)
            {
                Console.WriteLine("empty");
            }
            else
            {
                Console.WriteLine(string.Join(" ", positiveNums));
            }            
        }
    }
}
