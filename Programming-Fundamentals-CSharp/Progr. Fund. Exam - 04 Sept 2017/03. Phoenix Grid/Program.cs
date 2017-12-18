using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Phoenix_Grid
{
    class Program
    {
        static void Main(string[] args)
        {
            string inputData = string.Empty;
            string pattern = @"^([^\s_]{3})(.[^\s_]{3})*$";

            while ((inputData = Console.ReadLine()) != "ReadMe")
            {
                if (Regex.IsMatch(inputData, pattern) == false)
                {
                    Console.WriteLine("NO");
                }
                else
                {
                    string word = Regex.Match(inputData, pattern).ToString();

                    if (IsPalindrome(word))
                    {
                        Console.WriteLine("YES");
                    }
                    else
                    {
                        Console.WriteLine("NO");
                    }
                }                
            }
        }

        public static bool IsPalindrome(string value)
        {
            int min = 0;
            int max = value.Length - 1;
            while (true)
            {
                if (min > max)
                {
                    return true;
                }
                char a = value[min];
                char b = value[max];

                // Scan forward for a while invalid.
                while (!char.IsLetterOrDigit(a))
                {
                    min++;
                    if (min > max)
                    {
                        return true;
                    }
                    a = value[min];
                }

                // Scan backward for b while invalid.
                while (!char.IsLetterOrDigit(b))
                {
                    max--;
                    if (min > max)
                    {
                        return true;
                    }
                    b = value[max];
                }

                if (char.ToLower(a) != char.ToLower(b))
                {
                    return false;
                }
                min++;
                max--;
            }
        }

    }
}
