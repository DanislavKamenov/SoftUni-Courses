package com.company;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class PhonebookUpgrade {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        TreeMap<String, String> phonebook = new TreeMap<>();

        String inputLine = "";

        while (!(inputLine = scan.nextLine()).equals("END")) {
            String[] rawData = inputLine.split(" ");
            if (rawData[0].equals("A")) {
                String name = rawData[1];
                String phone = rawData[2];
                phonebook.put(name, phone);
            }
            else if (rawData[0].equals("S")){
                String name = rawData[1];
                if (phonebook.containsKey(name)) {
                    System.out.println(name + " -> " + phonebook.get(name));
                }
                else {
                    System.out.println("Contact " + name + " does not exist.");
                }
            }
            else if (rawData[0].equals("ListAll")) {
               phonebook.forEach((key, value) -> {
                   System.out.println(key + " -> " + value);
               });
            }
        }
    }
}
