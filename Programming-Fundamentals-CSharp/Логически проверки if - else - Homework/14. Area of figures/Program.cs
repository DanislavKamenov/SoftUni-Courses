using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Area_of_figures
{
    class Program
    {
        static void Main(string[] args)
        {
            var figure = Console.ReadLine();
            if (figure == "square")
            {
                var squareSideA = double.Parse(Console.ReadLine());
                Console.WriteLine(Math.Round(squareSideA * squareSideA, 3));
            }
            else if (figure == "rectangle")
            {
                var rectangleSideA = double.Parse(Console.ReadLine());
                var rectangleSideB = double.Parse(Console.ReadLine());
                Console.WriteLine(Math.Round(rectangleSideA * rectangleSideB, 3));
            }
            else if (figure == "circle")
            {
                var radius = double.Parse(Console.ReadLine());
                Console.WriteLine(Math.Round(Math.PI * radius * radius, 3));
            }
            else if (figure == "triangle")
            {
               var triangleSideA = double.Parse(Console.ReadLine());
               var triangleH = double.Parse(Console.ReadLine());
                Console.WriteLine(Math.Round((triangleH * triangleSideA) / 2, 3));
            }          
               
        }
    }
}
