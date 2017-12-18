using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Hornet_Armada
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var legionsPlusActivities = new Dictionary<string, int>();
            var typesPlusCount = new Dictionary<string, Dictionary<string, long>>();


            for (int i = 0; i < n; i++)
            {
                string rawData = Console.ReadLine();
                string[] activityAndData = Regex.Split(rawData, " = ");
                string[] nameNSoldiers = Regex.Split(activityAndData[1], " -> ");
                string[] typeNCount = Regex.Split(nameNSoldiers[1], ":");
                int activity = int.Parse(activityAndData[0]);
                string legionName = nameNSoldiers[0];
                string soldierType = typeNCount[0];
                long soldierCount = long.Parse(typeNCount[1]);

                if (!legionsPlusActivities.ContainsKey(legionName))
                {
                    legionsPlusActivities.Add(legionName, activity);
                    typesPlusCount.Add(legionName, new Dictionary<string, long>());
                    typesPlusCount[legionName].Add(soldierType, soldierCount);
                }
                else if (legionsPlusActivities.ContainsKey(legionName))
                {
                    if (legionsPlusActivities[legionName] < activity)
                    {
                        legionsPlusActivities[legionName] = activity;                        
                    }
                    if (!typesPlusCount[legionName].ContainsKey(soldierType))
                    {
                        typesPlusCount[legionName].Add(soldierType, soldierCount);
                    }
                    else
                    {
                        typesPlusCount[legionName][soldierType] += soldierCount;
                    }
                }

            }
            string[] toPrint = Console.ReadLine().Split('\\');
            if (toPrint.Length > 1)
            {
                int maxActivity = int.Parse(toPrint[0]);
                string type = toPrint[1];

                foreach (var soldier in typesPlusCount
                    .Where(legion => legion.Value.ContainsKey(type))
                    .OrderByDescending(legion => legion.Value[type]))
                {                    
                    if (legionsPlusActivities[soldier.Key] < maxActivity)
                    {
                        Console.WriteLine($"{soldier.Key} -> {typesPlusCount[soldier.Key][type]}");
                    }
                }
            }
            else
            {
                string type = toPrint[0];
                foreach (var legion in legionsPlusActivities.OrderByDescending(activity => activity.Value))
                {
                    if (typesPlusCount[legion.Key].ContainsKey(type))
                    {
                        Console.WriteLine($"{legion.Value} : {legion.Key}");
                    }
                }
            }
        }
    }
}
