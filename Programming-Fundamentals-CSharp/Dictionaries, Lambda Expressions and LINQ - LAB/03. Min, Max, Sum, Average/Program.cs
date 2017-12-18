using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Min__Max__Sum__Average
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[] nums = new int[n];

            for (int i = 0; i < nums.Length; i++)
            {                
                nums[i] = int.Parse(Console.ReadLine());
            }
            int numsSum = nums.Sum();
            int numsMin = nums.Min();
            int numsMax = nums.Max();
            var numsAverage = nums.Average();

            Console.WriteLine($"Sum = {numsSum}");
            Console.WriteLine($"Min = {numsMin}");
            Console.WriteLine($"Max = {numsMax}");
            Console.WriteLine($"Average = {numsAverage}");            
        }
    }
}
