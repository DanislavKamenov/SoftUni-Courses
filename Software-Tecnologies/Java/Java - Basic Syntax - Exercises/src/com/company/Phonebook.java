package com.company;

import java.util.LinkedHashMap;
import java.util.Scanner;

public class Phonebook {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        LinkedHashMap<String, String> phonebook = new LinkedHashMap<>();

        String inputLine = "";

        while (!(inputLine = scan.nextLine()).equals("END")) {
            String[] rawData = inputLine.split(" ");
            if (rawData[0].equals("A")) {
                String name = rawData[1];
                String phone = rawData[2];
                phonebook.put(name, phone);
            }
            else {
                String name = rawData[1];
                if (phonebook.containsKey(name)) {
                    System.out.println(name + " -> " + phonebook.get(name));
                }
                else {
                    System.out.println("Contact " + name + " does not exist.");
                }
            }
        }
    }
}
