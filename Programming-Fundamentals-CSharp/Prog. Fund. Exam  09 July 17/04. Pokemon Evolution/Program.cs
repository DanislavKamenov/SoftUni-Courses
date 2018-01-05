using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Pokemon_Evolution
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Pokemon> pokemons = new List<Pokemon>();
            string rawData = string.Empty;

            while ((rawData = Console.ReadLine()) != "wubbalubbadubdub")
            {
               string[] pokemonArgs = rawData.Split(new[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);
                if (pokemonArgs.Length > 1)
                {
                    string name = pokemonArgs[0];
                    string evolution = pokemonArgs[1];
                    int index = int.Parse(pokemonArgs[2]);
                    KeyValuePair<string, int> evolutionData = new KeyValuePair<string, int>(evolution, index);
                    Pokemon pokemon = new Pokemon();
                    pokemon.Name = name;
                    pokemon.Evolutions = new List<KeyValuePair<string, int>>();
                    pokemon.Evolutions.Add(evolutionData);
                    

                    if (!pokemons.Exists(x => x.Name == name))
                    {
                        pokemons.Add(pokemon);
                    }
                    else
                    {
                        pokemons.Find(x => x.Name == pokemon.Name).Evolutions.Add(evolutionData);
                    }  
                }
                else
                {
                    string name = pokemonArgs[0];

                    if (pokemons.Exists(x => x.Name == name))
                    {
                        Console.WriteLine($"# {name}");
                        foreach (var evolution in pokemons.Find(x => x.Name == name).Evolutions)
                        {
                            Console.WriteLine($"{evolution.Key} <-> {evolution.Value}");
                        }
                    }
                }
            }

            foreach (var pokemon in pokemons)
            {
                Console.WriteLine($"# {pokemon.Name}");
                foreach (var evolution in pokemon.Evolutions.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"{evolution.Key} <-> {evolution.Value}");
                }
            }

        }
    }

    class Pokemon
    {
        public string Name { get; set; }
        public List<KeyValuePair<string, int>> Evolutions { get; set; }
    }
}
