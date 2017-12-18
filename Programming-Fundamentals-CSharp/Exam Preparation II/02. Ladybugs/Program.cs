using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Ladybugs
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine().Trim());
            int[] positions = Console.ReadLine().Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            List<int> field = new List<int>();

            for (int i = 0; i < size; i++)
            {
                field.Add(0);                
            }
            for (int i = 0; i < positions.Length; i++)
            {
                if (positions[i] >= 0 && positions[i] <= field.Count - 1)
                {
                    field[positions[i]] = 1;
                }                
            }

            while (true)
            {
                string commandLine = Console.ReadLine();
                if (commandLine == "end")
                {
                    break;
                }
                string[] commandArr = commandLine.Split(' ');
                long start = long.Parse(commandArr[0]);
                string command = commandArr[1];
                long count = long.Parse(commandArr[2]);

                switch (command)
                {
                    case "right":
                        field = MoveRight(field, start, count);
                        break;
                    case "left":
                        field = MoveLeft(field, start, count);
                        break;
                }
            }
            Console.WriteLine(string.Join(" ", field));
        }

        static List<int> MoveLeft(List<int> field, long start, long count)
        {
            count = count * -1;
            if (start >= 0 && start < field.Count)
            {
                field[(int)start] = 0;
            }
            if (start + count >= 0 && start + count < field.Count)
            {
                for (long i = start + count; i >= 0; i += count)
                {
                    if (field[(int)i] == 0)
                    {
                        field[(int)i] = 1;
                        break;
                    }
                }
            }
            return field;
        }

        static List<int> MoveRight(List<int> field, long start, long count)
        {
            if (start >= 0 && start < field.Count)
            {
                field[(int)start] = 0;
            }
            if (start + count >= 0 && start + count < field.Count)
            {
                for (long i = start + count; i < field.Count; i+=count)
                {
                    if (field[(int)i] == 0)
                    {
                        field[(int)i] = 1;
                        break;
                    }
                }
            }
            return field;
        }
    }
}
