using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Icarus
{
    class Program
    {
        static void Main(string[] args)
        {
            var plane = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            var startPosition = int.Parse(Console.ReadLine());
            var command = string.Empty;
            var damage = 1;
            var currentPosition = startPosition;

            while ((command = Console.ReadLine()) != "Supernova")
            {
                var directionArgs = command.Split(' ');
                var direction = directionArgs[0];                
                var steps = int.Parse(directionArgs[1]);    

                for (int i = 0; i < steps; i++)
                {
                    if (direction == "left")
                    {
                        currentPosition -= 1;
                    }
                    else
                    {
                        currentPosition += 1;
                    }                    

                    if (currentPosition > plane.Count - 1)
                    {
                        currentPosition = 0;                        
                        damage++;
                        plane[currentPosition] -= damage;
                    }
                    else if (currentPosition < 0)
                    {
                        currentPosition = plane.Count - 1;                       
                        damage++;
                        plane[currentPosition] -= damage;
                    }
                    else
                    {
                        plane[currentPosition] -= damage;
                    }
                }
            }
            Console.WriteLine(string.Join(" ", plane));
        }
    }
}
