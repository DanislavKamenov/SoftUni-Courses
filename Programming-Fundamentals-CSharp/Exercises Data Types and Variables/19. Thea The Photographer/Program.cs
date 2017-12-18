using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _19.Thea_The_Photographer
{
    class Program
    {
        static void Main(string[] args)
        {
            int amountOfPictures = int.Parse(Console.ReadLine());
            int filterTimeSeconds = int.Parse(Console.ReadLine());
            int filterFactor = int.Parse(Console.ReadLine());
            int uploadTimeSeconds = int.Parse(Console.ReadLine());

            var filteredPictures = Math.Ceiling(amountOfPictures * (filterFactor / 100.0));
            var totalFilterTime = amountOfPictures * ((long)filterTimeSeconds);
            var totalUploadTime = ((int)filteredPictures) * ((long)uploadTimeSeconds);
            long totalTimeNeeded = totalFilterTime + totalUploadTime;

            Console.WriteLine(
                TimeSpan.FromSeconds(totalTimeNeeded)
                    .ToString(new string('d', 1) + @"\:hh\:mm\:ss"));
            //var days = 0;
            //var hours = 0;
            //var minutes = 0;
            //long seconds = 0;

            //while (totalTimeNeeded >= 60)
            //{
            //    totalTimeNeeded -= 60;
            //    minutes++;              
            //}
            //seconds = totalTimeNeeded;
            //while (minutes >= 60)
            //{
            //    minutes -= 60;
            //    hours++;
            //}
            //while (hours >= 24)
            //{
            //    hours -= 24;
            //    days++;
            //}
            //Console.WriteLine($"{days:d1}:{hours:d2}:{minutes:d2}:{seconds:d2}");
        }
    }
}
