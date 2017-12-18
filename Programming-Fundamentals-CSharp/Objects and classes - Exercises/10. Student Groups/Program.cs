using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Student_Groups
{
    class Student
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime RegistrationDate { get; set; }
    }
    class Town
    {
        public string Name { get; set; }
        public int SteatsCount { get; set; }
        public List<Student> Students { get; set; }
    }
    class Group
    {
        public Town Town { get; set; }
        public List<Student> Students { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Town> towns = ReadTownList();
            List<Group> groups= DistributeStudentsToGroups(towns);
            Console.WriteLine($"Created {groups.Count} groups in {towns.Count} towns:");
            foreach (var group in groups.Select(g => g.Town).OrderBy(x => x.Name))
            {
                Console.WriteLine($"{group.Name}=> {string.Join(", ", group.Students.Select(s => s.Email))}");
            }
        }

        static List<Group> DistributeStudentsToGroups(List<Town> towns)
        {
            List<Group> groups = new List<Group>();
            foreach (var town in towns)
            {
                IEnumerable<Student> students = town.Students
                .OrderBy(s => s.RegistrationDate).ThenBy(s => s.Name).ThenBy(s => s.Email);
                while (students.Any())
                {
                    var group = new Group();
                    group.Town = town;
                    group.Students = students.Take(group.Town.SteatsCount).ToList();
                    students = students.Skip(group.Town.SteatsCount);
                    groups.Add(group);
                }
            }
            return groups;
        }

        static List<Town> ReadTownList()
        {
            List<Town> towns = new List<Town>();
            Town newTown = new Town();
            string input = Console.ReadLine();
            while (input != "End")
            {
                if (input.Contains("=>"))
                {                    
                    string []townInfo = input.Split(new char[] { '=', '>' }, StringSplitOptions.RemoveEmptyEntries);
                    string townName = townInfo[0];
                    string[] seats = townInfo[1].Split(' ');
                    int seatsCount = int.Parse(seats[1]);
                    newTown = new Town
                    {
                        Name = townName,
                        SteatsCount = seatsCount,
                        Students = new List<Student>()
                    };

                }
                else
                {
                    string[] studentInfo = input.Split(new char[] { '|', ' ' }, StringSplitOptions.RemoveEmptyEntries);
                    string stName = studentInfo[0] + " " + studentInfo[1];
                    string stMail = studentInfo[2];
                    DateTime regDate = DateTime.ParseExact(studentInfo[3], "d-MMM-yyyy", CultureInfo.InvariantCulture);
                    Student newStudent = new Student
                    {
                        Name = stName,
                        Email = stMail,
                        RegistrationDate = regDate
                    };
                    newTown.Students.Add(newStudent);
                }
               

                input = Console.ReadLine();
                if (input.Contains("=>") || input.Contains("End"))
                {
                    towns.Add(newTown);
                }
            }
            return towns;
        }
    }
}
