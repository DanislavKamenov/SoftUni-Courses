using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TImed_04_Bills
{
    class Program
    {
        static void Main(string[] args)
        {
            var months = int.Parse(Console.ReadLine());
            var elecricityBill = 0.0;
            var waterBill = 0.0;
            var internetBill = 0.0;
            var others = 0.0;            

            for (int i = 0; i < months; i++)
            {
                var elecricity = double.Parse(Console.ReadLine());
                elecricityBill += elecricity;
                waterBill += 20;
                internetBill += 15;
                others += elecricity + 20 + 15 + ((elecricity + 20 + 15) * 0.20);                             
            }

            Console.WriteLine($"Electricity: {elecricityBill, 0:f2} lv");
            Console.WriteLine($"Water: {waterBill,0:f2} lv");
            Console.WriteLine($"Internet: {internetBill,0:f2} lv");
            Console.WriteLine($"Other: {others,0:f2} lv");
            Console.WriteLine($"Average: {(elecricityBill + waterBill + internetBill + others) / months,0:f2} lv");
        }
    }
}
