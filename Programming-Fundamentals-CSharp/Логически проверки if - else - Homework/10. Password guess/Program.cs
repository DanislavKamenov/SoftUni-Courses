using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Password_guess
{
    class Program
    {
        static void Main(string[] args)
        {            
            var password = Console.ReadLine();
            if (password == "s3cr3t!P@ssw0rd")
                Console.WriteLine("Welcome");
            else
                Console.WriteLine("Wrong password!");
        }
    }
}
