using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Trainlands
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = string.Empty;
            Dictionary<string, List<KeyValuePair<string, long>>> trainStats = new Dictionary<string, List<KeyValuePair<string, long>>>();



            while ((input = Console.ReadLine()) != "It's Training Men!")
            {

                if (input.Contains(" : "))
                {
                    string[] trainData = input.Split(new[] { " -> ", " : ", " = " }, StringSplitOptions.RemoveEmptyEntries);
                    string trainName = trainData[0];
                    string wagonName = trainData[1];
                    long wagonPower = long.Parse(trainData[2]);

                    if (!trainStats.ContainsKey(trainName))
                    {
                        trainStats.Add(trainName, new List<KeyValuePair<string, long>>());
                        trainStats[trainName].Add(new KeyValuePair<string, long>(wagonName, wagonPower));
                    }
                    else
                    {
                        trainStats[trainName].Add(new KeyValuePair<string, long>(wagonName, wagonPower));                        
                    }
                }
                else if (input.Contains(" = "))
                {
                    string[] trainData = input.Split(new[] { " -> ", " : ", " = " }, StringSplitOptions.RemoveEmptyEntries);
                    string masterTrain = trainData[0];
                    string copiedTrain = trainData[1];
                    if (!trainStats.ContainsKey(masterTrain))
                    {
                        trainStats.Add(masterTrain, new List<KeyValuePair<string, long>>()); 
                    } 
                        trainStats[masterTrain].Clear();
                        trainStats[masterTrain].AddRange(trainStats[copiedTrain]);                    
                }
                else
                {
                    string[] trainData = input.Split(new[] { " -> ", " : ", " = " }, StringSplitOptions.RemoveEmptyEntries);
                    string masterTrain = trainData[0];
                    string trainToDelete = trainData[1];

                    if (!trainStats.ContainsKey(masterTrain))
                    {
                        trainStats.Add(masterTrain, new List<KeyValuePair<string, long>>());                        
                    }                    
                        trainStats[masterTrain].AddRange(trainStats[trainToDelete]);                        
                        trainStats.Remove(trainToDelete);                    
                }
            }

            foreach (var train in trainStats.OrderByDescending(x => x.Value.Sum(y => y.Value)).ThenBy(x => x.Value.Count))
            {
                Console.WriteLine($"Train: {train.Key}");
                foreach (var wagon in train.Value.OrderByDescending(x => x.Value))
                {
                    Console.WriteLine($"###{wagon.Key} - {wagon.Value}");
                }    
            }
        }
    }
}
