package com.company;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

public class BookLibraryModification {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int count = Integer.parseInt(scan.nextLine());
        List<Book> books = new ArrayList<>();
        DateFormat df = new SimpleDateFormat("dd.MM.yyyy");

        for (int i = 0; i < count; i++) {
            String[] bookData = scan.nextLine().split(" ");
            String title = bookData[0];
            String author = bookData[1];
            String publisher = bookData[2];
            Date releaseDate = null;
            try {
                releaseDate = df.parse(bookData[3]);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            int ISBN = Integer.parseInt(bookData[4]);
            double price = Double.parseDouble(bookData[5]);

            Book book = new Book(title, author, publisher, releaseDate, ISBN, price);
            books.add(book);
        }
        Date startDate = null;
        try {
             startDate = df.parse(scan.nextLine());
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Date compareDate = startDate;

        books = books.stream().filter(x -> x.getReleaseDate().after(compareDate)).collect(Collectors.toList());
        books.sort(Comparator.comparing(Book::getReleaseDate).thenComparing(Book::getTitle));


        for ( Book book : books) {
            System.out.println(book.getTitle() + " -> " + df.format(book.getReleaseDate()));
        }


    }
}