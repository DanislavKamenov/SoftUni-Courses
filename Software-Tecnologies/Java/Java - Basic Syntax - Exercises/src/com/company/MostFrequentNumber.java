package com.company;

import java.util.Scanner;

public class MostFrequentNumber {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String[] input = scan.nextLine().split(" ");

        int count = 1;
        int maxCOunt = 1;
        int num = 0;

        for (int i = 0; i <= input.length - 1; i++) {
            count = 1;
            for (int j = i + 1; j <= input.length - 1; j++) {
                if (input[i].equals(input[j])) {
                    count++;
                    if (count > maxCOunt) {
                        maxCOunt = count;
                        num = Integer.parseInt(input[i]);
                    }
                }
            }
        }

        if (input.length == 1) {
            num = Integer.parseInt(input[0]);
        }

        System.out.println(num);
    }
}
