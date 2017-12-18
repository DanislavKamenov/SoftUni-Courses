package com.company;

import java.util.Scanner;

public class VowelorDigit {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        char n = scan.next().charAt(0);

        if (Character.isDigit(n)){
            System.out.println("digit");
        }
        else if (isVowel(n)) {
            System.out.println("vowel");
        }
        else {
            System.out.println("other");
        }
    }
    public static boolean isVowel(char n) {
        return  (Character.toLowerCase(n) == 'a' || Character.toLowerCase(n) == 'e' || Character.toLowerCase(n) == 'i'
                || Character.toLowerCase(n) == 'o' || Character.toLowerCase(n) == 'u');
    }
}
