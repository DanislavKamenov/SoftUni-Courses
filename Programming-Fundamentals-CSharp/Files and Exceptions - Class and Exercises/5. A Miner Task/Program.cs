using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _03.A_Miner_Task
{
    class Program
    {
        static void Main(string[] args)
        {
            var resources = new Dictionary<string, int>();

            string[] items = File.ReadAllLines(@"..\..\input.txt");
            List<string> ore = new List<string>();
            List<int> amount = new List<int>();
            

            for (int k = 0; k < items.Length; k++)
            {
                if (items[k] == "stop")
                {
                    break;
                }               
                if (k % 2 == 0)
                {
                    ore.Add(items[k]);
                }
                else if (k % 2 != 0)
                {
                    amount.Add(int.Parse(items[k]));
                }                

            }
            for (int i = 0; i < ore.Count; i++)
            {
                if (!resources.ContainsKey(ore[i]))
                    resources.Add(ore[i], amount[i]);
                else
                    resources[ore[i]] += amount[i];
            }
            File.WriteAllText(@"..\..\output.txt", string.Empty);
            File.WriteAllText(@"..\..\output.txt", (string.Join($"{Environment.NewLine}", resources.Select(x => x.Key + " -> " + x.Value))));
        }
    }
}
