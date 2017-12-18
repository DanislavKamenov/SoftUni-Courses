using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Library bookLibrary = ReadLibrary();            

            DateTime startDate = DateTime.ParseExact(Console.ReadLine(), "dd.MM.yyyy", CultureInfo.InvariantCulture);

            foreach (var book in bookLibrary.Books.Where(x => x.ReleaseDate > startDate).OrderBy(d => d.ReleaseDate).ThenBy(t => t.Title))
            {
                Console.WriteLine($"{book.Title} -> {book.ReleaseDate.ToString("dd.MM.yyyy", CultureInfo.InvariantCulture)}");
            }
        }

        static Library ReadLibrary()
        {
            int n = int.Parse(Console.ReadLine());
            List<Book> newBook = new List<Book>();
            Library library = new Library();


            for (int i = 0; i < n; i++)
            {
                string[] bookInfo = Console.ReadLine().Split(' ');
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
