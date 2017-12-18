using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16._3_equal_numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var num1 = Console.ReadLine();
            var num2 = Console.ReadLine();
            var num3 = Console.ReadLine();
            if (num1 == num2 && num1 == num3)
                Console.WriteLine("yes");
            else
                Console.WriteLine("no");
        }
    }
}
