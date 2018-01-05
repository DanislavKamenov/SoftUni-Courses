using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Wormtest
{
    class Program
    {
        static void Main(string[] args)
        {
            var lenghtcentimetres = int.Parse(Console.ReadLine()) * 100;
            var widthCentimetres = double.Parse(Console.ReadLine());

            if (widthCentimetres == 0 || lenghtcentimetres % widthCentimetres == 0)
            {
                Console.WriteLine((lenghtcentimetres * widthCentimetres).ToString("0.00"));
            }
            else
            {
                var percentageLenghtFromWidth = lenghtcentimetres / widthCentimetres * 100;
                Console.WriteLine(percentageLenghtFromWidth.ToString("0.00") + "%");
            }            
        }
    }
}
