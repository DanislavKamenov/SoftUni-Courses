using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.SoftUni_Karaoke
{
    class Program
    {
        static void Main(string[] args)
        {
            var participantsAwards = new SortedDictionary<string, List<string>>();
            var participantData = string.Empty;
            

            var participants = Console.ReadLine().Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries);
            var songs = Console.ReadLine().Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries);

            while ((participantData = Console.ReadLine()) != "dawn")
            {
                var performances = participantData.Split(new string[] { ", " }, StringSplitOptions.RemoveEmptyEntries);

                var participant = performances[0];
                var song = performances[1];
                var award = performances[2];

                if (participants.Contains(participant) && songs.Contains(song))
                {
                    if (!participantsAwards.ContainsKey(participant))
                    {
                        participantsAwards.Add(participant, new List<string>() { award });
                    }
                    else
                    {
                        participantsAwards[participant].Add(award);
                    }
                }
            }

            if (participantsAwards.Count == 0)
            {
                Console.WriteLine("No awards");
                return;
            }

            foreach (var participant in participantsAwards.OrderByDescending(x => x.Value.Distinct().Count()))
            {
                Console.WriteLine($"{participant.Key}: {participant.Value.Distinct().Count()} awards");
                foreach (var award in participant.Value.OrderBy(x => x).Distinct())
                {
                    Console.WriteLine($"--{award}");
                }
            }
        }
    }
}
