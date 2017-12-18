using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Rectangle_Position
{
    class Program
    {
        static void Main(string[] args)
        {
            Rectangle rect1 = ReadRect();
            Rectangle rect2 = ReadRect();

            Console.WriteLine(IsInside(rect1, rect2));
        }

        static string IsInside(Rectangle rect1, Rectangle rect2)
        {
            if (rect1.Left >= rect2.Left && rect1.Right <= rect2.Right && rect1.Top <= rect2.Top && rect1.bottom <= rect2.bottom)
            {
                return "Inside";
            }
            return "Not inside";
        }

        static Rectangle ReadRect()
        {
            int[] rectangleInfo = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            return new Rectangle { Left = rectangleInfo[0], Top = rectangleInfo[1], Width = rectangleInfo[2], Height = rectangleInfo[3] };
        }
    }

    class Rectangle
    {
        public int Top { get; set; }
        public int Left { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }

        public int Right
        {
          get
          {
                return Left + Width;
          }  
        }

        public int bottom
        {
            get
            {
                return Top + Height;
            }
        }

    }
}
