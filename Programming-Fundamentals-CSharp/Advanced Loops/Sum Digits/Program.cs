using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_Digits
{
    class Program
    {
        static void Main(string[] args)
        {
            var num = int.Parse(Console.ReadLine());
            var sum = 0;

            do
            {
                sum += num % 10;
                num /= 10;
            } while (num > 0);
            Console.WriteLine("Sum of digits: {0}", sum);
        }
    }
}
