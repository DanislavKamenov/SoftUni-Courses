using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Multiply_big_numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string bigNum = Console.ReadLine();
            int multiplier = int.Parse(Console.ReadLine());
            int count = 0;
            bool shouldBreak = false;
            var sumString = new StringBuilder();

            for (int i = bigNum.Length - 1; i >= 0; i--)
            {
                int sum = 0;
                sum = (int.Parse(bigNum[i].ToString()) * multiplier + count);
                count = 0;
                while (sum > 9)
                {
                    sum -= 10;
                    count++;
                    if (i == 0 && sum <= 9)
                    {
                        sumString.Append(sum);
                        sumString.Append(count);
                        shouldBreak = true;
                    }
                }
                if (shouldBreak)
                {
                    break;
                }
                sumString.Append(sum.ToString());
            }
            var result = sumString.ToString();

            if (result.Trim('0') == string.Empty)
            {
                Console.WriteLine("0");
            }
            else
            {
                result = new string(sumString.ToString().Reverse().SkipWhile(x => x == '0').ToArray());
                Console.WriteLine(result);
            }
        }
    }
}
