package com.company;

import java.util.Collections;
import java.util.Scanner;

public class MaxSequenceofEqualElements {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String input = scan.nextLine().replace(" ", "");

        int currentLongest = 1;
        int maxLongest = 1;
        String  num = "";

        for (int i = 1; i <= input.length() - 1; i++) {
            if (input.charAt(i) == input.charAt(i - 1)) {
                currentLongest++;
                if (currentLongest > maxLongest){
                    maxLongest = currentLongest;
                    num = Character.toString(input.charAt(i));
                }
            }
            else {
                currentLongest = 1;
            }
        }
        if (maxLongest == 1) {
            num = Character.toString(input.charAt(0));
        }
        System.out.println(String.join(" ", Collections.nCopies(maxLongest, num)));
    }
}
