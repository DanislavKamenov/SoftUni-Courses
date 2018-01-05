using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Files
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var files = new Dictionary<string, Dictionary<string, long>>();

            for (int i = 0; i < n; i++)
            {
                var filePath = Console.ReadLine().Split(new[] { '\\', ';', }, StringSplitOptions.RemoveEmptyEntries);
                var root = filePath[0];
                var file = filePath[filePath.Length - 2];
                var size = long.Parse(filePath[filePath.Length - 1]);

                if (!files.ContainsKey(root))
                {
                    files.Add(root, new Dictionary<string, long>() { { file, size } });
                }
                else
                {
                    if (!files[root].ContainsKey(file))
                    {
                        files[root].Add(file, size);
                    }
                    else
                    {
                        files[root][file] = size;
                    }
                }
            }

            var query = Console.ReadLine().Split(' ');
            var extention = query[0];
            var checkRoot = query[2];
            var isEmpty = true;

            foreach (var item in files.Where(r => r.Key == checkRoot))
            {
                foreach (var file in item.Value.Where(e => e.Key.EndsWith(extention)).OrderByDescending(v => v.Value).ThenBy(f => f.Key))
                {
                    isEmpty = false;
                    Console.WriteLine($"{file.Key} - {file.Value} KB");
                }
            }

            if (isEmpty)
            {
                Console.WriteLine("No");
            }
        }
    }
}
