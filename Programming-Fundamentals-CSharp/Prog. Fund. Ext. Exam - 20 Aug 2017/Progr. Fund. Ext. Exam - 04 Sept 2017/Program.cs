using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01._Trainers
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            decimal technical = 0;
            decimal theoretical = 0;
            decimal practical = 0;


            for (int i = 0; i < count; i++)
            {
                long meterTrav = long.Parse(Console.ReadLine()) * 1600;
                decimal cargoKg = decimal.Parse(Console.ReadLine()) * 1000;
                string team = Console.ReadLine();

                decimal participantEarnedMoney = (cargoKg * 1.5M) - (0.7M * meterTrav * 2.5M);

                if (team == "Technical")
                {
                    technical += participantEarnedMoney;
                }
                else if (team == "Theoretical")
                {
                    theoretical += participantEarnedMoney;
                }
                else if (team == "Practical")
                {
                    practical += participantEarnedMoney;
                }
            }

            decimal highestVal = Math.Max(technical, Math.Max(theoretical, practical));

            if (technical == highestVal)
            {
                Console.WriteLine($"The Technical Trainers win with ${technical.ToString("0.000")}.");
            }
            else if (theoretical == highestVal)
            {
                Console.WriteLine($"The Theoretical Trainers win with ${theoretical.ToString("0.000")}.");
            }
            else if (practical == highestVal)
            {
                Console.WriteLine($"The Practical Trainers win with ${practical.ToString("0.000")}.");
            }
        }
    }
}
