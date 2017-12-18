using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Phonebook_Upgrade
{
    class Program
    {
        static void Main(string[] args)
        {
            var namesAndNumbers = new Dictionary<string, string>();

            string[] command = Console.ReadLine().Split(' ');
            while (command[0] != "END")
            {
                string value = string.Empty;
                if (command[0] == "A")
                {
                    if (namesAndNumbers.ContainsKey(command[1]))
                    {
                        namesAndNumbers[command[1]] = command[2];
                    }
                    else
                    {
                        namesAndNumbers.Add(command[1], command[2]);
                    }
                }
                else if (command[0] == "ListAll")
                {                   
                    Console.WriteLine(string.Join("\n", namesAndNumbers.Select(x => x.Key + " -> " + x.Value)));
                }

                if (command[0] == "S" && namesAndNumbers.TryGetValue(command[1], out value))
                {
                    Console.WriteLine(command[1] + " -> " + value);
                }
                else if (command[0] == "S" && value == string.Empty)
                {
                    Console.WriteLine($"Contact {command[1]} does not exist.");
                }
                command = Console.ReadLine().Split(' ');
            }
        }
    }
}
