using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace _02.Convert_from_base_N_to_base_10
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            BigInteger baseN = BigInteger.Parse(input[0]);
            BigInteger number = BigInteger.Parse(input[1]);
            BigInteger baseNumber = 0;
            BigInteger baseRepresenter = 0;
            BigInteger convertedNum = 0;
            BigInteger pow = 0;


            while (number > 0)
            {
                baseNumber = number % 10;
                
                if(baseRepresenter == 0)
                {
                    pow = 1;
                }
                else if (baseRepresenter == 1)
                {
                    pow = baseN;
                }
                else
                {
                    pow *= baseN;
                    
                }
                convertedNum += baseNumber * pow;
                number = number / 10;
                baseRepresenter++;
            }

            Console.WriteLine(convertedNum);
        }
    }
}
