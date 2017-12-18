using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter score: ");
            var num = int.Parse(Console.ReadLine());
            var bonusScore = 0.0;
            if (num > 1000)
                bonusScore = num * 0.10;
            else if (num > 100)
                bonusScore = num * 0.20;
            else if (num <= 100)
                bonusScore = 5;
            if (num % 10 == 5)
                bonusScore += 2;
            else if (num % 2 == 0)
                bonusScore += 1;
            Console.WriteLine("Bonus score: {0}", bonusScore);        
            Console.WriteLine("Total score: {0}", num + bonusScore);
        }
    }
}
