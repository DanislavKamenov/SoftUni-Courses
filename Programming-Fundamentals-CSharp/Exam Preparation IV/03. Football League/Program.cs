using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Football_League
{
    class Program
    {
        static void Main(string[] args)
        {
            var teamScores = new Dictionary<string, long>();
            var teamGoals = new Dictionary<string, long>();
            string key = Regex.Escape(Console.ReadLine());            
            while (true)
            {
                string encryptedData = Console.ReadLine();
                if (encryptedData == "final")
                {
                    break;
                }
                string pattern = $@"{key}(?'teamA'.*?){key}.*?{key}(?'teamB'.*?){key}.*?(?'score'\d+:\d+)";
                Match gameData = Regex.Match(encryptedData, pattern);
                string teamA = string.Join("", gameData.Groups["teamA"].Value.Reverse()).ToUpper();
                string teamB = string.Join("", gameData.Groups["teamB"].Value.Reverse()).ToUpper();
                long[] score = gameData.Groups["score"].Value.Split(':').Select(long.Parse).ToArray();
                if (!teamGoals.ContainsKey(teamA))
                {
                    teamGoals.Add(teamA, score[0]);
                }
                else
                {
                    teamGoals[teamA] += score[0];
                }
                if (!teamGoals.ContainsKey(teamB))
                {
                    teamGoals.Add(teamB, score[1]);
                }
                else
                {
                    teamGoals[teamB] += score[1];
                }
                if (!teamScores.ContainsKey(teamA))
                {
                    teamScores.Add(teamA, 0);
                }
                if (!teamScores.ContainsKey(teamB))
                {
                    teamScores.Add(teamB, 0);
                }
                if (score[0] > score[1])
                {
                    teamScores[teamA] += 3;
                }
                else if (score[0] < score[1])
                {
                    teamScores[teamB] += 3;
                }
                else
                {
                    teamScores[teamA] += 1;
                    teamScores[teamB] += 1;
                }
            }
            int count = 1;
            Console.WriteLine("League standings:");
            foreach (var team in teamScores.OrderByDescending(p => p.Value).ThenBy(t => t.Key))
            {
                Console.WriteLine($"{count}. {team.Key} {team.Value}");
                count++;
            }
            int goalCount = 0;
            Console.WriteLine("Top 3 scored goals:");
            foreach (var team in teamGoals.OrderByDescending(g => g.Value).ThenBy(t => t.Key))
            {
                Console.WriteLine($"- {team.Key} -> {team.Value}");
                goalCount++;
                if (goalCount == 3)
                {
                    break;
                }
            }
        }
    }
}
