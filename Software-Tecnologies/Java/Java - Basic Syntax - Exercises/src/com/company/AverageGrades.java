package com.company;

import java.text.DecimalFormat;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Comparator.naturalOrder;
import static java.util.Comparator.reverseOrder;

public class AverageGrades {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int count = Integer.parseInt(scan.nextLine());
        List<Student> students = new ArrayList<>();

        for (int i = 0; i < count; i++) {
            String[] studentData = scan.nextLine().split(" ");
            String name = studentData[0];
            List<Double>grades = new ArrayList<>();
            for (int j = 1; j < studentData.length; j++) {
                grades.add(Double.parseDouble(studentData[j]));
            }
            Student student = new Student(name, grades);
            students.add(student);
        }

        List<Student> filteredStudents = (students.stream().filter(x -> x.getAvgGrade() >= 5.00).collect(Collectors.toList()));
        filteredStudents.sort(Comparator.comparing(Student::getName, naturalOrder()).thenComparing(Student::getAvgGrade, reverseOrder()));

        DecimalFormat format = new DecimalFormat("##.00");

        for (Student person : filteredStudents) {
            System.out.print(person.getName() + " -> ");
            System.out.println(format.format(person.getAvgGrade()));
        }
    }

}

class Student {
    private String name;
    private List<Double> grade;
    private Double avgGrade;

    public Student(String name, List<Double> grade) {
        this.name = name;
        this.grade = grade;

        this.avgGrade = this.grade.stream().mapToDouble(a -> a).average().getAsDouble();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Double> getGrade() {
        return grade;
    }

    public void setGrade(List<Double> grade) {
        this.grade = grade;
    }

    public Double getAvgGrade() {
        return avgGrade;
    }
}
