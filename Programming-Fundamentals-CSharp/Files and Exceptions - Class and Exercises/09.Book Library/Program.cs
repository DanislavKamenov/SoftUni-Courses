using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Globalization;

namespace _9.Book_Library
{
    class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int Isbn { get; set; }
        public double Price { get; set; }
    }

    class Library
    {
        public string Name { get; set; }
        public List<Book> Books { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Library lib = ReadLibrary();

            var authorsAndPrices = new Dictionary<string, double>();
            foreach (var book in lib.Books)
            {
                if (!authorsAndPrices.ContainsKey(book.Author))
                {
                    authorsAndPrices.Add(book.Author, book.Price);
                }
                else
                {
                    authorsAndPrices[book.Author] += book.Price;
                }
            }
            File.WriteAllText(@"..\..\output.txt", string.Empty);
            foreach (var author in authorsAndPrices.OrderByDescending(p => p.Value).ThenBy(a => a.Key))
            {
               File.AppendAllText(@"..\..\output.txt", $"{author.Key} -> {author.Value:F2}{Environment.NewLine}");
            }
        }

        private static Library ReadLibrary()
        {
            string[] input = File.ReadAllLines(@"..\..\input.txt");
            Library library = new Library()
            {
                Name = "lib1",
                Books = new List<Book>(),
            };
            for (int i = 1; i < input.Length; i++)
            {
                string[] bookInfo = input[i].Split(' ');
                string title = bookInfo[0];
                string author = bookInfo[1];
                string publisher = bookInfo[2];
                DateTime releaseDate = DateTime.ParseExact(bookInfo[3], "dd.MM.yyyy", CultureInfo.InvariantCulture);
                int isbn = int.Parse(bookInfo[4]);
                double price = double.Parse(bookInfo[5]);

                var newBook = new Book
                {
                    Title = title,
                    Author = author,
                    Publisher = publisher,
                    ReleaseDate = releaseDate,
                    Isbn = isbn,
                    Price = price
                };
                library.Books.Add(newBook);
            }
            return library;
        }
    }

}
