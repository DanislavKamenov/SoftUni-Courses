using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Weather
{
    class Program
    {
        static void Main(string[] args)
        {
            string weatherData = Console.ReadLine();
            string pattern = @"([A-Z]{2}(?=\d))(\d{0,2}\.\d{1,2})([A-Za-z]+(?=\|))";
            Dictionary<string, Match> ValidData = new Dictionary<string, Match>();

            while (weatherData != "end")
            {
                Match validInput = Regex.Match(weatherData, pattern);
                if (validInput.Success)
                {
                    ValidData[validInput.Groups[1].Value] = validInput;
                }                
                weatherData = Console.ReadLine();
            }
            foreach (var forecast in ValidData.OrderBy(x=> x.Value.Groups[2].Value))
            {
                Console.WriteLine($"{forecast.Key} => {Convert.ToDecimal(forecast.Value.Groups[2].Value):F2} => {forecast.Value.Groups[3]}");
            }
        }
    }
}
 