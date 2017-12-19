package com.company;

import java.util.Scanner;

public class URLParser {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String fullUrl = scan.nextLine();
        String[] urlParts = new String [2];
        if (fullUrl.contains("://")) {
            urlParts = fullUrl.split("://");
            String protocol = urlParts[0];
            System.out.println("[protocol] = " +"\"" + protocol + "\"");
            if (urlParts[1].contains("/")) {
                String server = urlParts[1].substring(0, urlParts[1].indexOf("/"));
                String resource = urlParts[1].substring(urlParts[1].indexOf("/") + 1);
                System.out.println("[server] = " + "\"" + server + "\"");
                System.out.println("[resource] = " + "\"" + resource + "\"");
            }
            else {
                String server = urlParts[1];
                System.out.println("[server] = " + "\"" + server + "\"");
                System.out.println("[resource] = " + "\"\"");
            }
        }
        else if (fullUrl.contains("/")) {
            String server = fullUrl.substring(0, fullUrl.indexOf("/"));
            String resource = fullUrl.substring(fullUrl.indexOf("/") + 1);
            System.out.println("[protocol] = " + "\"\"");
            System.out.println("[server] = " + server);
            System.out.println("[resource] = " + resource);
        }
        else {
            System.out.println("[protocol] = " + "\"\"");
            System.out.println("[server] = " + fullUrl);
            System.out.println("[resource] = " + "\"\"");
        }
    }
}
