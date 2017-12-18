using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Raincast
{
    class Program
    {
        static void Main(string[] args)
        {
            string raincastArgs = Console.ReadLine();
            List<Raincast> raincasts = new List<Raincast>();

            while (raincastArgs != "Davai Emo")
            {
                Raincast raincast = new Raincast();
                while (raincast.Type == null && raincastArgs != "Davai Emo")
                {
                    switch (raincastArgs)
                    {
                        case "Type: Normal":
                            raincast.Type = "Normal";
                            break;
                        case "Type: Warning":
                            raincast.Type = "Warning";
                            break;
                        case "Type: Danger":
                            raincast.Type = "Danger";
                            break;  
                    }
                    raincastArgs = Console.ReadLine();
                }

                while (raincast.Source == null && raincastArgs != "Davai Emo")
                {                    
                    string pattern = @"Source: ";
                    if (raincastArgs.StartsWith(pattern))
                    {
                        string[] sourceArgs = raincastArgs.Split(new[] { $"{pattern}" }, StringSplitOptions.RemoveEmptyEntries);
                        string sourceData = sourceArgs[0];

                        string sourcePattern = @"^[A-Za-z0-9]+$";
                        if (Regex.IsMatch(sourceData, sourcePattern))
                        {
                            raincast.Source = sourceData;
                        }
                    }
                    raincastArgs = Console.ReadLine();
                }

                while (raincast.Forecast == null && raincastArgs != "Davai Emo")
                {                   
                    string pattern = "Forecast: ";
                    string forecastPattern = @"^[^!.,?]+$";
                    if (raincastArgs.StartsWith(pattern) && Regex.IsMatch(raincastArgs, forecastPattern))
                    {
                        string[] forecastArgs = raincastArgs.Split(new[] { $"{pattern}" }, StringSplitOptions.RemoveEmptyEntries);
                        string forecastData = forecastArgs[0];

                        raincast.Forecast = forecastData;

                        raincasts.Add(raincast);
                    }
                    raincastArgs = Console.ReadLine();
                }
            }

            foreach (var raincast in raincasts)
            {
                Console.WriteLine($"({raincast.Type}) {raincast.Forecast} ~ {raincast.Source}");
            }
        }
    }

    class Raincast
    {
        public string Type { get; set; }
        public string Source { get; set; }
        public string Forecast { get; set; }
    }
}
