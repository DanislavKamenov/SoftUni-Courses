using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _02.Command_Interpreter
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> field = Console.ReadLine().Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToList();
            string command = string.Empty;

            while ((command = Console.ReadLine()) != "end")
            {
                string[] commandArgs = command.Split(' ');
                string action = commandArgs[0];
                int startIndex = 0;
                int count = 0;

                switch (action)
                {
                    case "reverse":
                        startIndex = int.Parse(commandArgs[2]);
                        count = int.Parse(commandArgs[4]);

                        if (startIndex >= 0 && startIndex <= field.Count - 1 && count >= 0 && startIndex + count - 1 <= field.Count - 1)
                        {  
                            field.Reverse(startIndex, count);
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                    case "sort":
                        startIndex = int.Parse(commandArgs[2]);
                        count = int.Parse(commandArgs[4]);

                        if (startIndex >= 0 && startIndex <= field.Count - 1 && count >= 0 && startIndex + count - 1 <= field.Count - 1)
                        {
                            var sorted = field.Skip(startIndex).Take(count).ToList();
                            field.RemoveRange(startIndex, count);
                            sorted.Sort();
                            field.InsertRange(startIndex, sorted);
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                    case "rollLeft":
                        count = int.Parse(commandArgs[1]);

                        if (count >= 0)
                        { 
                            for (int i = 0; i < count % field.Count; i++)
                            {
                                string toShift = field[0];
                                field.RemoveAt(0);
                                field.Insert(field.Count, toShift);
                            }
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                    case "rollRight":
                        count = int.Parse(commandArgs[1]);

                        if(count >= 0)
                        {                             
                            for (int i = 0; i < count % field.Count; i++)
                            {
                                string toShift = field[field.Count - 1];
                                field.RemoveAt(field.Count - 1);
                                field.Insert(0, toShift);
                            }                            
                        }
                        else
                        {
                            Console.WriteLine("Invalid input parameters.");
                        }
                        break;
                }
            }
            Console.WriteLine($"[{string.Join(", ", field)}]");
        }
    }
}
