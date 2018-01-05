using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Trophon_the_Grumpy_Cat
{
    class Program
    {
        static void Main(string[] args)
        {
            var pricetags = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var entryPoint = int.Parse(Console.ReadLine());
            var type = Console.ReadLine();
            var priceType = Console.ReadLine();

            long currentSum = 0;
            long leftSum = 0;
            long rightSum = 0;

            for (int i = 0; i < pricetags.Length; i++)
            {
                if (i == entryPoint)
                {
                    leftSum = currentSum;
                    currentSum = 0;
                    continue;
                }                

                if (type == "cheap")
                {
                    if (priceType == "positive")
                    {
                        if (pricetags[i] < pricetags[entryPoint] && pricetags[i] > 0)
                        {
                            currentSum += pricetags[i];
                        }
                    }
                    else if (priceType == "negative")
                    {
                        if (pricetags[i] < pricetags[entryPoint] && pricetags[i] < 0)
                        {
                            currentSum += pricetags[i];
                        }
                    }
                    else
                    {
                        if (pricetags[i] < pricetags[entryPoint])
                        {
                            currentSum += pricetags[i];
                        }
                    }
                }
                else if (type == "expensive")
                {
                    if (priceType == "positive")
                    {
                        if (pricetags[i] >= pricetags[entryPoint] && pricetags[i] > 0)
                        {
                            currentSum += pricetags[i];
                        }
                    }
                    else if (priceType == "negative")
                    {
                        if (pricetags[i] >= pricetags[entryPoint] && pricetags[i] < 0)
                        {
                            currentSum += pricetags[i];
                        }
                    }
                    else
                    {
                        if (pricetags[i] >= pricetags[entryPoint])
                        {
                            currentSum += pricetags[i];
                        }
                    }
                }
            }
            rightSum = currentSum;
            currentSum = 0;

            if (leftSum > rightSum)
            {
                Console.WriteLine($"Left - {leftSum}");
            }
            else if (leftSum == rightSum)
            {
                Console.WriteLine($"Left - {leftSum}");
            }
            else
            {
                Console.WriteLine($"Right - {rightSum}");
            }
        }
    }
}
