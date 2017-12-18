using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9.Longer_Line
{
    class Program
    {
        static void Main(string[] args)
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());
            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());
            double x3 = double.Parse(Console.ReadLine());
            double y3 = double.Parse(Console.ReadLine());
            double x4 = double.Parse(Console.ReadLine());
            double y4 = double.Parse(Console.ReadLine());

            ClosestToCentre(x1, y1, x2, y2, x3, y3, x4, y4);
        }
        static void ClosestToCentre(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4)
        {
            double x1Abs = Math.Abs(x1);
            double y1Abs = Math.Abs(y1);
            double x2Abs = Math.Abs(x2);
            double y2Abs = Math.Abs(y2);
            double x3Abs = Math.Abs(x3);
            double y3Abs = Math.Abs(y3);
            double x4Abs = Math.Abs(x4);
            double y4Abs = Math.Abs(y4);
            if (x1Abs + y1Abs < x2Abs + y2Abs || x3Abs + y3Abs < x4Abs + y4Abs)
            {
                Console.WriteLine(x1Abs + y1Abs + x2Abs + y2Abs >= x3Abs + y3Abs + x4Abs + y4Abs ? $"({x1}, {y1})({x2}, {y2})" : $"({x3}, {y3})({x4}, {y4})");
            }
            else if (x1Abs + y1Abs > x2Abs + y2Abs || x3Abs + y3Abs > x4Abs + y4Abs)
            {
                Console.WriteLine(x1Abs + y1Abs + x2Abs + y2Abs >= x3Abs + y3Abs + x4Abs + y4Abs ? $"({x2}, {y2})({x1}, {y1})" : $"({x4}, {y4})({x3}, {y3})");
            }
            
        }
    }
}
