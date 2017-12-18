    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace House_Painting
    {
        class Program
        {
            static void Main(string[] args)
            {
                var x = double.Parse(Console.ReadLine());
                var y = double.Parse(Console.ReadLine());
                var h = double.Parse(Console.ReadLine());

                var sideWall = x * y;
                var sideWindow = 1.5 * 1.5;
                var totalSideWall = sideWall * 2 - sideWindow * 2;

                var frontWall = x * x;
                var frontDoor = 1.2 * 2;
                var totalFrontWall = frontWall * 2 - frontDoor;

                var totalRoofSide = x * y * 2;
                var totalRoofFront = ((x * h) / 2) * 2;
                var totalRoof = totalRoofSide + totalRoofFront;

                var totalPaintWall = (totalSideWall + totalFrontWall) / 3.4;
                var totalPaintRoof = totalRoof / 4.3;

                Console.WriteLine($"{totalPaintWall, 0:f2}");
                Console.WriteLine($"{totalPaintRoof, 0:f2}");
            }
        }
    }
