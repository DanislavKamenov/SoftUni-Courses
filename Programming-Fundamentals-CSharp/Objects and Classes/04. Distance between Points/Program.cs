using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Distance_between_Points
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] coordsA = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            double[] coordsB = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            var PointA = new Point() {X = coordsA[0],Y = coordsA[1] };
            var PointB = new Point() { X = coordsB[0], Y = coordsB[1] };               

            
            Console.WriteLine($"{CalcDistance(PointA, PointB):F3}");
        }

        static double CalcDistance(Point pointA, Point pointB)
        {
            double distance = Math.Sqrt(Math.Pow(pointA.X - pointB.X, 2) + Math.Pow(pointA.Y - pointB.Y, 2));
            return distance;
        }
    }

    class Point
    {
        public double X { get; set; }
        public double Y { get; set; }        
    }
}
