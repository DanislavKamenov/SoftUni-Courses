using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Centuries_to_Nanoseconds
{
    class Program
    {
        static void Main(string[] args)
        {
            sbyte centuries = sbyte.Parse(Console.ReadLine());
            short years = (short)(centuries * 100);
            int days = (int)((years) * 365.2422);
            int hours = days * 24;
            long minutes = hours * 60;
            long seconds = minutes * 60;
            long milliseconds = seconds * 1000;
            long microseconds = milliseconds * 1000;
            decimal nanoseconds = ((decimal) microseconds) * 1000;

            Console.WriteLine($"{centuries} centuries = {years} years = {days} days = {hours} hours = {minutes} minutes = {seconds} seconds = " +
                $"{milliseconds} milliseconds = {microseconds} microseconds = {nanoseconds} nanoseconds");

        }
    }
}
