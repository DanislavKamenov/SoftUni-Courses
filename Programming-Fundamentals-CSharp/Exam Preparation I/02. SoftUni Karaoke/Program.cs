using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _02.SoftUni_Karaoke
{
    class Program
    {
        static void Main(string[] args)
        {
            string splitter = @",\s+";
            string[] participants = Regex.Split(Console.ReadLine(), splitter);
            string[] songs = Regex.Split(Console.ReadLine(), splitter);
            string[] performances = Regex.Split(Console.ReadLine(), splitter);
            Dictionary<string, HashSet<string>> participantsAwards = new Dictionary<string, HashSet<string>>();

            while (performances[0] != "dawn")
            {
                string name = performances[0];
                string song = performances[1];
                string reward = performances[2];
                if (participants.Contains(name))
                {
                    if (songs.Contains(song))
                    {
                        if (!participantsAwards.ContainsKey(name))
                        {
                            participantsAwards.Add(name, new HashSet<string>() { reward });
                        }
                        else
                        {
                            participantsAwards[name].Add(reward);
                        }
                    }
                }
                performances = Regex.Split(Console.ReadLine(), splitter);
            }

            if (participantsAwards.Count > 0)
            {
                foreach (var person in participantsAwards.OrderByDescending(a => a.Value.Count).ThenBy(n => n.Key))
                {
                    Console.WriteLine($"{person.Key}: {person.Value.Count} awards");
                    foreach (var reward in person.Value.OrderBy(x => x))
                    {
                        Console.WriteLine($"--{reward}");
                        break;
                    }
                }
            }
            else
            {
                Console.WriteLine("No awards");
            }
        }
    }
}
