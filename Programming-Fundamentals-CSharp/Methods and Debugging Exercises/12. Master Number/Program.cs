using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.Master_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var range = int.Parse(Console.ReadLine());

            for (int i = 1; i <= range; i++)
            {                
                if (IsPalindrome(i.ToString()) == true && SumOfDigits(i.ToString()) == true && ContainsEvenDigit(i.ToString()) == true)
                {
                    Console.WriteLine(i);
                }
            }            
        }

        static bool IsPalindrome(string number)
        {
            for (int i = 0; i < number.Length / 2; i++)
            {
                if (number[i] != number[number.Length - 1 - i]) { return false; }
            }
            return true;
        }

        static bool SumOfDigits(string number)
        {
            var digitSum = 0;            

            for (int i = 0; i < number.Length; i++)
            {
                digitSum += Convert.ToInt32(number.Substring(i, 1));                 
            }

            if (digitSum % 7 == 0)
            {
                return true;
            }
            return false;
        }

        static bool ContainsEvenDigit(string number)
        {                 

            for (int i = 0; i < number.Length; i++)
            {
                var currentDigit = Convert.ToInt32(number.Substring(i, 1));

                if (currentDigit % 2 == 0)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
