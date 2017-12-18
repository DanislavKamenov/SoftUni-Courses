using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _6.Fix_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = File.ReadAllLines(@"..\..\input.txt");
            var mailData = new Dictionary<string, string>();
            string name = string.Empty;
            string email = string.Empty;
            for (int i = 0; i < input.Length; i++)
            {
                if (input[i] == "stop")
                {
                    break;
                }
                if (i % 2 == 0)
                {
                    name = input[i];
                    if (!mailData.ContainsKey(name))
                    {
                        mailData[input[i]] = string.Empty;
                    }
                }
                else
                {
                    email = input[i];
                    mailData[name] = email;
                }                
            }
            File.WriteAllText(@"..\..\output.txt", string.Empty);
            File.WriteAllText(@"..\..\output.txt", string.Join($"{Environment.NewLine}", mailData.Where(d => !d.Value.EndsWith(".us") && !d.Value.EndsWith(".uk"))
                .Select(x => x.Key + " -> " + x.Value)));
        }
    }
}
