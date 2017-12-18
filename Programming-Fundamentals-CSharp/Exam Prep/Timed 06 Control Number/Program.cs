using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timed_06_Control_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var m = int.Parse(Console.ReadLine());
            var control = int.Parse(Console.ReadLine());
            var sum = 0;
            var moveCount = 0;

            for (int i = 1; i <= n; i++)
            {
                for (int j = m; j >= 1; j--)
                {
                    moveCount += 1;
                    sum += 2 * i + 3 * j;
                    if (sum >= control)
                    {
                        Console.WriteLine($"{moveCount} moves");
                        Console.WriteLine($"Score: {sum} >= {control}");
                        return;
                    }
                    else if (i == n && j == 1 && sum < control)
                        Console.WriteLine($"{moveCount} moves");
                }
            }
        }
    }
}
