using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7.Fruit_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            var fruit = Console.ReadLine().ToLower();
            var day = Console.ReadLine().ToLower();
            var amount = double.Parse(Console.ReadLine());
            var price = -1.0;
            
            if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday")
                {
                    switch (fruit)
                    {
                    case "banana": price = 2.50; break;
                    case "apple": price = 1.20; break;
                    case "orange": price = 0.85; break;
                    case "grapefruit": price = 1.45; break;
                    case "kiwi": price = 2.70; break;
                    case "pineapple": price = 5.50; break;
                    case "grapes": price = 3.85; break;
                    }
                }
            else if (day == "saturday" || day == "sunday")
            {
                switch (fruit)
                {
                    case "banana": price = 2.70; break;
                    case "apple": price = 1.25; break;
                    case "orange": price = 0.90; break;
                    case "grapefruit": price = 1.60; break;
                    case "kiwi": price = 3.00; break;
                    case "pineapple": price = 5.60; break;
                    case "grapes": price = 4.20; break;
                }
            }
            var result = price * amount;
            if (price > 0)
            {
                Console.WriteLine($"{result:f2}");
            }
            else
                Console.WriteLine("error");
        }
    }
}
