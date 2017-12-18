using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Integer_to_Hex_to_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            var numberDec = int.Parse(Console.ReadLine());

            var decToHex = Convert.ToString(numberDec, 16).ToUpper(); //var decToHex2 = numberDec.ToString("X"); also works
            Console.WriteLine(decToHex);
            decToHex = Convert.ToString(numberDec, 2);
            Console.WriteLine(decToHex);
        }
    }
}
