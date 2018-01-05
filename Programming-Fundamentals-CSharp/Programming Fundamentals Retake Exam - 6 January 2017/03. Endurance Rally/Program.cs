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
            var names = Console.ReadLine().Split(' ');
            var track = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            var checkpointIndices = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            var indexReached = 0;            

            for (int i = 0; i < names.Length; i++)
            {
                double startingFuel = names[i][0];
                var canFinish = true;

                for (int j = 0; j < track.Length; j++)
                {  
                    if (!checkpointIndices.Contains(j))
                    {
                        if (startingFuel <= track[j])
                        {
                            canFinish = false;
                            indexReached = j;
                            break;
                        }

                        startingFuel -= track[j];
                    }
                    else
                    {
                        startingFuel += track[j];
                    }                    
                }

                if (canFinish)
                {
                    Console.WriteLine($"{names[i]} - fuel left {startingFuel.ToString("0.00")}");
                }
                else
                {
                    Console.WriteLine($"{names[i]} - reached {indexReached}");
                }
            }
        }
    }
}
