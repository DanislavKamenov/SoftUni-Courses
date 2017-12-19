package com.company;

import java.util.Scanner;

public class IndexofLetters {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String input = scan.nextLine();

        for (int j = 0; j < input.length(); j++) {
            for (char i = 'a'; i <= 'z'; i++) {
                if (input.charAt(j) == i) {
                    System.out.println(input.charAt(j) + " -> " + (i - 97));
                }
            }
        }
    }
}
