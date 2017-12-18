using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Geometry_Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            string figureType = Console.ReadLine();
            GeometryCalculator(figureType);
        }

        static void GeometryCalculator(string figureType)
        {
            var figureArea = 0.0;
            switch (figureType)
            {
                case "triangle":
                    var sideT = double.Parse(Console.ReadLine());
                    var height = double.Parse(Console.ReadLine());
                    figureArea = (height * sideT) / 2;
                    break;
                case "square":
                    var sideS = double.Parse(Console.ReadLine());
                    figureArea = sideS * sideS;
                    break;
                case "rectangle":
                    var widthR = double.Parse(Console.ReadLine());
                    var heightR = double.Parse(Console.ReadLine());
                    figureArea = widthR * heightR;
                    break;
                case "circle":
                    var radius = double.Parse(Console.ReadLine());
                    figureArea = Math.PI * (radius * radius);
                    break;               
            }
            Console.WriteLine($"{figureArea:F2}");
        }
    }
}
