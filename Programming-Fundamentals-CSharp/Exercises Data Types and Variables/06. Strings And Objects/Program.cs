using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Strings_And_Objects
{
    class Program
    {
        static void Main(string[] args)
        {
            var firstString = "Hello ";
            var secondString = "World";
            object objectVariable = firstString + secondString;
            string backToString = (string)objectVariable;

            Console.WriteLine(backToString);
        }
    }
}
