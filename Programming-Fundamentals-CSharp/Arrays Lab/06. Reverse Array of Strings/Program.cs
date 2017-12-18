using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Reverse_Array_of_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] text = Console.ReadLine().Split(' ');

            string[] textReversed = new string[text.Length];

            for (int i = 0; i < text.Length; i++)
            {
                textReversed[i] = text[text.Length - 1 - i];
            }
            Console.WriteLine(string.Join(" ", textReversed));
        }
    }
}
