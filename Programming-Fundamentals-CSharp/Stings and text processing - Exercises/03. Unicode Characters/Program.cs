using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Unicode_Characters
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            StringBuilder sb = new StringBuilder();            
            foreach (char c in input)
                sb.AppendFormat("\\u{0:X4}", (uint)c);
            Console.WriteLine(sb.ToString().ToLower());
        }
    }
}
