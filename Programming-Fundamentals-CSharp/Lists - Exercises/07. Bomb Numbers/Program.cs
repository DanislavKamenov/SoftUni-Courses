using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Bomb_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> bombPower = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int bomb = bombPower[0];
            int power = bombPower[1];

            for (int i = 0; i < nums.Count; i++)
            {
                if (nums[i] == bomb && power > i)
                {
                    for (int k = 0; k <= i + power; k++)
                    {
                        nums[k] = 0;
                    }
                }
                else if (nums[i] == bomb && power >= nums.Count - i)
                {
                    for (int k = i - power; k <= nums.Count - 1; k++)
                    {
                        nums[k] = 0;
                    }
                }
                else if (nums[i] == bomb)
                {
                    for (int k = i - power; k <= i + power; k++)
                    {
                        nums[k] = 0;
                    }
                }
                
            }

            Console.WriteLine(string.Join(" ", nums.Sum()));
        }
    }
}
