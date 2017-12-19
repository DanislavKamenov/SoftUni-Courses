package com.company;

import java.util.Random;
import java.util.Scanner;

public class AdvertisementMessage {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String[] phrases = new String[] {"Excellent product.", "Such a great product."
                , "I always use that product.", "Best product of its category."
                , "Exceptional product.", "I can't live without this product."};
        String[] events = new String[] {"Now I feel good.", "I have succeeded with this product.",
                "Makes miracles. I am happy of the results!", "I cannot believe but now I feel awesome.",
                "Try it yourself, I am very satisfied.", "I feel great!"};
        String[] author = new String[] {"Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"};
        String[] city = new String[] {"Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"};

        Random rand = new Random();
        int messageNum = scan.nextInt();
        int test = phrases.length;
        int phraseIndex = 0;
        int eventsIndex = 0;
        int autorIndex = 0;
        int cityIndex = 0;

        for (int i = 0; i < messageNum; i++) {
            phraseIndex = rand.nextInt(phrases.length);
            eventsIndex = rand.nextInt(events.length);
            autorIndex = rand.nextInt(author.length);
            cityIndex = rand.nextInt(city.length);

            System.out.println(phrases[phraseIndex] + " " + events[eventsIndex] + " " + author[autorIndex] + " - " + city[cityIndex]);
        }
    }
}
