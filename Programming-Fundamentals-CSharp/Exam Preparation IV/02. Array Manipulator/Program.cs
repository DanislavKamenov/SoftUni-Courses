using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Array_Manipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            string commandLine = Console.ReadLine();

            while (true)
            {
                if (commandLine == "end")
                {
                    break;
                }
                string[] command = commandLine.Split(' ');
                string task = command[0];                
                switch (task)
                {
                    case "exchange":
                        int index = int.Parse(command[1]);
                        array = ArrayExchange(array, index);
                        break;
                    case "max":
                        if (command[1] == "even")
                        {
                            MaxEven(array);
                        }
                        else
                        {
                            MaxOdd(array);
                        }
                        break;
                    case "min":
                        if (command[1] == "even")
                        {
                            MinEven(array);
                        }
                        else
                        {
                            MinOdd(array);
                        }
                        break;
                    case "first":
                        int count = int.Parse(command[1]);
                        if (command[2] == "even")
                        {
                            FirstEven(array, count);
                        }
                        else
                        {
                            FirstOdd(array, count);
                        }
                        break;
                    case "last":
                        count = int.Parse(command[1]);
                        if (command[2] == "even")
                        {
                            LastEven(array, count);
                        }
                        else
                        {
                            LastOdd(array, count);
                        }
                        break;                    
                }
                commandLine = Console.ReadLine();
            }
            Console.WriteLine($"[{string.Join(", ", array)}]");
        }

        static void LastOdd(List<int> array, int count)
        {
            int[] odd = array.Where(x => (x % 2) != 0).ToArray();
            if (count > array.Count)
            {
                Console.WriteLine("Invalid count");
            }
            else
            {
                Console.WriteLine($"[{string.Join(", ", odd.Reverse().Take(count).Reverse())}]");
            }
        }

        static void LastEven(List<int> array, int count)
        {
            int[] even = array.Where(x => (x % 2) == 0).ToArray();
            if (count > array.Count)
            {
                Console.WriteLine("Invalid count");
            }
            else
            {                
                Console.WriteLine($"[{string.Join(", ", even.Reverse().Take(count).Reverse())}]");
            }            
        }

        static void FirstOdd(List<int> array, int count)
        {
            if (count > array.Count)
            {
                Console.WriteLine("Invalid count");
            }
            else
            {
                int[] odd = array.Where(x => (x % 2) != 0).ToArray();
                Console.WriteLine($"[{string.Join(", ", odd.Take(count))}]");
            }            
        }

        static void FirstEven(List<int> array, int count)
        {
            if (count > array.Count)
            {
                Console.WriteLine("Invalid count");
            }
            else
            {
                int[] even = array.Where(x => (x % 2) == 0).ToArray();
                Console.WriteLine($"[{string.Join(", ", even.Take(count))}]");
            }            
        }

        static void MinOdd(List<int> array)
        {
            int[] minOdd = array.Where(x => (x % 2) != 0).ToArray();
            if (minOdd.Length > 0)
            {
                Console.WriteLine(array.LastIndexOf(array.Where(x => (x % 2) != 0).Min()));
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }

        static void MinEven(List<int> array)
        {
            int[] minEven = array.Where(x => (x % 2) == 0).ToArray();
            if (minEven.Length > 0)
            {
                Console.WriteLine(array.LastIndexOf(array.Where(x => (x % 2) == 0).Min()));
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }

        static void MaxOdd(List<int> array)
        {
            int[] maxOdd = array.Where(x => (x % 2) != 0).ToArray();
            if (maxOdd.Length > 0)
            {
                Console.WriteLine(array.LastIndexOf(array.Where(x => (x % 2) != 0).Max()));
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }

        static void MaxEven(List<int> array)
        {
            int[] maxEven = array.Where(x => (x % 2) == 0).ToArray();
            if (maxEven.Length > 0)
            {
                Console.WriteLine(array.LastIndexOf(array.Where(x => (x % 2) == 0).Max()));
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }

        static List<int> ArrayExchange(List<int> array, int index)
        {
            if (index >= 0 && index <= array.Count - 1)
            {
                List<int> toExchange = array.Skip(index + 1).ToList();
                array = array.Take(index + 1).ToList();
                array.InsertRange(0, toExchange);                
            }
            else
            {
                Console.WriteLine("Invalid index");
            }
            return array;
        }
    }
}
