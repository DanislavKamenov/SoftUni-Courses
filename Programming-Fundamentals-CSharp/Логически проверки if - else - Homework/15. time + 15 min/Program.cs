using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15.time___15_min
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputH = int.Parse(Console.ReadLine());
            var inputM = int.Parse(Console.ReadLine());
            var time = inputM + 15;
            if (time > 59)
            { inputH++; time -= 60; }
            if (inputH > 23)
                inputH = 00;
            if (time < 10)
                Console.WriteLine("{0}:0{1}", inputH, time);
            else
                Console.WriteLine("{0}:{1}", inputH, time);
        }
    }
}
