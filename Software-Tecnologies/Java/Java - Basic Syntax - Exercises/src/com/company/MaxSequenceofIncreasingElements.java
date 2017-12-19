package com.company;

import java.util.Collections;
import java.util.Scanner;

public class MaxSequenceofIncreasingElements {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String input = scan.nextLine().replace(" ", "");

        int cntCurrSeq = 0;
        int startCurrSeq = 0;
        int cntMaxSeq = 0;
        int startMaxSeq = 0;

        for (int i = 1; i < input.length(); i++)
        {
            if (input.charAt(i) - input.charAt(i - 1) >= 1)
            {
                cntCurrSeq++;
                startCurrSeq = i - cntCurrSeq;

                if (cntCurrSeq > cntMaxSeq)
                {
                    cntMaxSeq = cntCurrSeq;
                    startMaxSeq = startCurrSeq;
                }
            }
            else
            {
                cntCurrSeq = 0;
            }
        }

        String sub = input.substring(startMaxSeq, startMaxSeq + cntMaxSeq + 1);
        String subJoined = "";
        for (int i = 0; i < sub.length(); i++) {
            subJoined += sub.charAt(i) + " ";
        }

        System.out.println(subJoined);
    }
}
