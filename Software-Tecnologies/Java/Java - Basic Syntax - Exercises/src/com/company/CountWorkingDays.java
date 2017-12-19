package com.company;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Scanner;
import java.util.Calendar;

public class CountWorkingDays {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        LocalDate startDate = LocalDate.parse(scan.nextLine());
        LocalDate endDate = LocalDate.parse(scan.nextLine());
        LocalDate[] holidays = new LocalDate[] {LocalDate.parse("01/01/2017"), LocalDate.parse("03/03/2017"), LocalDate.parse("01/05/2017"),
                LocalDate.parse("06/05/2017"), LocalDate.parse("24/05/2017"), LocalDate.parse("06/09/2017"), LocalDate.parse("22/09/2017"),
                LocalDate.parse("01/11/2017"), LocalDate.parse("24/12/2017"), LocalDate.parse("25/12/2017"), LocalDate.parse("26/12/2017")};

        for (LocalDate date = startDate; date.isAfter(endDate); date.plusDays(1)) {
            LocalDate today = startDate;
            System.out.println(today);
        }
    }
}

