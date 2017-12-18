using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.User_Logs
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedDictionary<string, Dictionary<string, int>> users = new SortedDictionary<string, Dictionary<string, int>>();

            string[] rawData = Console.ReadLine()
                .Split(new string[] { "IP=", "message=", "user=", " " }, StringSplitOptions.RemoveEmptyEntries)
                .ToArray();          


            while (rawData[0] != "end")
            {
                int count = 0;
                if (!users.ContainsKey(rawData[2]))
                {
                    users.Add(rawData[2], new Dictionary<string, int>());
                    users[rawData[2]].Add(rawData[0], +1);

                }
                else if (users.ContainsKey(rawData[2]))
                {
                    count++;
                    if (!users[rawData[2]].ContainsKey(rawData[0]))
                    {
                        users[rawData[2]].Add(rawData[0], 1);
                    }
                    else if (users[rawData[2]].ContainsKey(rawData[0]))
                    {
                        users[rawData[2]][rawData[0]]++;
                    }                    
                                    
                }
               
                rawData = Console.ReadLine()
                .Split(new string[] { "IP=", "message=", "user=", " " }, StringSplitOptions.RemoveEmptyEntries)
                .ToArray();
            }
            foreach (var pair in users)
            {
                Console.WriteLine($"{pair.Key}: ");
                StringBuilder sb = new StringBuilder();
                foreach (var innerPair in pair.Value)
                {
                    sb.Append(innerPair.Key + " => ").Append(innerPair.Value + ", ");                    
                }
                sb.Remove(sb.Length - 2, 2);
                sb.Append(".");
                Console.WriteLine(sb.ToString());
            }
        }
    }
}
