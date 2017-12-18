using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB
{
    class Program
    {
        static void Main(string[] args)
        {
            string test = "";

            for (int i = 0; i < 100000; i++)
            {
                test = test + "pesho";
            }
            Console.WriteLine(test.Length);
        }
    }
}
