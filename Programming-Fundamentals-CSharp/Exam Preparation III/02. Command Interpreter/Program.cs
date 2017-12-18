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
            List<string> manipulate = new List<string>(Console.ReadLine().Split(new char[] { ' ', '\r', 'n', '\t', '\f', '\v' }, StringSplitOptions.RemoveEmptyEntries));
            string[] commandLine = Console.ReadLine().Split(' ');

            while (commandLine[0] != "end")
            {
                int start = 0;
                int count = 0;
                long end = 0;
                if (commandLine[0] == "reverse" || commandLine[0] == "sort")
                {
                    start = int.Parse(commandLine[2]);
                    count = int.Parse(commandLine[4]);
                    end = count + start;
                    if (commandLine[2] == string.Empty || commandLine[4] == string.Empty)
                    {
                        Console.WriteLine("Invalid input parameters.");
                        commandLine = Console.ReadLine().Split(' ');
                        continue;
                    }                    
                }
                else if (commandLine[0] == "rollLeft" || commandLine[0] == "rollRight")
                {
                    count = int.Parse(commandLine[1]);
                    if (commandLine[1] == string.Empty)
                    {
                        Console.WriteLine("Invalid input parameters.");
                        commandLine = Console.ReadLine().Split(' ');
                        continue;
                    }                    
                } 
                switch (commandLine[0])
                {
                    case "reverse":                          
                        if (start < 0 || start > manipulate.Count - 1 || count < 0 || count > manipulate.Count - 1 || end > manipulate.Count - 1)
                        {
                            Console.WriteLine("Invalid input parameters.");
                            break;
                        }
                        else
                        {
                            manipulate.Reverse(start, count);
                        }
                        break;
                    case "sort":                       
                        if (start < 0 || start > manipulate.Count - 1 || count < 0 || count > manipulate.Count - 1 || end > manipulate.Count - 1)
                        {
                            Console.WriteLine("Invalid input parameters.");
                            break;
                        }
                        List<string> toSort = new List<string>();
                        for (int i = 0; i < end; i++)
                        {
                            toSort.Add(manipulate[start + i]);
                        }
                        toSort.Sort();
                        manipulate.RemoveRange(start, count);
                        manipulate.InsertRange(start, toSort);
                        break;
                    case "rollRight":                        
                        for (int i = 0; i < count; i++)
                        {
                            string toShift = manipulate[manipulate.Count - 1];
                            manipulate.RemoveAt(manipulate.Count - 1);
                            manipulate.Insert(0, toShift);
                        }
                        break;
                    case "rollLeft":                        
                        for (int i = 0; i < count; i++)
                        {
                            string toShift = manipulate[0];
                            manipulate.RemoveAt(0);
                            manipulate.Insert(manipulate.Count, toShift);
                        }
                        break;
                }
                commandLine = Console.ReadLine().Split(' ');

            }
            Console.WriteLine($"[{string.Join(", ", manipulate)}]");
        }
    }
}
