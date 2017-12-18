using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_or_multiplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());            
            bool check = true;
            
            for (int a = 1; a <= 30; a++)
            {                
                for (int b = 1; b <= 30; b++)
                {
                    for (int c = 1; c <= 30; c++)
                    {
                        if (a < b && b < c && (a + b + c) == n)
                        {
                            Console.WriteLine($"{a} + {b} + {c} = {a + b + c}");
                            check = false;
                        }                        
                    }
                }                
            }
            for (int a1 = 1; a1 <= 30; a1++)
            {
                for (int b1 = 1; b1 <= 30; b1++)
                {
                    for (int c1 = 1; c1 <= 30; c1++)
                    {
                        if (a1 > b1 && b1 > c1 && (a1 * b1 * c1) == n)
                        {
                            Console.WriteLine($"{a1} * {b1} * {c1} = {a1 * b1 * c1}");
                            check = false;
                        }
                    }
                }
            }

            if (check == true)
            {
                Console.WriteLine("No!");
            }
        }
    }
}
