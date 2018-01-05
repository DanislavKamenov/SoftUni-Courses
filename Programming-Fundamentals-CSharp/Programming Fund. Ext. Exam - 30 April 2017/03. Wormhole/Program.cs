using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Wormhole
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] wormholes = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int stepCount = 0;

            for (int i = 0; i < wormholes.Length; i++)
            {
                int step = wormholes[i];

                if (step == 0)
                {
                    stepCount++;
                    continue;
                }
                else
                {
                    wormholes[i] = 0;
                    i = step - 1;                   
                }
            }

            Console.WriteLine(stepCount);
        }
    }
}
