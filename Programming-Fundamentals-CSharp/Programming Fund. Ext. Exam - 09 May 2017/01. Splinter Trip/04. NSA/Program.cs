using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.NSA
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> registry = new Dictionary<string, Dictionary<string, int>>();

            string rawData = string.Empty;

            while ((rawData = Console.ReadLine()) != "quit")
            {
                string[] spyData = rawData.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);
                string country = spyData[0];
                string spy = spyData[1];
                int daysInService = int.Parse(spyData[2]);

                if (!registry.ContainsKey(country))
                {
                    registry.Add(country, new Dictionary<string, int>() { { spy, daysInService } });
                }
                else
                {
                    if (!registry[country].ContainsKey(spy))
                    {
                        registry[country].Add(spy, daysInService);
                    }
                    else
                    {
                        registry[country][spy] = daysInService;
                    }
                }
            }

            foreach (var country in registry.OrderByDescending(x => x.Value.Count))
            {
                Console.WriteLine($"Country: {country.Key}");
                foreach (var spy in country.Value.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"**{spy.Key} : {spy.Value}");
                }
            }
        }
    }
}
