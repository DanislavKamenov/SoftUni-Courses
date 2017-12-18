using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Index_of_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = File.ReadAllText(@"..\..\input.txt").ToLower();
            int count = 0;


            for (int i = 0; i < input.Length; i++)
            {
                count = 0;
                for (char j = 'a'; j <= 'z'; j++)
                {
                    if (input[i] == j)
                    {
                        File.AppendAllText(@"..\..\output.txt", ($"{j} -> {count}")+ Environment.NewLine);
                        break;
                    }
                    count++;
                }               
            }
        }
    }
}