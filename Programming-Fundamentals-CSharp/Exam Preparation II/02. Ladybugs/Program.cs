using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Ladybugs
{
    class Program
    {
        static void Main(string[] args)
        {
            var fieldSize = int.Parse(Console.ReadLine());
            var field = new List<int>();
            var initialPositions = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var command = string.Empty;

            for (int i = 0; i < fieldSize; i++)
            {
                if (initialPositions.Contains(i))
                {
                    field.Add(1);
                }
                else
                {
                    field.Add(0);
                }
            }

            while ((command = Console.ReadLine()) != "end")
            {
                var commandArgs = command.Split(' ');
                var ladyBugPosition = int.Parse(commandArgs[0]);
                var direction = commandArgs[1];
                var steps = int.Parse(commandArgs[2]);

                if (direction == "left")
                {
                    steps *= -1;
                }

                if (ladyBugPosition >= 0 && ladyBugPosition < field.Count && field[ladyBugPosition] == 1 && steps != 0)
                {
                    field[ladyBugPosition] = 0;
                    var flyLength = ladyBugPosition + steps;
                    var isFlyingInField = true;

                    while (isFlyingInField == true)
                    {
                        if (flyLength >= 0 && flyLength < field.Count)
                        {
                            if (field[flyLength] == 0)
                            {
                                field[flyLength] = 1;
                                isFlyingInField = false;
                            }
                            else
                            {
                                flyLength += steps;
                            }
                        }
                        else
                        {
                            isFlyingInField = false;
                        }
                    }
                }                
            }
            Console.WriteLine(string.Join(" ", field));
            //Console.WriteLine(int.MaxValue);
        }
    }
}
