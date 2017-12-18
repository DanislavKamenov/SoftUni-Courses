using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Character_Multiplier
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] str = Console.ReadLine().Split(' ');
            string str1 = str[0];
            string str2 = str[1];

            Console.WriteLine(MuliplyStringChars(str1, str2));
        }

        static int MuliplyStringChars(string str1, string str2)
        {
            int sum = 0;
            for (int i = 0; i < Math.Max(str1.Length, str2.Length); i++)
            {
                if (str1.Length != str2.Length)
                {
                    if (i >= str1.Length)
                    {
                        sum += str2[i];
                    }
                    else if (i >= str2.Length)
                    {
                        sum += str1[i];
                    }
                    else
                    {
                        sum += str1[i] * str2[i];
                    }
                }
                else
                {
                    sum += str1[i] * str2[i];
                }                
            }
            return sum;
        }
    }
}
