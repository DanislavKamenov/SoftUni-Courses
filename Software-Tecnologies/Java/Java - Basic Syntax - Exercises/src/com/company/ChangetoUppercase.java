package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class ChangetoUppercase {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String input = scan.nextLine();
        String sub;
        String toCaps;

        while (input.contains("<upcase>")) {
            sub = input.substring(input.indexOf("<upcase>"), input.indexOf("</upcase>") + 9);
            toCaps = sub.substring(8, sub.indexOf("</upcase>")).toUpperCase();
            input = input.replace(sub, toCaps);
        }
        System.out.println(input);
    }
}
