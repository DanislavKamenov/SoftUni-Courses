using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Teamwork_Projects
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Team> teamList = new List<Team>();

            for (int i = 0; i < n; i++)
            {
                string[] createTeam = Console.ReadLine().Split('-');
                Team newTeam = new Team();
                newTeam = new Team
                {
                    Creator = createTeam[0],
                    Members = new List<string>(),
                    Name = createTeam[1]
                };
                if (!teamList.Select(x => x.Name).Contains(createTeam[1]))
                {
                    if (!teamList.Select(c => c.Creator).Contains(createTeam[0]))
                    {                        
                        teamList.Add(newTeam);
                        Console.WriteLine($"Team {newTeam.Name} has been created by {newTeam.Creator}!");
                    }
                    else
                    {
                        Console.WriteLine($"{newTeam.Creator} cannot create another team!");
                    }
                }                
                else
                {
                    Console.WriteLine($"Team {newTeam.Name} was already created!");
                }
            }

            string assignment = Console.ReadLine();
            while (assignment != "end of assignment")
            {
                string[] assignmentArr = assignment.Split(new char[] { '-', '>' }, StringSplitOptions.RemoveEmptyEntries);
                string newUser = assignmentArr[0];
                string team = assignmentArr[1];
                if (!teamList.Select(t => t.Name).Contains(team))
                {
                    Console.WriteLine($"Team {team} does not exist!");
                }
                else if (teamList.Select(y => y.Members).Any(q => q.Contains(newUser) || teamList.Select(x => x.Creator).Contains(newUser)))
                {
                    Console.WriteLine($"Member {newUser} cannot join team {team}!");
                }
                else
                {
                    foreach (var group in teamList)
                    {
                        if (group.Name == assignmentArr[1])
                        {
                            group.Members.Add(assignmentArr[0]);
                        }
                    }
                }               
                assignment = Console.ReadLine();
            }

            foreach (var team in teamList.OrderByDescending(c => c.Members.Count).ThenBy(y => y.Name).Where(x => x.Members.Count > 0))
            {
                Console.WriteLine($"{team.Name}");
                Console.WriteLine($"- {team.Creator}");
                foreach (var member in team.Members.OrderBy(x => x))
                {
                    Console.WriteLine($"-- {member}");
                }
            }
            Console.WriteLine($"Teams to disband:");
            foreach (var team in teamList.OrderBy(c => c.Members.Count).Where(x => x.Members.Count == 0))
            {
                Console.WriteLine($"{team.Name}");
            }
        }

        class Team
        {
            public string Name { get; set; }
            public List<string> Members { get; set; }
            public string Creator { get; set; }
        }
    }
}
