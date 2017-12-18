using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _08.Letters_Change_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries);
            decimal sum = 0;

            for (int i = 0; i < input.Length; i++)
            {
                string word = input[i];
                char first = word[0];
                char last = word[word.Length - 1];
                word = word.TrimStart(word[0]);
                word = word.TrimEnd(word[word.Length - 1]);
                decimal num = decimal.Parse(word);

                if (char.IsUpper(first))
                {
                    num /= first - 64;
                }
                else
                {
                    num *= first - 96;
                }
                if (char.IsUpper(last))
                {
                    num -= last - 64;
                }
                else
                {
                    num += last - 96;
                }
                sum += num;
            }
            Console.WriteLine($"{sum:F2}");
        }
    }
}
