using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sino_The_Walker
{
    class Program
    {
        static void Main(string[] args)
        {
            TimeSpan departure = TimeSpan.ParseExact(Console.ReadLine(), "hh\\:mm\\:ss", CultureInfo.InvariantCulture);
            long steps = long.Parse(Console.ReadLine());
            long secPerStep = long.Parse(Console.ReadLine());
            long secondsWalking = steps * secPerStep;
            long minutesWalking = 0;
            long hoursWalking = 0;
            long daysWalking = 0;

            while (secondsWalking > int.MaxValue || minutesWalking > int.MaxValue || hoursWalking > int.MaxValue)
            {
                minutesWalking = secondsWalking / 60;
                secondsWalking -= minutesWalking * 60;
                hoursWalking = minutesWalking / 60;
                minutesWalking -= hoursWalking * 60;
                daysWalking = hoursWalking / 24;
                hoursWalking -= daysWalking * 24;
            }

            TimeSpan walkingTime = new TimeSpan(Convert.ToInt32(hoursWalking), Convert.ToInt32(minutesWalking), Convert.ToInt32(secondsWalking));
            TimeSpan totalTime = departure + walkingTime;

            Console.WriteLine($"Time Arrival: {totalTime.ToString("hh\\:mm\\:ss")}");
        }
    }
}
