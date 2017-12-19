package com.company;

import com.sun.org.apache.xpath.internal.operations.Bool;

import java.util.Scanner;

public class BooleanVariable {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        boolean n = Boolean.parseBoolean(scan.nextLine());

        if (n) {
            System.out.println("Yes");
        }
        else {
            System.out.println("No");
        }
    }
}
