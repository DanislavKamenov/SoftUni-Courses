using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.DNA_Sequences
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            var List = new List<char>(); List.Add('A'); List.Add('C'); List.Add('G'); List.Add('T');

            foreach (char element in List)
            {
                for (char i = element; i <= 'T'; i++)
                {
                    if (i == element)
                    {
                        Console.Write(element);
                    }
                    for (char j = element; j <= 'T'; j++)
                    {
                        if (j == element)
                        {
                            Console.Write(element);
                        }
                        for (char k = element; k <= 'T'; k++)
                        {
                            if (i == element)
                            {
                                Console.WriteLine(element);
                            }
                        }
                    }
                }
            }
        }
    }
}
