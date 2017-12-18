using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sweet_Dessert
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal money = decimal.Parse(Console.ReadLine());
            int guests = int.Parse(Console.ReadLine());
            decimal bananaPrice = decimal.Parse(Console.ReadLine());
            decimal eggPrice = decimal.Parse(Console.ReadLine());
            decimal berryPriceKg = decimal.Parse(Console.ReadLine());

            decimal pricePerServing = (bananaPrice * 2) + (eggPrice * 4) + (berryPriceKg * 0.2M);
            decimal moneyNeeded = 0.0M;
            if (guests % 6 == 0)
            {
                int numberOfSevings = guests / 6;
                moneyNeeded = pricePerServing * numberOfSevings;
            }
            else if (guests == 0)
            {
                moneyNeeded = 0;
            }
            else
            {
                int numberOfSevings = guests / 6 + 1;
                moneyNeeded = pricePerServing * numberOfSevings;
            }
            if (moneyNeeded <= money)
            {
                Console.WriteLine($"Ivancho has enough money - it would cost {moneyNeeded:F2}lv.");
            }
            else
            {
                Console.WriteLine($"Ivancho will have to withdraw money - he will need {moneyNeeded - money:F2}lv more.");
            }
        }
    }
}
