using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace _8.Average_Grades
{
    class Student
    {
        public string Name { get; set; }
        public double[] Grades { get; set; }
        public double GradesAverage()
        {
            double avgGrades = Grades.Average();
            return avgGrades;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Student> students = ReadStudentList();

            File.WriteAllText(@"..\..\output.txt", string.Empty);
            foreach (var student in students.Where(s => s.GradesAverage() >= 5).OrderBy(x => x.Name)
                .ThenByDescending(y => y.GradesAverage()))
            {
                File.AppendAllText(@"..\..\output.txt", $"{student.Name} -> {student.GradesAverage():F2}{Environment.NewLine}");
            }
        }

        static List<Student> ReadStudentList()
        {
            string[] input = File.ReadAllLines(@"..\..\input.txt");
            List<Student> studentList = new List<Student>();
            for (int i = 1; i < input.Length; i++)
            {
                string[] studentInfo = input[i].Split(' ');
                string name = studentInfo[0];
                List<double> grades = new List<double>();
                grades.AddRange(studentInfo.Skip(1).Select(double.Parse));

                Student newStudent = new Student
                {
                    Name = name,
                    Grades = grades.ToArray(),
                };
                studentList.Add(newStudent);
            }
            return studentList;
        }
    }
}