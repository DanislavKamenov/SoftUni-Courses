package com.company;

import java.util.*;
import java.util.stream.Stream;
import java.util.Arrays;
import java.util.List;

public class Largest3Numbers {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int[] input = Arrays.stream(scan.nextLine().split(" "))
                .map(Integer::parseInt)
                .sorted(Comparator.reverseOrder())
                .limit(3).mapToInt(Integer::intValue)
                .toArray();

        for (int num : input) {
            System.out.println(num);
        }
    }
}
