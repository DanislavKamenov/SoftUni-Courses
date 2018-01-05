    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace _02.Pokemon_Don_t_Go
    {
        class Program
        {
            static void Main(string[] args)
            {
                List<long> pokemon = Console.ReadLine().Split(' ').Select(long.Parse).ToList();
                long totalElement = 0;

                while (pokemon.Count > 0)
                {
                    int index = int.Parse(Console.ReadLine());
                    long element = 0;                

                    if (index < 0)
                    {
                        element = pokemon[0];                    
                        pokemon[0] = pokemon[pokemon.Count - 1];                    
                    }
                    else if (index > pokemon.Count - 1)
                    {
                        element = pokemon[pokemon.Count - 1];                    
                        pokemon[pokemon.Count - 1] = pokemon[0];
                    }
                    else
                    {
                        element = pokemon[index];
                        pokemon.RemoveAt(index);
                    }

                    pokemon = pokemon.Select(x => x <= element ? x += element : x -= element).ToList();                
                
                    totalElement += element;
                }

                Console.WriteLine(totalElement);
            }
        }
    }
