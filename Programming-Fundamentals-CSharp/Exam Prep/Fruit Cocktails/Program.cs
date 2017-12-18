using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fruit_Cocktails
{
    class Program
    {
        static void Main(string[] args)
        {
            var fruit = Console.ReadLine();
            var size = Console.ReadLine();
            var amount = int.Parse(Console.ReadLine());
            var price = 0.0;

            switch (fruit)
            {
                case "Watermelon":
                    switch (size)
                    {
                        case "small":
                            price = 2 * 56;
                            break;
                        case "big":
                            price = 5 * 28.70;
                            break;
                    }
                    break;
                case "Mango":
                    switch (size)
                    {
                        case "small":
                            price = 2 * 36.66;
                            break;
                        case "big":
                            price = 5 * 19.60;
                            break;
                    }
                    break;
                case "Pineapple":
                    switch (size)
                    {
                        case "small":
                            price = 2 * 42.10;
                            break;
                        case "big":
                            price = 5 * 24.80;
                            break;
                    }
                    break;
                case "Raspberry":
                    switch (size)
                    {
                        case "small":
                            price = 2 * 20;
                            break;
                        case "big":
                            price = 5 * 15.20;
                            break;
                    }
                    break;                    
            }
            var cost = price * amount;

            if (cost > 1000)            
                Console.WriteLine($"{cost - (cost *0.5), 0:f2} lv.");            
            else if (cost >= 400 && cost <= 1000)            
                Console.WriteLine($"{cost - (cost *0.15), 0:f2} lv.");            
            else Console.WriteLine($"{cost, 0:f2} lv.");
        }
    }
}
