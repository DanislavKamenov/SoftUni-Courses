using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Сръбско_Unleashed
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> mats = new Dictionary<string, int>();
            SortedDictionary<string, int> junk = new SortedDictionary<string, int>();
            ObtainLegendaries(mats, junk);

            if (mats["shards"] >= 250)
            {
                Console.WriteLine("Shadowmourne obtained!");
                mats["shards"] -= 250;
            }
            else if (mats["fragments"] >= 250)
            {
                Console.WriteLine("Valanyr obtained!");
                mats["fragments"] -= 250;
            }
            else if (mats["motes"] >= 250)
            {
                Console.WriteLine("Dragonwrath obtained!");
                mats["motes"] -= 250;
            }

            foreach (var material in mats.OrderByDescending(m => m.Value).ThenBy(a => a.Key))
            {
                Console.WriteLine($"{material.Key}: {material.Value}");
            }
            foreach (var item in junk)
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }
        }

        static void ObtainLegendaries(Dictionary<string, int> mats, SortedDictionary<string, int> junk)
        {
            mats["shards"] = 0;
            mats["fragments"] = 0;
            mats["motes"] = 0;

            while (true)
            {
                string[] loot = Console.ReadLine().ToLower().Split(' ');
                for (int i = 1; i < loot.Length; i += 2)
                {
                    if (loot[i] == "shards" || loot[i] == "fragments" || loot[i] == "motes")
                    {
                        mats[loot[i]] += int.Parse(loot[i - 1]);
                        if (mats["shards"] >= 250) return;
                        if (mats["fragments"] >= 250) return;
                        if (mats["motes"] >= 250) return;
                    }

                    if (!junk.ContainsKey(loot[i]) && loot[i] != "shards" && loot[i] != "fragments" && loot[i] != "motes")
                    {
                        junk.Add(loot[i], int.Parse(loot[i - 1]));
                    }
                    else if (loot[i] != "shards" && loot[i] != "fragments" && loot[i] != "motes")
                    {
                        junk[loot[i]] += int.Parse(loot[i - 1]);
                    }
                }
            }
        }
    }
}
