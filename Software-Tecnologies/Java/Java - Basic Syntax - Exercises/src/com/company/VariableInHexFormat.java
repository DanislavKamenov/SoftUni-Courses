package com.company;

import java.util.Scanner;

public class VariableInHexFormat {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine(),16);

        System.out.println(n);
    }
}
