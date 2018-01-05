using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _01.Thea_the_Photographer
{
    class Program
    {
        static void Main(string[] args)
        {
            long picsTaken = long.Parse(Console.ReadLine());
            BigInteger filterTimeSec = BigInteger.Parse(Console.ReadLine());
            long filterFactor = long.Parse(Console.ReadLine());
            BigInteger uploadTime = BigInteger.Parse(Console.ReadLine());
            BigInteger seconds = 0;
            BigInteger minutes = 0;
            BigInteger hours = 0;
            BigInteger days = 0;

            BigInteger filteredPics = (BigInteger)Math.Ceiling(picsTaken * (filterFactor / 100.0M));
            BigInteger totalFilterTime = picsTaken * filterTimeSec;
            BigInteger totalUploadTime = filteredPics * uploadTime;
            BigInteger totalTime = totalFilterTime + totalUploadTime;
            seconds = totalTime;

            while (seconds > 59 || minutes > 59 || hours > 59)
            {
                minutes = seconds / 60;
                seconds -= minutes * 60;
                hours = minutes / 60;
                minutes -= hours * 60;
                days = hours / 24;
                hours -= days * 24;
            }

            Console.WriteLine($"{days.ToString("0")}:{hours.ToString("00")}:{minutes.ToString("00")}:{seconds.ToString("00")}");
        }
    }
}
