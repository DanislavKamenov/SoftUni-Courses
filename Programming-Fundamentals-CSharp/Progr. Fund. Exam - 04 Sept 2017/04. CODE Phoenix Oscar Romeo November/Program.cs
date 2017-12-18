using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.CODE_Phoenix_Oscar_Romeo_November
{
    class Program
    {
        static void Main(string[] args)
        {   
            string squadData = string.Empty;
            Dictionary<string, List<string>> squads = new Dictionary<string, List<string>>();

            while ((squadData = Console.ReadLine()) != "Blaze it!")
            {
                string[] squad = squadData.Split(new char[] { ' ', '-', '>' }, StringSplitOptions.RemoveEmptyEntries);
                string creature = squad[0];
                string squadMate = squad[1];

                if (!squads.ContainsKey(creature))
                {
                    squads.Add(creature, new List<string>());
                    squads[creature].Add(squadMate);
                }
                else if (squads.Keys.First(x => x == creature) != squadMate  && !squads[creature].Contains(squadMate))
                {
                    squads[creature].Add(squadMate);
                }
            }
            
            foreach (var creacture in squads.OrderByDescending(x => x.Value.Where(y => squads.ContainsKey(y) ? !squads[y].Contains(x.Key) : true).Count()))
            {
                var test = creacture.Value.Where(x => squads.ContainsKey(x) ? !squads[x].Contains(creacture.Key) : true).ToArray();
                Console.WriteLine($"{creacture.Key} : {creacture.Value.Where(x => squads.ContainsKey(x) ? !squads[x].Contains(creacture.Key) : true).Count()}");
            }
        }
    }
}
