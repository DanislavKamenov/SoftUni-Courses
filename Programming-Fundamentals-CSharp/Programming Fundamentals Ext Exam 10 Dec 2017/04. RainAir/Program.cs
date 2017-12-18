using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.RainAir
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<string>> customersNflights = new Dictionary<string, List<string>>();
            string flightData = string.Empty;

            while ((flightData = Console.ReadLine()) != "I believe I can fly!")
            {
                if (!flightData.Contains(" = "))
                {
                    string[] flightArgs = flightData.Split(' ');
                    string passanger = flightArgs[0];
                    string[] flights = flightArgs.Skip(1).ToArray();

                    if (!customersNflights.ContainsKey(passanger))
                    {
                        customersNflights.Add(passanger, new List<string>());                        
                    }
                    customersNflights[passanger].AddRange(flights);
                }
                else
                {
                    string[] flightArgs = flightData.Split(new[] { " = " }, StringSplitOptions.RemoveEmptyEntries);
                    string masterPassanger = flightArgs[0];
                    string passangerToCopy = flightArgs[1];

                    customersNflights[masterPassanger].Clear();
                    customersNflights[masterPassanger].AddRange(customersNflights[passangerToCopy]);
                }
            }

            foreach (var customer in customersNflights.OrderByDescending(x => x.Value.Count).ThenBy(y => y.Key))
            {
                Console.WriteLine($"#{customer.Key} ::: {string.Join(", ", customer.Value.OrderBy(x => int.Parse(x)))}");
            }
        }
    }
}
