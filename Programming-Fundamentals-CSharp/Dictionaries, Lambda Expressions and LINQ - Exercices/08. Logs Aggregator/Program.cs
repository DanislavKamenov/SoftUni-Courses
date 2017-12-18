using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Logs_Aggregator
    {
        class Program
        {
            static void Main(string[] args)
            {
                SortedDictionary<string, SortedDictionary<string, int>> sortedLogs =
                    new SortedDictionary<string, SortedDictionary<string, int>>();

                int numberOfLines = int.Parse(Console.ReadLine());

                for (int i = 0; i < numberOfLines; i++)
                {
                    string[] log = Console.ReadLine().Split(' '); //IP, name, duration
                    string ip = log[0];
                    string user = log[1];
                    int dur = int.Parse(log[2]);

                    if (!sortedLogs.ContainsKey(user))
                    {
                        sortedLogs.Add(user, new SortedDictionary<string, int>());
                        sortedLogs[user].Add(ip, dur);
                    }
                    else if (sortedLogs.ContainsKey(user) && !sortedLogs[user].ContainsKey(ip))
                    {
                        sortedLogs[user].Add(ip, dur);
                    }
                    else
                    {
                        sortedLogs[user][ip] += dur;
                    }
                }

                foreach (var user in sortedLogs)
                {
                    Console.Write($"{user.Key}: {user.Value.Values.Sum()} ");
                    StringBuilder sb = new StringBuilder();
                    foreach (var ip in user.Value)
                    {
                        sb.Append(ip.Key + ", ");
                    }
                    sb.Remove(sb.Length - 2, 2);
                    Console.WriteLine($"[{sb.ToString()}]");
                }
            }
        }
    }

