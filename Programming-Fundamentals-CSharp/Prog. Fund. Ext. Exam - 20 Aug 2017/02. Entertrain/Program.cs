using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Entertrain
{
    class Program
    {
        static void Main(string[] args)
        {
            int power = int.Parse(Console.ReadLine());
            string input = string.Empty;
            List<int> wagons = new List<int>();

            while ((input = Console.ReadLine()) != "All ofboard!")
            {
                int  wagonWeight = int.Parse(input);

                wagons.Add(wagonWeight);
                int wagonSum = wagons.Sum();

                if (wagonSum > power)
                {
                    int averageWeight = wagonSum / wagons.Count;

                    int closest = wagons.Aggregate((x, y) => Math.Abs(x - averageWeight) < Math.Abs(y - averageWeight) ? x : y);

                    wagons.Remove(closest);
                }
            }

            wagons.Reverse();
            wagons.Add(power);

            Console.WriteLine(string.Join(" ", wagons));
        }
    }
}
