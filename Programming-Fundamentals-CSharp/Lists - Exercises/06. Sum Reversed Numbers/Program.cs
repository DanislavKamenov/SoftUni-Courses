using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Sum_Reversed_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> numsReversed = new List<int>();
            string numToString = string.Empty;
            string numToStringReversed = string.Empty;

            for (int i = 0; i < nums.Count; i++)
            {
                numToString = nums[i].ToString();
                numToStringReversed = string.Empty;
                for (int k = 0; k < numToString.Length; k++)
                {
                    numToStringReversed += numToString[numToString.Length - k - 1];
                }
                
                
                numsReversed.Add(int.Parse(numToStringReversed));
            }

            Console.WriteLine(string.Join(" ", numsReversed.Sum()));
        }
    }
}
