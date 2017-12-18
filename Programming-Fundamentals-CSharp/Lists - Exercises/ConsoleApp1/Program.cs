using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            int length = 1;
            int bestLength = 1;
            int start = 0;
            int bestStart = 0;

            for (int i = 0; i < nums.Count; i++)
            {
                length = 1;
                start = 0;
                for (int k = i + 1; k < nums.Count; k++)
                {
                    if (nums[i] == nums[k])
                    {
                        length++;
                        start = i;
                        if (length > bestLength)
                        {
                            bestLength = length;
                            bestStart = start;
                        }
                    }
                    else
                    {
                        break;
                    }
                }
            }

            for (int i = nums[bestStart]; i < nums[bestStart] + bestLength; i++)
            {
                Console.Write($"{nums[bestStart]} ");
            }
        }
    }
}
