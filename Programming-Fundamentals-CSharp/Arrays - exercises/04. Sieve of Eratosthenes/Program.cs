using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Sieve_of_Eratosthenes
{
    class Program
    {
        static void Main(string[] args)
        {
            int imput = int.Parse(Console.ReadLine());

            bool[] isPrime = new bool[imput + 1];            
            isPrime = Enumerable.Repeat(true, imput + 1).ToArray();
            isPrime[0] = false;
            isPrime[1] = false;

            for (int i = 0; i < isPrime.Length; i++)
            {
                if (isPrime[i] == true)
                {
                    for (int j = 2; j * i <= imput; j++)
                    {
                        isPrime[j * i] = false;
                    }
                }
            }
            for (int i = 2; i <= imput; i++)
            {
                if (isPrime[i] == true)
                {
                    Console.Write(i + " ");
                }
            }
            Console.WriteLine();
        }
    }
}
