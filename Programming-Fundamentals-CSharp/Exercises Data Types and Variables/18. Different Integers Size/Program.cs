using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _18.Different_Integers_Size
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = Console.ReadLine();
            IsType(n);

        }

        static void IsType(string n)
        {
            sbyte temp = 0;
            byte temp1 = 0;
            short temp2 = 0;
            ushort temp3 = 0;
            int temp4 = 0;
            uint temp5 = 0;
            long temp6 = 0;

            bool parseAsSbyte = sbyte.TryParse(n, out temp);
            bool parseAsbyte = byte.TryParse(n, out temp1);
            bool parseAsShort = short.TryParse(n, out temp2);
            bool parseAsUshort = ushort.TryParse(n, out temp3);
            bool parseAsInt = int.TryParse(n, out temp4);
            bool parseAsUint = uint.TryParse(n, out temp5);
            bool parseAsLong = long.TryParse(n, out temp6);

            if (parseAsLong == false)
            {
                Console.WriteLine($"{n} can't fit in any type");
                return;
            }

            Console.WriteLine($"{n} can fit in:");
            if (parseAsSbyte)
            {
                Console.WriteLine("* sbyte");
            }
            if (parseAsbyte)
            {
                Console.WriteLine("* byte");
            }
            if (parseAsShort)
            {
                Console.WriteLine("* short");

            }
            if (parseAsUshort)
            {
                Console.WriteLine("* ushort");
            }
            if (parseAsInt)
            {
                Console.WriteLine("* int");
            }
            if (parseAsUint)
            {
                Console.WriteLine("* uint");
            }
            if (parseAsLong)
            {
                Console.WriteLine("* long");
            }            
        }
    }
}
