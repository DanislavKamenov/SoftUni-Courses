using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Timed_02_Work_Hours
{
    class Program
    {
        static void Main(string[] args)
        {
            var hoursNeeded = int.Parse(Console.ReadLine());
            var workers = int.Parse(Console.ReadLine());
            var workDays = int.Parse(Console.ReadLine());

            var workHours = (workDays * 8) * workers;

            if (workHours > hoursNeeded)
            {
                Console.WriteLine($"{workHours - hoursNeeded} hours left");
            }
            else
            {
                Console.WriteLine($"{hoursNeeded - workHours} overtime");
                Console.WriteLine($"Penalties: {(hoursNeeded - workHours) * workDays}");
            }
        }
    }
}
