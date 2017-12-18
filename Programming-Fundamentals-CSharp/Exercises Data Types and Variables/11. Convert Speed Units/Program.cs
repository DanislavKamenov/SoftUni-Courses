using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Convert_Speed_Units
{
    class Program
    {
        static void Main(string[] args)
        {
            var distance = float.Parse(Console.ReadLine());
            var hours = float.Parse(Console.ReadLine());
            var minutes = float.Parse(Console.ReadLine());
            var seconds = float.Parse(Console.ReadLine());

            float timeInSeconds = ((hours * 60 * 60)) + (minutes * 60) + seconds;
            float timeInHours = hours + (minutes / 60 + ((seconds / 60) / 60));
            float metersPerSecond = distance / timeInSeconds;
            float distanceInKm = distance / 1000;
            float distanceInMiles = distance / 1609;            

            Console.WriteLine(distance / timeInSeconds);
            Console.WriteLine(distanceInKm / timeInHours);
            Console.WriteLine(distanceInMiles / timeInHours);
        }
    }
}
