using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;


namespace _08.Mentor_Group
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Student> stds = ReadStudentList();

            string inputString = Console.ReadLine();
            string[] input = inputString.Split('-');
            while (inputString != "end of comments")
            {
                foreach (var student in stds)
                {
                    if (student.Name == input[0])
                    {
                        student.Comments.Add(input[1]);
                    }
                }
                inputString = Console.ReadLine();
                input = inputString.Split('-');
            }

            foreach (var student in stds.OrderBy(x => x.Name))
            {
                Console.WriteLine($"{student.Name}");
                Console.WriteLine($"Comments:");
                foreach (var comment in student.Comments)
                {
                    Console.WriteLine($"- {comment}");
                }
                Console.WriteLine($"Dates attended:");
                foreach (var date in student.AttDates.OrderBy(x => x))
                {
                    if (student.AttDates.Count > 0)
                        Console.WriteLine($"-- {date.Date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture)}");
                }
            }
        }

        static List<Student> ReadStudentList()
        {
            List<Student> studentList = new List<Student>();
            string studentInfo = Console.ReadLine();

            while (studentInfo != "end of dates")
            {
                string[] arrStudentInfo = studentInfo.Split(' ');
                string stName = arrStudentInfo[0];                
                List<DateTime> dates = new List<DateTime>();
                Student student = new Student
                {
                    Name = stName,
                    Comments = new List<string>(),
                    AttDates = new List<DateTime>()

                };   
                if (arrStudentInfo.Length > 1)
                {
                    string[] datesInfo = arrStudentInfo[1].Split(',');
                    for (int i = 0; i < datesInfo.Length; i++)
                    {
                        DateTime currDate = DateTime.ParseExact(datesInfo[i], "dd/MM/yyyy", CultureInfo.InvariantCulture);
                        dates.Add(currDate);
                    }
                    if (!studentList.Select(s => s.Name).Contains(student.Name))
                    {
                        student.AttDates.AddRange(dates);
                        studentList.Add(student);
                    }
                    else
                    {
                        foreach (var person in studentList)
                        {
                            if (person.Name == student.Name)
                            {
                                person.AttDates.AddRange(dates);
                            }
                        }
                    }
                }
                else
                {
                    studentList.Add(student);
                }
                studentInfo = Console.ReadLine();
            }
            return studentList;
        }

    }
}

class Student
{
    public string Name { get; set; }
    public List<string> Comments { get; set; }
    public List<DateTime> AttDates { get; set; }
}

