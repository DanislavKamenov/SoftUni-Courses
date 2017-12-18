using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Vowel_or_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            char n = char.Parse(Console.ReadLine());
            var nIs = string.Empty;
            if (n == 'a' || n == 'e' || n == 'o' || n == 'u' || n == 'i')
            {
                nIs = "vowel";
            }
            else if (char.IsDigit(n))
            {
                nIs = "digit";
            }
            else
            {
                nIs = "other";
            }

            Console.WriteLine(nIs);
        }
    }
}
