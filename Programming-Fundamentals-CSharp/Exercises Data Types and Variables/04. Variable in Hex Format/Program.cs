﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Variable_in_Hex_Format
{
    class Program
    {
        static void Main(string[] args)
        {
            var hexadecimal = Console.ReadLine();
            int ConvertedToInt = Convert.ToInt32(hexadecimal, 16);
            
            Console.WriteLine(ConvertedToInt);
        }
    }
}
