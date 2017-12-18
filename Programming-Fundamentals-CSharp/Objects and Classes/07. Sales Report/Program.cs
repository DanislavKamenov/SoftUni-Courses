using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Sales_Report
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Sales[] totalTownSales = new Sales[n];
            SortedDictionary<string, decimal> salesPerTown = new SortedDictionary<string, decimal>();

            for (int i = 0; i < n; i++)
            {
                totalTownSales[i] = ReadSale();
                if (!salesPerTown.ContainsKey(totalTownSales[i].Town))
                salesPerTown.Add(totalTownSales[i].Town, totalTownSales[i].Price * totalTownSales[i].Quantity);
                else
                {                    
                    salesPerTown[totalTownSales[i].Town] += totalTownSales[i].Price * totalTownSales[i].Quantity;
                }
            }

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine(totalTownSales[i].Town.Distinct().ToArray());
            }

            //foreach (var city in salesPerTown)
            //{
            //    Console.WriteLine($"{city.Key} -> {city.Value:F2}");
            //}
            
        }

        static Sales ReadSale()
        {           
                string[] salesInfo = Console.ReadLine().Split(' ');

            return new Sales { Town = salesInfo[0], Product = salesInfo[1], Price = decimal.Parse(salesInfo[2]), Quantity = decimal.Parse(salesInfo[3]) };            
        }
    }

    class Sales
    {
        public string Town { get; set; }
        public string Product { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
    }
}
