using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _03.Hornet_Assault
{
    class Program
    {
        static void Main(string[] args)
        {
            List<long> hives = Console.ReadLine().Split(' ').Select(long.Parse).ToList();
            List<long> hornets = Console.ReadLine().Split(' ').Select(long.Parse).ToList();            

            long hornetPower = hornets.Sum();
            
            for (int i = 0; i < hives.Count; i++)
            {
                if (hornetPower > hives[i])
                {
                    hives[i] = 0;
                }
                else if (hornetPower <= hives[i])
                {
                    hives[i] -= hornetPower;                    
                    hornetPower -= hornets[0];
                    hornets.Remove(hornets[0]);
                    if (hornets.Count == 0)
                    {
                        break;
                    }
                }
            }
            if (hives.Any(x => x > 0))
            {
                Console.WriteLine(string.Join(" ", hives.Where(y => y > 0)));
            }
            else
            {
                Console.WriteLine(string.Join(" ", hornets));
            }
        }
    }
}
