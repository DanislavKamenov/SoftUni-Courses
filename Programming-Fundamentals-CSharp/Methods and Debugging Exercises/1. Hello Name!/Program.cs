using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Hello_Name_
{
    class Program
    {
        static void Main(string[] args)
        {
            printName();
        }

        static void printName()
        {
            var name = Console.ReadLine();
            Console.WriteLine($"Hello, {name}!");
        }
    }
}
