using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Rainer
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> gameField = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            List<int> originalValues = new List<int>();
            originalValues.AddRange(gameField);
            int stepCount = 0;
            int initIndex = 0;



            while (true)
            {
                if (stepCount == 0)
                {
                    initIndex = gameField.Last();
                    gameField.RemoveAt(gameField.Count - 1);
                }
                else
                {
                    initIndex = int.Parse(Console.ReadLine());
                }  

                gameField = gameField.Select(x => x -= 1).ToList();

                if (gameField.Where(x => x == 0).Any(y => y == gameField.ElementAt(initIndex)))
                {
                    Console.WriteLine(string.Join(" ", gameField));
                    Console.WriteLine(stepCount);

                    return;
                }
                else if(gameField.Where(x => x == 0).Count() > 0)
                {
                    for (int i = 0; i < gameField.Count; i++)
                    {
                        if (gameField[i] == 0)
                        {
                            gameField[i] = originalValues[i];
                        }
                    }
                }
                stepCount++;                
            }            
        }        
    }
}
