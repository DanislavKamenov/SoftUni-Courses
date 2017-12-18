using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _02.Hornet_Comms
{
    class Program
    {
        static void Main(string[] args)
        {
            var broadcasts = new List<KeyValuePair<string, string>>();
            var messages = new List<KeyValuePair<string, string>>();            

            while (true)
            {
                string rawData = Console.ReadLine();
                if (rawData == "Hornet is Green")
                {
                    break;
                }
                string messagePattern = @"^(?'code'\d+) <-> (?'message'[A-Za-z0-9]+)$";
                string broadcastPattern = @"^(?'message'[^0-9]+) <-> (?'code'[A-Za-z0-9]+)$";
                if (Regex.IsMatch(rawData, messagePattern))
                {
                    messages.Add(GetPrivateMessage(messagePattern, rawData));                    
                }
                else if(Regex.IsMatch(rawData, broadcastPattern))
                {
                    broadcasts.Add(GetBroadcast(broadcastPattern, rawData));
                }
            }
            Console.WriteLine("Broadcasts:");
            if (broadcasts.Count > 0)
            {
                foreach (var broadcast in broadcasts)
                {
                    Console.WriteLine($"{broadcast.Key} -> {broadcast.Value}");
                }
            }
            else
            {
                Console.WriteLine("None");
            }            
            Console.WriteLine("Messages:");
            if (messages.Count > 0)
            {
                foreach (var message in messages)
                {
                    Console.WriteLine($"{message.Key} -> {message.Value}");
                }
            }
            else
            {
                Console.WriteLine("None");
            }            
        }

        static KeyValuePair<string, string> GetBroadcast(string broadcastPattern, string rawData)
        {
            KeyValuePair<string, string> broadcast = new KeyValuePair<string, string>();
            Match info = Regex.Match(rawData, broadcastPattern);
            StringBuilder message = new StringBuilder();
            for (int i = 0; i < info.Groups["code"].Length; i++)
            {
                if (char.IsLower(info.Groups["code"].Value[i]))
                {
                    message.Append(info.Groups["code"].Value[i].ToString().ToUpper());
                }
                else if (char.IsUpper(info.Groups["code"].Value[i]))
                {
                    message.Append(info.Groups["code"].Value[i].ToString().ToLower());
                }
                else
                {
                    message.Append(info.Groups["code"].Value[i]);
                }
                
            }
            broadcast = new KeyValuePair<string, string>(message.ToString(), info.Groups["message"].Value);
            return broadcast;
        }

        static KeyValuePair<string, string> GetPrivateMessage(string messagePattern, string rawData)
        {
            KeyValuePair<string, string> privateMessage = new KeyValuePair<string, string>();
            Match info = Regex.Match(rawData, messagePattern);
            privateMessage = new KeyValuePair<string, string>(string.Join("", info.Groups["code"].Value.Reverse()), info.Groups["message"].Value);            
            return privateMessage;
        }
    }
}
