using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.BPM_Counter
{
    class Program
    {
        static void Main(string[] args)
        {
            var beatsPerMinute = int.Parse(Console.ReadLine());
            var numberOfBeats = double.Parse(Console.ReadLine());

            var bars = 0.0;
            var beatsPerSecond = beatsPerMinute / 60.0;
            var minutes = 0;
            var seconds = 0.0;

            for (int i = 1; i <= numberOfBeats; i++)
            {
                bars += 0.25;                
            }

            seconds = numberOfBeats / beatsPerSecond;

            if (seconds >= 60)
            {
                minutes += 1;
                seconds -= 60;
            }

            Console.WriteLine($"{bars.ToString("0.#")} bars - {minutes}m {Math.Floor(seconds)}s");
        }
    }
}
