using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Training_Hall_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            var budget = double.Parse(Console.ReadLine());
            var numberOfItems = int.Parse(Console.ReadLine());

            var priceCount = 0.0;

            for (int i = 0; i < numberOfItems; i++)
            {
                var itemName = Console.ReadLine();
                var itemPrice = double.Parse(Console.ReadLine());
                var itemCount = int.Parse(Console.ReadLine());
                priceCount += itemCount * itemPrice;

                if (itemCount > 1)
                {
                    Console.WriteLine($"Adding {itemCount} {itemName}s to cart.");
                }
                else
                {
                    Console.WriteLine($"Adding {itemCount} {itemName} to cart.");
                }

            }
            Console.WriteLine($"Subtotal: ${priceCount:f2}");

            if (budget >= priceCount)
            {
                Console.WriteLine($"Money left: ${budget - priceCount:f2}");
            }
            else if (budget < priceCount)
            {
                Console.WriteLine($"Not enough. We need ${Math.Abs(budget - priceCount):f2} more.");
            }
        }
    }
}
