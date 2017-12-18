using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Cubic_Messages
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, StringBuilder> wordNKey = new Dictionary<string, StringBuilder>();

            while (true)
            {
                string messageData = Console.ReadLine();
                if (messageData == "Over!")
                {
                    break;
                }
                int m = int.Parse(Console.ReadLine());
                
                string pattern = $@"^\d+(?'key'[a-zA-Z]{{{m}}})(?!.*[a-zA-Z])";
                Match message = Regex.Match(messageData, pattern);
                if (message.Groups["key"].Length != m)
                {                    
                    continue;
                }
                string numPattern = @"\d+";
                MatchCollection nums = Regex.Matches(messageData, numPattern);
                var wordArr = message.Groups["key"].ToString().ToCharArray();
                var word = string.Join("", wordArr);
                var indices = string.Join("", nums.Cast<Match>()).ToArray();
                if (!wordNKey.ContainsKey(string.Join("", word)))
                {
                    wordNKey.Add(word, new StringBuilder());
                    for (int i = 0; i < indices.Length; i++)
                    {
                        int index = int.Parse(indices[i].ToString());
                        if (index > wordArr.Length - 1)
                        {
                            wordNKey[word].Append(" ");
                        }
                        else
                        {
                            wordNKey[word].Append(wordArr[index]);
                        }                        
                    }
                }
            }
            foreach (var item in wordNKey)
            {
                Console.WriteLine($"{item.Key} == {item.Value}");
            }
        }
    }
}
