using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Andrey_and_Billiard
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, decimal> ShopInventory = new Dictionary<string, decimal>();
            GetShopInventory(ShopInventory);

            string[] customerInfo = Console.ReadLine().Split('-', ',');
            List<Customer> clientList = new List<Customer>();
            while (customerInfo[0] != "end of clients")
            {
                if (ShopInventory.ContainsKey(customerInfo[1]))
                {
                    Customer client = ReadCustomer(customerInfo, ShopInventory);
                    if (clientList.Any(x => x.Name == client.Name))
                    {
                        var cust = clientList.Where(x => x.Name == client.Name).First();
                        if (cust.ShoppingList.ContainsKey(customerInfo[1]))
                        {
                            cust.ShoppingList[customerInfo[1]] += int.Parse(customerInfo[2]);
                        }
                        else
                        {
                            cust.ShoppingList.Add(customerInfo[1], int.Parse(customerInfo[2]));
                        }                        
                    }
                    else
                    {
                        clientList.Add(client);
                    }                    
                }  
                customerInfo = Console.ReadLine().Split('-', ',');
            }
            foreach (var c in clientList)
            {
                foreach (var item in c.ShoppingList)
                {
                    foreach (var p in ShopInventory)
                    {
                        if (item.Key == p.Key)
                        {
                            c.Bill += item.Value * p.Value;
                        }
                    }
                }
            }

            decimal totalBill = 0;
            foreach (var person in clientList.OrderBy(x => x.Name))
            {
                Console.WriteLine($"{person.Name}");

                foreach (var order in person.ShoppingList)
                {
                    Console.WriteLine($"-- {order.Key} - {order.Value}");
                }
                Console.WriteLine($"Bill: {person.Bill:F2}");
                totalBill += person.Bill;
            }
            Console.WriteLine($"Total bill: {totalBill:F2}");

        }

        private static void GetShopInventory(Dictionary<string, decimal> ShopInventory)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] shopInfo = Console.ReadLine().Split('-');
                if (!ShopInventory.ContainsKey(shopInfo[0]))
                {
                    ShopInventory.Add(shopInfo[0], decimal.Parse(shopInfo[1]));
                }
                else
                {
                    ShopInventory[shopInfo[0]] = decimal.Parse(shopInfo[1]);
                }
            }
        }

        static Customer ReadCustomer(string[] customerInfo, Dictionary<string, decimal> ShopInventory)
        {
            Customer customer = new Customer();

            customer = new Customer
            {
                Name = customerInfo[0],
                ShoppingList = new Dictionary<string, int>
                {
                    { customerInfo[1], int.Parse(customerInfo[2]) }
                }                
            };
            return customer;
        }
    }

    class Customer
    {
        public string Name { get; set; }
        public Dictionary<string, int> ShoppingList { get; set; }
        public decimal Bill { get; set; }
    }
}
