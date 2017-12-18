using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Сръбско_Unleashed
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> moneyPerVenue = new Dictionary<string, Dictionary<string, int>>();

            string[] command = Console.ReadLine().Split('@');

            while (command[0] != "end")
            {
                if (command.Length < 4)
                {
                    command = Console.ReadLine().Split(' ');
                }


                //if (moneyPerVenue.ContainsKey())
                {

                }

                command = Console.ReadLine().Split(' ');
            }
        }
    }
}
