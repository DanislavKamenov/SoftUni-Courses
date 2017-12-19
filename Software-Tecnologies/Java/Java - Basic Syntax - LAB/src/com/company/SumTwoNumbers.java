package com.company;

        import java.util.Scanner;

public class SumTwoNumbers {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double a = Double.parseDouble(scan.nextLine());
        double b = Double.parseDouble(scan.nextLine());

        System.out.println(a + b);
    }
}
