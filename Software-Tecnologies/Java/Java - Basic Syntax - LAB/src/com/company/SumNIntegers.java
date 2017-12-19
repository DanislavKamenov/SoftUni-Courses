package com.company;

import java.util.Scanner;

public class SumNIntegers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int count = scan.nextInt();
        int sum = 0;

        for (int i = 0; i < count; i++) {
                sum += scan.nextInt();
        }
        System.out.println(sum);
    }
}
