package com.company;

import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

public class BookLibrary {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int count = Integer.parseInt(scan.nextLine());
        Map<String, Double> library = new HashMap<>();
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

            if (!library.containsKey(book.getAuthor())) {
                library.put(book.getAuthor(), book.getPrice());
            }
            else {
                library.computeIfPresent(book.getAuthor(), (k, v) -> v + book.getPrice());
            }
        }

         Map sortedLibrary = library.entrySet().stream()
                 .sorted((Map.Entry<String, Double> o1, Map.Entry<String, Double> o2) -> {
                     return o1.getValue().equals(o2.getValue()) ?
                             o1.getKey().compareTo(o2.getKey())
                             : o2.getValue().compareTo(o1.getValue());
                 })
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));

        DecimalFormat formatter = new DecimalFormat("##.00");

        sortedLibrary.forEach((key, value) -> {
            System.out.println(key + " -> " + formatter.format(value));
        });
            
        }
    }

