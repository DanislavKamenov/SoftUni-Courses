using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using System.IO;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = File.ReadAllLines(@"..\..\input.txt");
            Library bookLibrary = ReadLibrary(input);

            DateTime startDate = DateTime.ParseExact(input.Last(), "dd.MM.yyyy", CultureInfo.InvariantCulture);

            File.WriteAllText(@"..\..\output.txt", string.Empty);
            foreach (var book in bookLibrary.Books.Where(x => x.ReleaseDate > startDate).OrderBy(d => d.ReleaseDate).ThenBy(t => t.Title))
            {
                File.AppendAllText(@"..\..\output.txt", $"{book.Title} -> {book.ReleaseDate.ToString("dd.MM.yyyy", CultureInfo.InvariantCulture)}{Environment.NewLine}");
            }
        }

        static Library ReadLibrary(string[] input)
        {            
            List<Book> newBook = new List<Book>();
            Library library = new Library();


            for (int i = 1; i < input.Length - 1; i++)
            {
                string[] bookInfo = input[i].Split(' ');
                newBook.Add(new Book()
                {
                    Title = bookInfo[0],
                    Author = bookInfo[1],
                    Publisher = bookInfo[2],
                    ReleaseDate = DateTime.ParseExact(bookInfo[3], "dd.MM.yyyy", CultureInfo.InvariantCulture),
                    Isbn = int.Parse(bookInfo[4]),
                    Price = double.Parse(bookInfo[5])
                });
                library = new Library { Books = newBook };
            }
            return library;
        }

    }
}

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
