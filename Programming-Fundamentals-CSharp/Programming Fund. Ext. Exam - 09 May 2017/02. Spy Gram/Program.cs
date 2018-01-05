using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _02.Spy_Gram
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedDictionary<string, List<string>> pendingMessages = new SortedDictionary<string, List<string>>();

            string privateKey = Console.ReadLine();
            string message = string.Empty;            

            while ((message = Console.ReadLine()) != "END")
            {   
                string[] messageArgs = message.Split(' ');
                string pattern = @"^TO: [^a-z]+; MESSAGE: .+;$";

                if (Regex.IsMatch(message, pattern))
                {                    
                    string name = messageArgs[1];                    
                    string encryptedMessage = string.Empty;
                    string encryptionString = string.Empty;

                    for (int j = 0; j < message.Length / privateKey.Length + 1; j++)
                    {
                        encryptionString += privateKey;
                    }

                    for (int i = 0; i < message.Length; i++)
                    {
                        int encryptionNum = int.Parse(encryptionString[i].ToString());                        
                        string currentLetter = ((char)((message[i]) + encryptionNum)).ToString();
                        encryptedMessage += currentLetter;
                    }

                    if (!pendingMessages.ContainsKey(name))
                    {
                        pendingMessages.Add(name, new List<string>() {encryptedMessage});
                    }
                    else
                    {
                        pendingMessages[name].Add(encryptedMessage);
                    }
                }
            }

            foreach (var encryptedMessages in pendingMessages)
            {
                foreach (var encryptedMessage in encryptedMessages.Value)
                {
                    Console.WriteLine(encryptedMessage);
                }                
            }
        }
    }
}
