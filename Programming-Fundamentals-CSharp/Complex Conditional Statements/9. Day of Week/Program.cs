using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9.Day_of_Week
{
    class Program
    {
        static void Main(string[] args)
        {
            var dayInput = int.Parse(Console.ReadLine());

            switch(dayInput)
            {
                case 1: Console.WriteLine("Monday"); break;
                case 2: Console.WriteLine("tuesday"); break;
                case 3: Console.WriteLine("Wednesday"); break;
                case 4: Console.WriteLine("Thursday"); break;
                case 5: Console.WriteLine("Friday"); break;
                case 6: Console.WriteLine("Saturday"); break;
                case 7: Console.WriteLine("Sunday"); break;
                default: Console.WriteLine("Error"); break;
            }
        }
    }
}
