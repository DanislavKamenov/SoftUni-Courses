package com.company;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class EqualSums {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int[] input = Arrays.stream(scan.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        for (int i = 1; i <= input.length; i++) {
            int[] seqLeft = Arrays.stream(input).limit(i - 1).toArray();
            int[] seqRight = Arrays.stream(input).skip(i).toArray();
            int sumLeft = seqSum(seqLeft);
            int sumRight = seqSum(seqRight);
            if (sumLeft == sumRight) {
                System.out.println(i - 1);
                break;
            }
            else if (i == input.length) {
                System.out.println("no");
            }
        }
    }
    static int seqSum(int[] sequence){
        int sum = 0;
        for (int i = 0; i < sequence.length; i++) {
            sum += sequence[i];
        }
        return sum;
    }
}
