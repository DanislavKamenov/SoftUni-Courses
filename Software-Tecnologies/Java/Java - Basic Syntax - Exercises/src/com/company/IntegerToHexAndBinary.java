package com.company;

import java.util.Scanner;

public class IntegerToHexAndBinary {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();
        String nAsHex = Integer.toHexString(n);
        String nASBinary = Integer.toBinaryString(n);

        System.out.println(nAsHex.toUpperCase());
        System.out.println(nASBinary);
    }
}
