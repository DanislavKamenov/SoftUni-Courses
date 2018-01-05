using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Portal
{
    class Program
    {
        static void Main(string[] args)
        {
            int arraySize = int.Parse(Console.ReadLine());
            char[][] room = new char[arraySize][];
            int startColumn = 0;
            int startRow = 0;

            for (int i = 0; i < arraySize; i++)
            {
                string roomTiles = Console.ReadLine();
                room[i] = new char[roomTiles.Length];
                for (int j = 0; j < roomTiles.Length; j++)
                {                    
                    room[i][j] = roomTiles[j];
                    if (room[i][j] == 'S')
                    {
                        startColumn = j;
                        startRow = i;
                    }
                }
            }

            var direction = Console.ReadLine();

            for (int k = 0; k < direction.Length; k++)
            {
                if (direction[k] == 'U')
                {
                    startRow--;

                    if (startRow < 0)
                    {
                        startRow = room.Length - 1;
                    }
                }
                else if (direction[k] == 'D')
                {
                    startRow++;

                    if (startRow > room.Length - 1)
                    {
                        startRow = 0;
                    }
                }
                else if (direction[k] == 'L')
                {
                    startColumn--;

                    if (startColumn < 0)
                    {
                        startColumn = room[startRow].Length - 1;
                    }
                }
                else if (direction[k] == 'R')
                {
                    startColumn++;

                    if (startColumn > room[startRow].Length - 1)
                    {
                        startColumn = 0;
                    }
                }

                while (startColumn > room[startRow].Length - 1 || startColumn < 0)
                {
                    if (direction[k] == 'U')
                    {
                        startRow--;

                        if (startRow < 0)
                        {
                            startRow = room.Length - 1;
                        }
                    }
                    else if (direction[k] == 'D')
                    {
                        startRow++;

                        if (startRow > room.Length - 1)
                        {
                            startRow = 0;
                        }
                    }
                    else if (direction[k] == 'L')
                    {
                        startColumn--;

                        if (startColumn < 0)
                        {
                            startColumn = room[startRow].Length - 1;
                        }
                    }
                    else if (direction[k] == 'R')
                    {
                        startColumn++;

                        if (startColumn > room[startRow].Length - 1)
                        {
                            startColumn = 0;
                        }
                    }
                }

                if (room[startRow][startColumn] == 'E')
                {
                    Console.WriteLine($"Experiment successful. {k + 1} turns required.");
                    break;
                }
                else if (k == direction.Length - 1)
                {
                    Console.WriteLine($"Robot stuck at {startRow} {startColumn}. Experiment failed.");
                }
            }
        }
    }
}
