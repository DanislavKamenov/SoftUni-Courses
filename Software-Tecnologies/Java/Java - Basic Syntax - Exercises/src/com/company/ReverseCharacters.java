package com.company;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class ReverseCharacters {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        List<String> n = new ArrayList<>();

        for (int i = 0; i < 3; i++) {
            n.add(scan.nextLine());
        }
        for (int i = 2; i >= 0 ; i--) {
            System.out.print(n.get(i));
        }
    }
}
