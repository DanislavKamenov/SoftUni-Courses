using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Exchange_Variable_Values
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = int.Parse(Console.ReadLine());
            var b = int.Parse(Console.ReadLine());

            Console.WriteLine("Before: ");
            Console.WriteLine($"a = {a}");
            Console.WriteLine($"b = {b}");
            var aOld = a;
            a = b;
            b = aOld;            
            Console.WriteLine("After: ");
            Console.WriteLine($"a = {a}");
            Console.WriteLine($"b = {b}");
        }
    }
}
