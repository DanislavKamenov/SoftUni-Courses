using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Worms_World_Party
{
    class Program
    {
        static void Main(string[] args)
        {
            var teams = new Dictionary<string, Dictionary<string, decimal>>();
            var appearedWorms = new List<string>();
            var teamData = string.Empty;

            while ((teamData = Console.ReadLine()) != "quit")
            {
                var teamArgs = teamData.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);
                var wormName = teamArgs[0];
                var teamName = teamArgs[1];
                var wormScore = decimal.Parse(teamArgs[2]);

                if (!appearedWorms.Contains(wormName))
                {
                    if (!teams.ContainsKey(teamName))
                    {
                        teams.Add(teamName, new Dictionary<string, decimal>() { { wormName, wormScore } });
                    }
                    else
                    {
                        teams[teamName].Add(wormName, wormScore);
                    }
                }

                appearedWorms.Add(wormName);
            }

            long teamCount = 1;

            foreach (var team in teams.OrderByDescending(x => x.Value.Values.Sum()).ThenByDescending(y => y.Value.Values.Average()))
            {               
                Console.WriteLine($"{teamCount}. Team: {team.Key} - {team.Value.Values.Sum()}");

                foreach (var worm in team.Value.OrderByDescending(v => v.Value))
                {
                    Console.WriteLine($"###{worm.Key} : {worm.Value}");
                }

                teamCount++;
            }
        }
    }
}
