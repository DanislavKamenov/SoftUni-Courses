using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.SMS_Typing
{
    class Program
    {
        static void Main(string[] args)
        {
            var count = int.Parse(Console.ReadLine());
            char j = 'a';

            for (int i = 0; i < count; i++)
            {
                var numberOfSymbols = int.Parse(Console.ReadLine());

                for (j = 'a'; j <= 'z';)
                {
                   // j = 5 + numberOfSymb;
                    Console.WriteLine(j + numberOfSymbols.ToString().Length);
                }
            }
        }
    }
}
