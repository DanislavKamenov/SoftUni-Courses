using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Vapor_Store
{
    class Program
    {
        static void Main(string[] args)
        {
            var balance = double.Parse(Console.ReadLine());
            var balanceTotal = balance;

            for (int i = 0; balance >= 0; i++)
            {
                var game = Console.ReadLine();

                switch (game)
                {
                    case "OutFall 4":
                        balance -= 39.99;
                        if (balance > 0)
                            Console.WriteLine("Bought OutFall 4");
                        else if (balance == 0)
                        {
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        else if (balance < 0)
                        {
                            Console.WriteLine("Too Expensive");
                            balance += 39.99;
                        }
                        break;
                    case "CS: OG":
                        balance -= 15.99;
                        if (balance > 0)
                            Console.WriteLine("Bought CS: OG");
                        else if (balance == 0)
                        {
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        else if (balance < 0)
                        {
                            Console.WriteLine("Too Expensive");
                            balance += 15.99;
                        }
                        break;
                    case "Zplinter Zell":
                        balance -= 19.99;
                        if (balance > 0)
                            Console.WriteLine("Bought Zplinter Zell");
                        else if (balance == 0)
                        {
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        else if (balance < 0)
                        {
                            Console.WriteLine("Too Expensive");
                            balance += 19.99;
                        }
                        break;
                    case "Honored 2":                        
                        balance -= 59.99;
                        if (balance > 0)
                            Console.WriteLine("Bought Honored 2");
                        else if (balance == 0)
                        {
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        else if (balance < 0)
                        {
                            Console.WriteLine("Too Expensive");
                            balance += 59.99;
                        }
                        break;
                    case "RoverWatch":                        
                        balance -= 29.99;
                        if (balance > 0)
                            Console.WriteLine("Bought RoverWatch");
                        else if (balance == 0)
                        {
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        else if (balance < 0)
                        {
                            Console.WriteLine("Too Expensive");
                            balance += 29.99;
                        }
                        break;
                    case "RoverWatch Origins Edition":
                        balance -= 39.99;
                        if (balance > 0)
                            Console.WriteLine("Bought RoverWatch Origins Edition");
                        else if (balance == 0)
                        {
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        else if (balance < 0)
                        {
                            Console.WriteLine("Too Expensive");
                            balance += 39.99;
                        }
                        break;
                    case "Game Time":
                        Console.WriteLine($"Total spent: ${balanceTotal - balance:f2}. Remaining: ${balance:f2}");
                        return;
                    default:
                        Console.WriteLine("Not Found");
                        break;
                }
            }
        }
    }
}
