using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.A_Miner_Task
{
    class Program
    {
        static void Main(string[] args)
        {
            var resources = new Dictionary<string, int>();

            string items = Console.ReadLine();
            List<string> ore = new List<string>();
            List<int> amount = new List<int>();
            int count = 0;
            while (items != "stop")
            {
                count++;
                if (count % 2 != 0)
                {
                    ore.Add(items);
                }
                else if (count % 2 == 0)
                {
                    amount.Add(int.Parse(items));
                }
                items = Console.ReadLine();
            }
            for (int i = 0; i < ore.Count; i++)
            {
                if (!resources.ContainsKey(ore[i]))
                    resources.Add(ore[i], amount[i]);
                else
                    resources[ore[i]] += amount[i];
            }
            Console.WriteLine(string.Join("\n", resources.Select(x => x.Key + " -> " + x.Value)));
        }
    }
}
