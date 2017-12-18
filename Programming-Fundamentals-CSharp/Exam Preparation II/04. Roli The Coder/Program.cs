using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Roli_The_Coder
{   
    class Program
    {
        static void Main(string[] args)
        {            
            string eventDataStr = Console.ReadLine();
            Dictionary<int, string> ids = new Dictionary<int, string>();
            Dictionary<string, HashSet<string>> people = new Dictionary<string, HashSet<string>>();

            while (eventDataStr != "Time for Code")
            {
                string[] eventData = eventDataStr.Split(new char[] {' ','\t', '\r', '\n', '\f', '\v' }, StringSplitOptions.RemoveEmptyEntries).Select(s => s.Trim()).ToArray();
                int Id = int.Parse(eventData[0].Trim());
                string eventName = string.Empty;
                string participantPattern = @"^@[A-Za-z0-9'*\-*]+$";
                List<string> participants = new List<string>();
                for (int i = 2; i < eventData.Length; i++)
                {
                    var match = Regex.Match(eventData[i], participantPattern);
                    if (match.Success)
                    {
                        participants.Add(match.ToString());
                    }
                }
                if (eventData[1].StartsWith("#"))
                {
                    eventName = string.Join("", eventData[1].Skip(1));
                    if (!ids.ContainsKey(Id))
                    {
                        ids.Add(Id, eventName);
                        people.Add(eventName, new HashSet<string>());
                        people[eventName].UnionWith(participants);
                    }
                    else if(ids.ContainsValue(eventName))
                    {
                        people[eventName].UnionWith(participants);
                    }
                    
                }                
                eventDataStr = Console.ReadLine();
            }
            foreach (var item in people.OrderByDescending(k => k.Value.Count).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{item.Key} - {item.Value.Count}");
                foreach (var list in item.Value.OrderBy(x => x))
                {
                    Console.WriteLine(list);
                }
            }
        }        
    }
}
