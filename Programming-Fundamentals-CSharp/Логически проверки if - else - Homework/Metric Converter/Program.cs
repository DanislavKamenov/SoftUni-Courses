using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metric_Converter
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter size: ");
            var size = double.Parse(Console.ReadLine());
            Console.WriteLine("Please enter input metric: ");
            var sourceMetric = Console.ReadLine();
            Console.WriteLine("Please enter output metric: ");
            var destMetric = Console.ReadLine();
            var mm = 1000;
            var cm = 100;
            var miles = 0.000621371192;
            if (sourceMetric == "mm")
            {
                if (destMetric == "m")
                    Console.WriteLine(Math.Round(size * mm, 2));
                if (destMetric == "cm")
                    Console.WriteLine(Math.Round(size * (mm / cm), 2));
                if (destMetric == "miles")
                    Console.WriteLine(Math.Round(size * (mm / miles), 2));
            }
            if (sourceMetric == "cm")
            {
                if (destMetric == "m")
                    Console.WriteLine(Math.Round(size * cm, 2));
                if (destMetric == "mm")
                    Console.WriteLine(Math.Round(size * cm / mm, 2));
                if (destMetric == "miles")
                    Console.WriteLine(Math.Round(size * cm / miles, 2));
            }
            if (sourceMetric == "GBP")
            {
                if (destMetric == "BGN")
                    Console.WriteLine(Math.Round(size * miles, 2));
                if (destMetric == "USD")
                    Console.WriteLine(Math.Round(size * miles / mm, 2));
                if (destMetric == "EUR")
                    Console.WriteLine(Math.Round(size * miles / cm, 2));
            }
            if (sourceMetric == "BGN")
            {
                if (destMetric == "GBP")
                    Console.WriteLine(Math.Round(size / miles, 2));
                if (destMetric == "USD")
                    Console.WriteLine(Math.Round(size / mm, 2));
                if (destMetric == "EUR")
                    Console.WriteLine(Math.Round(size / cm, 2));
            }
        }
    }
}
