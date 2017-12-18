using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _17.Print_Part_of_the_ASCII_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            int startValue = int.Parse(Console.ReadLine());
            int  endValue = int.Parse(Console.ReadLine());
            char startValueToChar = Convert.ToChar(startValue);
            char endValueToChar = Convert.ToChar(endValue);

            for (char i = startValueToChar; i <= endValueToChar; i++)
            {
                Console.Write($"{i} ");                
            }
            Console.WriteLine();            
        }
    }
}
