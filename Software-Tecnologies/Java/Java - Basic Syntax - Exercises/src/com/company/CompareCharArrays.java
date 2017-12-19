package com.company;

import java.util.Arrays;
import java.util.Scanner;

public class CompareCharArrays {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        String[] input1 = scan.nextLine().split(" ");
        String[] input2 = scan.nextLine().split(" ");

        String s = "";
        for (String n:input1)
            s+= n;
        char[] c = s.toCharArray();
        String s2 = "";
        for (String n:input2)
            s2+= n;
        char[] c2 = s2.toCharArray();

        for (int i = 0; i < Math.min(input1.length, input2.length); i++) {
            if (c[i] < c2[i]){
                System.out.println(String.join("", String.join("", input1)));
                System.out.println(String.join("", String.join("", input2)));
                break;
            }
            else if (c[i] > c2[i]) {
                System.out.println(String.join("", String.join("", input2)));
                System.out.println(String.join("", String.join("", input1)));
                break;
            }
            else if (i == Math.min(input1.length, input2.length) - 1) {
                if (input1.length < input2.length){
                    System.out.println(String.join("", String.join("", input1)));
                    System.out.println(String.join("", String.join("", input2)));
                }
                else if (input1.length > input2.length){
                    System.out.println(String.join("", String.join("", input2)));
                    System.out.println(String.join("", String.join("", input1)));
                }
                else {
                    System.out.println(String.join("", String.join("", input1)));
                    System.out.println(String.join("", String.join("", input2)));
                }
            }
        }
    }
}
