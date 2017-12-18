using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Cube_Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            double side = double.Parse(Console.ReadLine());
            string parameter = Console.ReadLine();
            CubeParamateres(side, parameter);
        }
        static void CubeParamateres(double side, string parameter)
        {
            var cube = 0.0;
            switch (parameter)
            {
                case "face":
                    cube =side * Math.Sqrt(2);
                    break;
                case "space":
                    cube = side * Math.Sqrt(3);
                    break;
                case "volume":
                    cube = Math.Pow(side, 3);
                    break;
                case "area":
                    cube = 6 * Math.Pow(side, 2);
                    break;
            }
            Console.WriteLine($"{cube:F2}");
        }
    }
}
