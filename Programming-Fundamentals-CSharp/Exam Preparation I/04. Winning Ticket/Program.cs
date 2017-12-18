using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Winning_Ticket
{
    class Program
    {
        static void Main(string[] args)
        {
            string splitter = @"\s*,\s+";
            string winCheck = @"(\@{6,}|\#{6,}|\${6,}|\^{6,})";
            string[] tickets = Regex.Split(Console.ReadLine(), splitter);

            for (int i = 0; i < tickets.Length; i++)
            {
                if (tickets[i].Length != 20)
                {
                    Console.WriteLine("invalid ticket");
                    continue;
                }
                string leftHalf = tickets[i].Substring(0, 10);
                string rightHalf = tickets[i].Substring(10);
                Match leftChecked = Regex.Match(leftHalf, winCheck);
                Match rightChecked = Regex.Match(rightHalf, winCheck);
                if (leftChecked.Success && rightChecked.Success)
                {
                    if (leftChecked.Groups[1].Value.First() == rightChecked.Groups[1].Value.First())
                    {
                        if (leftChecked.Groups[1].Value.Length == 10)
                        {
                            Console.WriteLine($"ticket \"{tickets[i]}\" - {leftChecked.Groups[1].Value.Length}{leftChecked.Groups[1].Value.First()} Jackpot!");
                        }
                        else
                        {
                            Console.WriteLine($"ticket \"{tickets[i]}\" - {leftChecked.Groups[1].Value.Length}{leftChecked.Groups[1].Value.First()}");
                        }
                    }
                    else
                    {
                        Console.WriteLine($"ticket \"{tickets[i]}\" - no match");
                    }
                }
                else
                {
                    Console.WriteLine($"ticket \"{tickets[i]}\" - no match");
                }
            }
        }
    }
}
