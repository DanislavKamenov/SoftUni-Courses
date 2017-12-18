using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Softuni_Coffee_Orders
{
    class Order
    {
        public decimal PricePerCapsule { get; set; }
        public DateTime OrderDate { get; set; }
        public int CapsulesCount { get; set; }        
        public decimal TotalPrice()
        {
            long days = DateTime.DaysInMonth(OrderDate.Year, OrderDate.Month);
            decimal Price = (days * CapsulesCount) * PricePerCapsule;
            return Price;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            int ordersCount = int.Parse(Console.ReadLine());
            decimal totalPrice = 0;

            for (int i = 0; i < ordersCount; i++)
            {
                Order currOrder = new Order()
                {
                    PricePerCapsule = decimal.Parse(Console.ReadLine()),
                    OrderDate = DateTime.ParseExact(Console.ReadLine(), "d/M/yyyy", CultureInfo.InvariantCulture),
                    CapsulesCount = int.Parse(Console.ReadLine())
                };
                Console.WriteLine($"The price for the coffee is: ${currOrder.TotalPrice():F2}");
                totalPrice += currOrder.TotalPrice();
                if (i == ordersCount - 1)
                {
                    Console.WriteLine($"Total: ${totalPrice:F2}");
                }
            }
        }
    }
}
