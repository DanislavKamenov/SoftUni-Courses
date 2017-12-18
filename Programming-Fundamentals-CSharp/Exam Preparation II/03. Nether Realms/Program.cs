using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Nether_Realms
{    
    class Program
    {
        static void Main(string[] args)
        {
            string splitter = @"\s*,\s*";
            string[] names = Regex.Split(Console.ReadLine(), splitter);
            string hpPattern = @"([0-9+\-\*\/\.]+)";
            string dmgPattern = @"-?\d+\.?\d*";
            string multiplyerPattern = @"[^*\/]+";
            SortedDictionary<string, Dictionary<string, double>> demonBook = new SortedDictionary<string, Dictionary<string, double>>();
            foreach (var name in names)
            {
                string hpMatch = Regex.Replace(name, hpPattern, "");
                int hpStats = 0;
                for (int i = 0; i < hpMatch.Length; i++)
                {
                    hpStats += hpMatch[i];
                }
                string[] dmgMatch = string.Join(" ", Regex.Matches(name, dmgPattern).Cast<Match>()).Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                string multpliersMatch = Regex.Replace(name, multiplyerPattern, "");
                double dmgStats = 0;
                if (dmgMatch.Length > 0)
                {
                    for (int i = 0; i < dmgMatch.Length; i++)
                    {

                        dmgStats += double.Parse(dmgMatch[i]);
                    }
                    for (int k = 0; k < multpliersMatch.Length; k++)
                    {
                        switch (multpliersMatch[k])
                        {
                            case '*':
                                dmgStats *= 2;
                                break;
                            case '/':
                                dmgStats /= 2;
                                break;
                        }
                    }
                }
                else
                {
                    dmgStats = 0;
                }               
                
                demonBook.Add(name, new Dictionary<string, double>());
                demonBook[name].Add("health", hpStats);
                demonBook[name].Add("damage", dmgStats);
            }
            foreach (var demon in demonBook)
            {
                Console.Write($"{demon.Key} - ");
                foreach (var stat in demon.Value.Distinct())
                {
                    if (stat.Key == "health")
                    {
                        Console.Write($"{stat.Value} {stat.Key}, ");
                    }
                    
                    if (stat.Key == "damage")
                    {
                        Console.Write($"{stat.Value:F2} {stat.Key}");
                    }
                }
                Console.WriteLine();
            }
        }
    }
}
