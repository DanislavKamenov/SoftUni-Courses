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
            var ticketData = Console.ReadLine().Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);            
            var winPattern = @"[@]{6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}";

            for (int i = 0; i < ticketData.Length; i++)
            {
                if (ticketData[i].Length != 20)
                {
                    Console.WriteLine("invalid ticket");
                    continue;
                }

                var currentTicket = ticketData[i];
                var leftHalf = string.Join("", ticketData[i].Take(10));
                var rightHalf = string.Join("", ticketData[i].Skip(10));
                var leftMacth = Regex.Match(leftHalf, winPattern);
                var rightMatch = Regex.Match(rightHalf, winPattern);

                if (leftMacth.Success && rightMatch.Success)
                {
                    if (leftMacth.Length == 10 && rightMatch.Length == 10 && leftMacth.Value.First() == rightMatch.Value.First())
                    {
                        Console.WriteLine($"ticket \"{currentTicket}\" - 10{leftMacth.Value.First()} Jackpot!");
                    }
                    else if (leftMacth.Value.First() == rightMatch.Value.First())
                    {
                        Console.WriteLine($"ticket \"{currentTicket}\" - {Math.Min(leftMacth.Length, rightMatch.Length)}{leftMacth.Value.First()}");
                    }
                }
                else
                {
                    Console.WriteLine($"ticket \"{currentTicket}\" - no match");
                }
            }
        }
    }
}
