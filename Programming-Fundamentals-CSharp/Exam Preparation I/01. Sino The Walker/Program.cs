using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using System.Numerics;

namespace _01.Sino_The_Walker
{
    class Program
    {
        static void Main(string[] args)
        {
            TimeSpan departure = TimeSpan.Parse(Console.ReadLine());
            ulong stepNums = ulong.Parse(Console.ReadLine());
            ulong secPerStep = ulong.Parse(Console.ReadLine());

            BigInteger travelTimeSec = stepNums * secPerStep;
            BigInteger minutes = 0;
            BigInteger hours = 0;
            BigInteger days = 0;            
            while (travelTimeSec >= 60)
            {
                minutes = travelTimeSec / 60;
                travelTimeSec -= 60 * minutes;
                if (minutes >= 60)
                {
                    hours = minutes / 60;
                    minutes -= 60 * hours;
                }
                if (hours > 24)
                {
                    days = hours / 24;
                    hours -= 24 * days;                   
                }                
            }
            string totalTravelTime = $"{hours}:{minutes}:{travelTimeSec}";
            TimeSpan arrival = TimeSpan.Parse(totalTravelTime);
            arrival = arrival + departure;
            Console.WriteLine($"Time Arrival: {arrival.Hours:0#}:{arrival.Minutes:0#}:{arrival.Seconds:0#}");
        }
    }
}
