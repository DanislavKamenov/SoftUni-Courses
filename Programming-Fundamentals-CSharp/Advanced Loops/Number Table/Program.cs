using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Number_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var num = 1;

            for (int col = 0; col < n; col++)
            {
                for (int row = 0; row < n - col; row++)
                {
                    num = row + col + 1;
                    Console.Write("{0} ", num);                    
                }
                for (int row = 0; row < col; row++)
                {
                    var numLower = n - row - 1;
                    Console.Write("{0} ", numLower);
                }
                Console.WriteLine();
            }
        }
    }
}
