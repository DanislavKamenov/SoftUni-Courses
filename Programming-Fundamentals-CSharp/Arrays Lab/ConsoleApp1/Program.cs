using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var items = Console.ReadLine().Split(' ');
            var nums = items.Select(int.Parse).ToArray();
        }       
    }
}
