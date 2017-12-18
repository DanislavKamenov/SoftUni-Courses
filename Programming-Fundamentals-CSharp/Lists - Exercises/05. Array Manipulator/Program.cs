using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Array_Manipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            string[] command = Console.ReadLine().Split(' ');

            while (command[0] != "print")
            {
                if (command[0] == "add")
                {
                    nums.Insert(int.Parse(command[1]), int.Parse(command[2]));
                }
                else if (command[0] == "addMany")
                {
                    short index = short.Parse(command[1]);
                    nums.InsertRange(index, command.Skip(2).Select(int.Parse));
                    index++;
                }
                else if (command[0] == "contains")
                {
                    if (nums.Contains(int.Parse(command[1])))
                    {
                        Console.WriteLine(nums.IndexOf(int.Parse(command[1])));
                    }
                    else
                    {
                        Console.WriteLine(-1);
                    }
                }
                else if (command[0] == "remove")
                {
                    nums.RemoveAt(int.Parse(command[1]));
                }
                else if (command[0] == "shift")
                {
                    ShiftNumbers(nums, command);
                }
                else if (command[0] == "sumPairs")
                {
                    SumPairs(nums);
                }
                command = Console.ReadLine().Split(' ').ToArray();
            }
            Console.WriteLine("[" + string.Join(", ", nums) + "]");
        }

        static void SumPairs(List<int> nums)
        {
            for (int i = 0; i < nums.Count - 1; i++)
            {
                nums[i] += nums[i + 1];
                nums.RemoveAt(i + 1);
            }
        }

        static void ShiftNumbers(List<int> nums, string[] command)
        {
            for (int i = 0; i < int.Parse(command[1]); i++)
            {
                int elementToShift = nums[0];
                nums.RemoveAt(0);
                nums.Add(elementToShift);
            }
        }
    }
}