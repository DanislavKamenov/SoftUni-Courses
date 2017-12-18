using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Trainegram
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = @"^(\<\[[^a-zA-Z0-9]*]\.)(\.\[[a-zA-Z0-9]*\]\.)*$";
            string input = string.Empty;
            List<string>trainergrams = new List<string>();

            while ((input = Console.ReadLine()) != "Traincode!")
            {
                if (Regex.IsMatch(input, pattern))
                {
                    string trainegram = Regex.Match(input, pattern).ToString();
                    trainergrams.Add(trainegram);
                }
            }

            Console.WriteLine(string.Join(Environment.NewLine, trainergrams));
        }
    }
}
