using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            var currentDay = int.Parse(Console.ReadLine());

            string [] daysOfWeek = new string[7];
            daysOfWeek [0] = "Monday";
            daysOfWeek [1] = "Tuesday";
            daysOfWeek [2] = "Wednesday";
            daysOfWeek [3] = "Thursday";
            daysOfWeek [4] = "Friday";
            daysOfWeek [5] = "Saturday";
            daysOfWeek [6] = "Sunday";

            if (currentDay >= 1 && currentDay <= 7)
            Console.WriteLine(daysOfWeek[currentDay - 1]);
            else
                Console.WriteLine("Invalid Day!");
        }
    }
}
