using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Compare_Char_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] letters1 = Console.ReadLine().Split(' ').Select(char.Parse).ToArray();
            char[] letters2 = Console.ReadLine().Split(' ').Select(char.Parse).ToArray();

            int shortest = Math.Min(letters1.Length, letters2.Length);
           

            for (int i = 0; i < shortest; i++)
            {
                
                
                if (letters1[i] < letters2[i])
                {
                     Console.WriteLine(string.Join("", letters1));
                     Console.WriteLine(string.Join("", letters2));
                     break;
                }
                else if (letters1[i] > letters2[i])
                {
                        Console.WriteLine(string.Join("", letters2));
                        Console.WriteLine(string.Join("", letters1));
                    break;
                } 
                else if (letters1.Length < letters2.Length)
                {
                    Console.WriteLine(string.Join("", letters1));
                    Console.WriteLine(string.Join("", letters2));
                    break;
                }
                else
                {
                    Console.WriteLine(string.Join("", letters2));
                    Console.WriteLine(string.Join("", letters1));
                    break;
                }
            }
            
        }
    }
}
