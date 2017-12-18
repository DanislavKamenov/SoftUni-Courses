using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Sum_big_numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string input1 = Console.ReadLine();
            string input2 = Console.ReadLine();
            int maxLen = Math.Max(input1.Length, input2.Length);
            input1 = input1.PadLeft(maxLen, '0');
            input2 = input2.PadLeft(maxLen, '0');            
            int count = 0;
            var sumString = new StringBuilder();

            for (int i = input1.Length - 1; i >= 0; i--)
            {
                int sum = 0;
                sum = (int.Parse(input1[i].ToString()) + int.Parse(input2[i].ToString()) + count);
                count = 0;
                if (sum > 9)
                {
                    sum -= 10;
                    count++;
                    if (i == 0)
                    {
                        sumString.Append(sum);
                        sumString.Append("1");
                        break;
                    }
                }
                sumString.Append(sum.ToString());
            }


            var result = new string(sumString.ToString().Reverse().SkipWhile(x => x == '0').ToArray());
            Console.WriteLine(result);

        }        
    }
}
