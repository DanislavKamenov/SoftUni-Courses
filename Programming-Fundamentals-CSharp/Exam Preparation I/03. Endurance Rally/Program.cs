using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Endurance_Rally
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            decimal[] track = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(decimal.Parse).ToArray();
            long[] indices = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(long.Parse).ToArray();            

            for (int currDriver = 0; currDriver < names.Length; currDriver++)
            {
                int startFuel = names[currDriver].First();
                decimal fuelLeft = startFuel;
                for (int trackIndex = 0; trackIndex < track.Length; trackIndex++)
                {
                    if (indices.Contains(trackIndex))
                    {
                        fuelLeft += track[trackIndex];
                    }
                    else
                    {
                        fuelLeft -= track[trackIndex];
                        if (fuelLeft <= 0)
                        {
                            Console.WriteLine($"{names[currDriver]} - reached {trackIndex}");
                            break;
                        }
                    }                    
                }
                if (fuelLeft > 0)
                {
                    Console.WriteLine($"{names[currDriver]} - fuel left {fuelLeft:F2}");
                }
            }            
        }
    }
}
