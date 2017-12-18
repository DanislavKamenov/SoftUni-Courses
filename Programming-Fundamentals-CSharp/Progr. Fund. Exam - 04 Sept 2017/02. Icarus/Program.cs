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
            List<int> planes = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int startPos = int.Parse(Console.ReadLine());
            var inputLine = string.Empty;
            int damage = 1;
            int lastPos = 0;
            int testCount = 0;
            bool changePos = false;

            while ((inputLine = Console.ReadLine()) != "Supernova")
            {
                string[] directonData = inputLine.Split(' ');
                string direction = directonData[0];
                int steps = int.Parse(directonData[1]);


                switch (direction)
                {
                    case "right":
                        if (changePos)
                        {
                            startPos = lastPos;
                        }

                        changePos = true;

                        for (int i = startPos; i < startPos + steps; i++)
                        {
                            if (i >= planes.Count - 1)
                            {
                                steps += startPos - (planes.Count - 1);
                                startPos = -1;
                                i = - 1;
                                damage++;                                
                            }
                            if (planes[i + 1] > 0 && planes[i + 1] < damage)
                            {
                                planes[i + 1] = 0;
                            }
                            else if (planes[i + 1] > 0)
                            {
                                planes[i + 1] -= damage;
                            }

                            testCount++;
                            lastPos = i + 1;
                        }                        
                        break;
                    case "left":
                        if (changePos)
                        {
                            startPos = lastPos;
                        }

                        changePos = true;

                        for (int i = startPos; i > startPos - steps; i--)
                        {
                            if (i <= 0)
                            {
                                steps = (planes.Count - 1) - startPos + 1;
                                startPos = planes.Count;
                                i = planes.Count;
                                damage++;
                            }
                            if (planes[i - 1] > 0 && planes[i - 1] < damage)
                            {
                                planes[i - 1] = 0;
                            }
                            else if (planes[i - 1] > 0)
                            {
                                planes[i - 1] -= damage;
                            }

                            testCount++;
                            lastPos = i - 1;
                        }
                        
                        break;
                }
            }
            Console.WriteLine(string.Join(" " , planes));
        }
    }
}
