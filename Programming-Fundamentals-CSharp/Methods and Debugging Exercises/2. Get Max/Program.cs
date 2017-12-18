using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Get_Max
{
    class Program
    {
        static void Main(string[] args)
        {
            GetMax();
        }

        static void GetMax()
        {
            int firstNumber = int.Parse(Console.ReadLine());
            int secondNumber = int.Parse(Console.ReadLine());
            int thirdNumber = int.Parse(Console.ReadLine());
            if (firstNumber > secondNumber && firstNumber > thirdNumber)
            {
                Console.WriteLine(firstNumber);
            }
            else if(secondNumber > firstNumber && secondNumber > thirdNumber)
            {
                Console.WriteLine(secondNumber);
            }
            else
            {
                Console.WriteLine(thirdNumber);
            }
        }
    }
}
