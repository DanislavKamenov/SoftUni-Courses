using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Population_Counter
{
    class Program
    {
        static void Main(string[] args)

        {
            Dictionary<string, Dictionary<string, long>> countriesPopulation = new Dictionary<string, Dictionary<string, long>>();
            //Dictionary<string, int> citiesPopulation = new Dictionary<string, int>();

            string[] command = Console.ReadLine().Split('|'); //city, country, popultion

            while (command[0] != "report")
            {
                string city = command[0];
                string country = command[1];
                int population = int.Parse(command[2]);

                if (!countriesPopulation.ContainsKey(country))
                {
                    countriesPopulation.Add(country, new Dictionary<string, long>());
                    countriesPopulation[country].Add(city, population);
                }
                else
                {
                    countriesPopulation[country].Add(city, population);
                }

                command = Console.ReadLine().Split('|');
            }

            //countriesPopulation = countriesPopulation.OrderByDescending(x => x.Value.Values.Sum()).ToDictionary(x => x.Key, x => x.Value);

            foreach (var country in countriesPopulation.OrderByDescending(x => x.Value.Values.Sum()))
            {
                Console.WriteLine($"{country.Key} (total population: {country.Value.Values.Sum()})");
                foreach (var city in country.Value.OrderByDescending(c => c.Value))
                {
                    Console.WriteLine($"=>{city.Key}: {city.Value}");
                }
            }
        }
    }
}
