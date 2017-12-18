using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _01.Charity_Marathon
{
    class Program
    {
        static void Main(string[] args)
        {
            int days = int.Parse(Console.ReadLine());
            int runnersNum = int.Parse(Console.ReadLine());
            int lapsAvg = int.Parse(Console.ReadLine());
            int trackLength = int.Parse(Console.ReadLine());
            int trackCapacity = int.Parse(Console.ReadLine());
            double moneyPerKm = double.Parse(Console.ReadLine());

            int totalRunners = trackCapacity * days;
            if (totalRunners> runnersNum)
            {
                totalRunners = runnersNum;
            }
            BigInteger totalMRan = (BigInteger)trackLength * lapsAvg * totalRunners;
            long totalKmRan = (long)totalMRan / 1000;
            double TotalMoneyEarned = totalKmRan * moneyPerKm;

            Console.WriteLine($"Money raised: {TotalMoneyEarned:F2}");
        }
    }
}
