using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.English_Name_оf_the_Last_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            NumberName(long.Parse(Console.ReadLine()));
        }

        static void NumberName(long number)
        {
            var numberToString = number.ToString() [number.ToString().Length - 1];

            switch (numberToString)
            {
                case '1':
                    Console.WriteLine("one");
                    break;
                case '2':
                    Console.WriteLine("two");
                    break;
                case '3':
                    Console.WriteLine("three");
                    break;
                case '4':
                    Console.WriteLine("four");
                    break;
                case '5':
                    Console.WriteLine("five");
                    break;
                case '6':
                    Console.WriteLine("six");
                    break;
                case '7':
                    Console.WriteLine("seven");
                    break;
                case '8':
                    Console.WriteLine("eight");
                    break;
                case '9':
                    Console.WriteLine("nine");
                    break;
                case '0':
                    Console.WriteLine("zero");
                    break;
            }
        }
    }
}
