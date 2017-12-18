using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.AnonymousCache
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            List<DataSet> sets = new List<DataSet>();
            Dictionary<string, Dictionary<string, long>> cache = new Dictionary<string, Dictionary<string, long>>();
            while (true)
            {
                if (input == "thetinggoesskrra")
                {
                    break;
                }

                var rawData = input.Split(new char[] { ' ', '-', '>', '|' }, StringSplitOptions.RemoveEmptyEntries);
                if (rawData.Length == 0)
                {
                    break;
                }

                if (rawData.Length == 1)
                {
                    DataSet dataSet = new DataSet()
                    {
                        Name = rawData[0],
                        Keys = new List<string>(),
                        Sizes = new List<long>()
                    };

                    sets.Add(dataSet);
                }
                else
                {
                    string dataKey = rawData[0];
                    int dataSize = int.Parse(rawData[1]);
                    string dataSet = rawData[2];

                    if (sets.Exists(x => x.Name == dataSet))
                    {
                        sets.Find(x => x.Name == dataSet).Keys.Add(dataKey);
                        sets.Find(x => x.Name == dataSet).Sizes.Add(dataSize);

                    }
                    else
                    {
                        if (!cache.ContainsKey(dataSet))
                        {
                            cache.Add(dataSet, new Dictionary<string, long>() { { dataKey, dataSize } });
                        }
                        else
                        {
                            cache[dataSet].Add(dataKey, dataSize);
                        }
                                      
                    }
                }                
                input = Console.ReadLine();
            }

            if (cache.Count > 0)
            {
                foreach (var item in cache)
                {
                    if (sets.Exists(x => x.Name == item.Key))
                    {
                        sets.Find(x => x.Name == item.Key).Keys.AddRange(item.Value.Keys);
                        sets.Find(x => x.Name == item.Key).Sizes.AddRange(item.Value.Values);
                    }
                }
            }

            if (sets.Count > 0)
            {
                var biggestSet = sets.OrderByDescending(x => x.SizesSum()).First();

                Console.WriteLine("Data Set: " + biggestSet.Name + ", " + "Total Size: " + biggestSet.SizesSum());
                foreach (var key in biggestSet.Keys)
                {
                    Console.WriteLine("$." + key);
                }
            }  
        }
    }

    class DataSet
    {
        public string Name { get; set; }
        public List<string> Keys { get; set; }
        public List<long> Sizes { get; set; }
        public long SizesSum()
        {
            long sum = Sizes.Sum();

            return sum;
        }
    }
}
