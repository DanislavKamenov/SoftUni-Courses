package com.company;

import java.util.Scanner;

public class IntersectionofCircles {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String[] c1Input = scan.nextLine().split(" ");
        String[] c2Input = scan.nextLine().split(" ");
        Circle c1 = new Circle((Integer.parseInt(c1Input[0]) * Integer.parseInt(c1Input[1])), Integer.parseInt(c1Input[2]));
        Circle c2 = new Circle((Integer.parseInt(c2Input[0]) * Integer.parseInt(c2Input[1])), Integer.parseInt(c2Input[2]));
        Point p1 = new Point(Integer.parseInt(c1Input[0]), Integer.parseInt(c1Input[1]));
        Point p2 = new Point(Integer.parseInt(c2Input[0]), Integer.parseInt(c2Input[1]));

        System.out.println(Intersect(c1, c2, p1, p2) ? "Yes" : "No");
    }

    public static boolean Intersect (Circle c1, Circle c2, Point p1, Point p2) {
        double distanceBetweenCircles = Math.sqrt(Math.pow(p2.getX() - p1.getX(), 2) + Math.pow(p2.getY() - p1.getY(), 2));
        return  distanceBetweenCircles <= c1.getRadius() + c2.getRadius();
    }
}

class Circle{
    private int center;
    private int radius;

    public Circle(int center, int radius) {
        this.radius = radius;
        this.center = center;
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public int getCenter() {
        return center;
    }

    public void setCenter(int center) {
        this.center = center;
    }
}
class Point {
    private double x;
    private double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }
}

