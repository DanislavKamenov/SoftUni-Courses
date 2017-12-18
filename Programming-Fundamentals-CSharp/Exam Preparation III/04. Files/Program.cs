using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Files
{   
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, List<string>> rootsNFiles = new Dictionary<string, List<string>>();
            Dictionary<string, string> files = new Dictionary<string, string>();

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                string[] filePaths = input.Split('\\');
                string root = filePaths[0];
                string file = filePaths[filePaths.Length - 1];
                if (!rootsNFiles.ContainsKey(root))
                {
                    rootsNFiles.Add(root, new List<string>());
                    rootsNFiles[root].Add(file);
                }
                else
                {
                    rootsNFiles[root].Add(file);
                }                
                string[] fileParts = file.Split(';');
                string fileName = fileParts[0];
                string fileSize = fileParts[1];
                if (!files.ContainsKey(fileName))
                {
                    files.Add(fileName, fileSize);
                }
                else
                {
                    files[fileName] = fileSize;
                }
                
            }
            string query = Console.ReadLine();

            foreach (var file in files)
            {
                string[] queryData = Regex.Split(query, " in ");
                string findRoot = queryData[0];
                string extension = queryData[2];

                foreach (var list in rootsNFiles.Values)
                {
                    if (list.Contains($"{file}.{extension}"))
                    {
                        Console.WriteLine();
                    }
                }
            }
        }        
    }
}
