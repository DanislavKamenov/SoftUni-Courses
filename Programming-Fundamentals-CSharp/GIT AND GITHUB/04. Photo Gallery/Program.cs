using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Photo_Gallery
{
    class Program
    {
        static void Main(string[] args)
        {
            var photoNumber = int.Parse(Console.ReadLine());
            var day = int.Parse(Console.ReadLine());
            var month = int.Parse(Console.ReadLine());
            var year = int.Parse(Console.ReadLine());
            var hours = int.Parse(Console.ReadLine());
            var minutes = int.Parse(Console.ReadLine());
            var fileSize = int.Parse(Console.ReadLine());
            var width = int.Parse(Console.ReadLine());
            var height = int.Parse(Console.ReadLine());
            var orientation = string.Empty;

            Console.WriteLine($"Name: DSC_{photoNumber:d4}.jpg");
            Console.WriteLine($"Date Taken: {day:d2}/{month:D2}/{year} {hours:d2}:{minutes:d2}");

            if (fileSize < 1024)            
                Console.WriteLine($"Size: {fileSize:f1}B");            
            else if (fileSize < 1024 * 1024)            
                Console.WriteLine($"Size: {fileSize / 1000.0:f1}KB");            
            else if (fileSize < 1024 * 1024 * 1024)            
                Console.WriteLine($"Size: {fileSize / 1000000.0:f1}MB");

            if (width > height)
                orientation = "landscape";
            else if (width < height)
                orientation = "portrait";
            else if (width == height)
                orientation = "square";
            Console.WriteLine($"Resolution: {width}x{height} ({orientation})");
        }
    }
}
