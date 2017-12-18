using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.Fruit_or_Vegetable
{
    class Program
    {
        static void Main(string[] args)
        {
            var product = Console.ReadLine();

            if (product == "banana" || product == "apple" || product == "kiwi" || product == "cherry" || product == "grapes" || product == "lemon")
                Console.WriteLine("fruit");
            else if (product == "tomato" || product == "cucumber" || product == "pepper" || product == "carrot")
                Console.WriteLine("vegetable");
            else
                Console.WriteLine("unknown");           
        }
    }
}
