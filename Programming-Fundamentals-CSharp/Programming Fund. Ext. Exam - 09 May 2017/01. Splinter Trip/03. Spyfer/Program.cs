using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Spyfer
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> coords = Console.ReadLine().Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();

            for (int i = 0; i < coords.Count; i++)
            {
                if (i == 0)
                {
                    if (coords.Count > 1 && coords[i] == coords[i + 1])
                    {
                        coords.RemoveAt(i + 1);
                        i = -1;
                    }                    
                }
                else if (i == coords.Count - 1)
                {
                    if (coords[i] == coords[i - 1])
                    {
                        coords.RemoveAt(i - 1);
                        i = -1;
                    }
                }
                else if (coords[i] == coords[i - 1] + coords[i + 1])
                {
                    coords.RemoveAt(i + 1);
                    coords.RemoveAt(i - 1);
                    i = -1;
                }
            }

            Console.WriteLine(string.Join(" ", coords));
        }
    }
}
