using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp6
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.Write("Enter score: ");
            double num = double.Parse(Console.ReadLine());
            double lastDigit = num % 10;            


            if (num < 100 && num % 2 == 0)
            {
                Console.WriteLine("Bonus Score: " + 6);
                Console.WriteLine("Total Score: " + (num + 6));
            }
            else if (num < 100 && lastDigit == 5)
            {
                Console.WriteLine("Bonus Score: " + (5 + 2));
                Console.WriteLine("Total Score: " + (num + 5 + 2));
            }
            else if (num < 100)
            {
                Console.WriteLine("Bonus Score: " + 5);
                Console.WriteLine("Total Score: " + (num + 5));
            }
            /////////////////////////////////////////////////////////
            if (num > 100 && num <= 1000 && num % 2 == 0)
            {
                Console.WriteLine("Bonus Score: " + ((20 * (num / 100)) + 1));
                Console.WriteLine("Total Score: " + (num + (((num / 100) * 20) + 1)));
            }
            else if (num > 100 && num <= 1000 && lastDigit == 5)
            {
                Console.WriteLine("Bonus Score: " + ((20 * (num / 100)) + 2));
                Console.WriteLine("Total Score: " + (num + (((num / 100) * 20) + 2)));
            }
            else if (num > 100 && num <= 1000)
            {
                Console.WriteLine("Bonus Score: " + 20 * (num / 100));
                Console.WriteLine("Total Score: " + (num + ((num / 100) * 20)));
            }
            /////////////////////////////////////////////////////////
            if (num > 1000 && num % 2 == 0)
            {
                Console.WriteLine("Bonus Score: " + ((10 * (num / 100)) + 1));
                Console.WriteLine("Total Score: " + (num + (((num / 100) * 10) + 1)));
            }
            else if (num > 1000 && lastDigit == 5)
            {
                Console.WriteLine("Bonus Score = " + ((10 * (num / 100)) + 2));
                Console.WriteLine("Total Score = " + (num + (((num / 100) * 10) + 2)));
            }
            else if (num > 1000)
            {
                Console.WriteLine("Bonus Score = " + (10 * (num / 100)));
                Console.WriteLine("Total Score = " + (num + (10 * (num / 100))));
            }
        }
    }
}





