using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            var parts = int.Parse(Console.ReadLine());
            var moneyPerPoint = double.Parse(Console.ReadLine());
            var totalPoints = 0;

            for (int i = 1; i <= parts; i++)
            {
                var pointsPerPart = int.Parse(Console.ReadLine());

                if (i % 2 == 0)
                {
                    totalPoints += pointsPerPart * 2;
                }
                else
                {
                    totalPoints += pointsPerPart;
                }
            }
            Console.WriteLine($"The project prize was {moneyPerPoint * totalPoints, 0:f2} lv.");
        }
    }
}
