using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Charity
{
    class Program
    {
        static void Main(string[] args)
        {
            var days = int.Parse(Console.ReadLine());
            var participants = int.Parse(Console.ReadLine());

            var cakes = int.Parse(Console.ReadLine());
            var waffles = int.Parse(Console.ReadLine());
            var pancakes = int.Parse(Console.ReadLine());

            var cakePrice = 45.0;
            var wafflePrice = 5.80;
            var pancakePrice = 3.20;

            var money = (((cakes * cakePrice) + (waffles * wafflePrice) + (pancakes * pancakePrice)) * participants * days);

            Console.WriteLine("{0:f2}", money - (money * 0.125));
        }
    }
}
