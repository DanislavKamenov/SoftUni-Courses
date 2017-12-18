using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TryCatch
{
    class Program
    {
        static void Main(string[] args)
        {            
                try
                {
                    var n = int.Parse(Console.ReadLine());

                    while (n % 2 != 0)
                    {
                        Console.WriteLine("The number is not even");
                        n = int.Parse(Console.ReadLine());
                    }
                    if (n % 2 == 0)
                    {
                        Console.WriteLine("Even number entered: {0}", n);
                    }

                }
                catch
                {
                    Console.WriteLine("Invalid number");

                    var n = int.Parse(Console.ReadLine());                    
                }            
        }
    }
}
