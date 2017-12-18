using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Programming_Fundamentals_Ext_Exam_10_Dec_2017
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            decimal density = decimal.Parse(Console.ReadLine());
            decimal rainCoeficient = 0M;
            

            for (int i = 0; i < n; i++)
            {
                string[] regionData = Console.ReadLine().Split(' ');
                long raindropsCount = long.Parse(regionData[0]);
                int squareMeters = int.Parse(regionData[1]);
                
                rainCoeficient += ((decimal)raindropsCount / squareMeters);
                                
                
            }
            if (density > 0)
            {
                rainCoeficient /= density;
            }
            Console.WriteLine(rainCoeficient.ToString("0.000"));
        }
    }
}
