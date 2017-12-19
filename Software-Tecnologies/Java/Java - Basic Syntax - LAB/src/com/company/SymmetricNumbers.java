package com.company;

import java.util.Scanner;

public class SymmetricNumbers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int num = scan.nextInt();

        for (int i = 1; i <= num; i++) {
            String currentNum = String.valueOf(i);
            if (isSymmetric(currentNum)){
                System.out.println(currentNum);
            }
        }
    }

    static boolean isSymmetric(String numToString){
        String firstHalf;
        String secondHalf;
        StringBuilder sb = new StringBuilder();
        if (numToString.length() == 1) {
            return true;
        }
        else if (numToString.length() % 2 == 0) {
            firstHalf = numToString.substring(0, numToString.length() / 2);
            secondHalf = numToString.substring(numToString.length() / 2, numToString.length());
            sb.append(secondHalf).reverse();
            secondHalf = sb.toString();
        }
        else {
            firstHalf = numToString.substring(0, numToString.length() / 2);
            secondHalf = numToString.substring(numToString.length() / 2 + 1, numToString.length());
            sb.append(secondHalf).reverse();
            secondHalf = sb.toString();
        }

        return firstHalf.equals(secondHalf);
    }
}
