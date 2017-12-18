using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.Numbers_in_Reversed_Order
{
    class Program
    {
        static void Main(string[] args)
        {
            ReversedNumbers(decimal.Parse(Console.ReadLine()));
        }
        
        static void ReversedNumbers(decimal number)
        {
            var numberToString = number.ToString();
            for (int i = 1; i <= numberToString.Length; i++)
            {
                Console.Write(numberToString[numberToString.Length - i]);                
            }
            Console.WriteLine();
        }
    }
}
