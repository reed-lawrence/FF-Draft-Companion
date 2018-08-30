import { Component, OnInit } from '@angular/core';
import { Player } from './player/player';
import { Team } from './team/team';
import { ConditionalFormattingService } from './services/conditional-formatting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FFDraftComparitor';

  constructor(public _formattingService: ConditionalFormattingService) { }

  allPlayers: Player[] = [{ Id: 1, Name: 'Aaron Rodgers', Team: 'GB/7', Pos: 'QB', Val: 3.8, Picked: false },
  { Id: 2, Name: 'Russell Wilson', Team: 'SEA/7', Pos: 'QB', Val: 2.5, Picked: false },
  { Id: 3, Name: 'Tom Brady', Team: 'NE/11', Pos: 'QB', Val: 2.2, Picked: false },
  { Id: 4, Name: 'Cam Newton', Team: 'CAR/4', Pos: 'QB', Val: 2, Picked: false },
  { Id: 5, Name: 'Deshaun Watson', Team: 'HOU/10', Pos: 'QB', Val: 1.4, Picked: false },
  { Id: 6, Name: 'Drew Brees', Team: 'NO/6', Pos: 'QB', Val: 1.1, Picked: false },
  { Id: 7, Name: 'Carson Wentz', Team: 'PHI/9', Pos: 'QB', Val: 0.9, Picked: false },
  { Id: 8, Name: 'Matthew Stafford', Team: 'DET/6', Pos: 'QB', Val: 0.8, Picked: false },
  { Id: 9, Name: 'Kirk Cousins', Team: 'MIN/10', Pos: 'QB', Val: 0.7, Picked: false },
  { Id: 10, Name: 'Andrew Luck', Team: 'IND/9', Pos: 'QB', Val: 0.6, Picked: false },
  { Id: 11, Name: 'Ben Roethlisberger', Team: 'PIT/7', Pos: 'QB', Val: 0.4, Picked: false },
  { Id: 12, Name: 'Alex Smith', Team: 'WAS/4', Pos: 'QB', Val: 0.3, Picked: false },
  { Id: 13, Name: 'Philip Rivers', Team: 'LAC/8', Pos: 'QB', Val: 0.2, Picked: false },
  { Id: 14, Name: 'Jimmy Garoppolo', Team: 'SF/11', Pos: 'QB', Val: 0, Picked: false },
  { Id: 15, Name: 'Matt Ryan', Team: 'ATL/8', Pos: 'QB', Val: 0, Picked: false },
  { Id: 16, Name: 'Jared Goff', Team: 'LAR/12', Pos: 'QB', Val: -0.1, Picked: false },
  { Id: 17, Name: 'Marcus Mariota', Team: 'TEN/8', Pos: 'QB', Val: -0.2, Picked: false },
  { Id: 18, Name: 'Patrick Mahomes', Team: 'KC/12', Pos: 'QB', Val: -0.3, Picked: false },
  { Id: 19, Name: 'Dak Prescott', Team: 'DAL/8', Pos: 'QB', Val: -0.3, Picked: false },
  { Id: 20, Name: 'Blake Bortles', Team: 'JAX/9', Pos: 'QB', Val: -0.7, Picked: false },
  { Id: 21, Name: 'Andy Dalton', Team: 'CIN/9', Pos: 'QB', Val: -1.3, Picked: false },
  { Id: 22, Name: 'Derek Carr', Team: 'OAK/7', Pos: 'QB', Val: -1.5, Picked: false },
  { Id: 23, Name: 'Eli Manning', Team: 'NYG/9', Pos: 'QB', Val: -1.6, Picked: false },
  { Id: 24, Name: 'Case Keenum', Team: 'DEN/10', Pos: 'QB', Val: -1.6, Picked: false },
  { Id: 25, Name: 'Ryan Tannehill', Team: 'MIA/11', Pos: 'QB', Val: -1.7, Picked: false },
  { Id: 26, Name: 'Mitchell Trubisky', Team: 'CHI/5', Pos: 'QB', Val: -1.8, Picked: false },
  { Id: 27, Name: 'Jameis Winston', Team: 'TB/5', Pos: 'QB', Val: -2.7, Picked: false },
  { Id: 28, Name: 'Joe Flacco', Team: 'BAL/10', Pos: 'QB', Val: -4.2, Picked: false },
  { Id: 29, Name: 'Tyrod Taylor', Team: 'CLE/11', Pos: 'QB', Val: -4.8, Picked: false },
  { Id: 30, Name: 'Josh Allen', Team: 'BUF/11', Pos: 'QB', Val: -6.2, Picked: false },
  { Id: 31, Name: 'Sam Darnold', Team: 'NYJ/11', Pos: 'QB', Val: -7.4, Picked: false },
  { Id: 32, Name: 'Sam Bradford', Team: 'ARI/9', Pos: 'QB', Val: -8.1, Picked: false },
  { Id: 33, Name: 'Todd Gurley', Team: 'LAR/12', Pos: 'RB', Val: 10.7, Picked: false },
  { Id: 34, Name: 'LeVeon Bell', Team: 'PIT/7', Pos: 'RB', Val: 10, Picked: false },
  { Id: 35, Name: 'Ezekiel Elliott', Team: 'DAL/8', Pos: 'RB', Val: 9.5, Picked: false },
  { Id: 36, Name: 'David Johnson', Team: 'ARI/9', Pos: 'RB', Val: 9.2, Picked: false },
  { Id: 37, Name: 'Alvin Kamara', Team: 'NO/6', Pos: 'RB', Val: 7.3, Picked: false },
  { Id: 38, Name: 'Leonard Fournette', Team: 'JAX/9', Pos: 'RB', Val: 7.1, Picked: false },
  { Id: 39, Name: 'Melvin Gordon', Team: 'LAC/8', Pos: 'RB', Val: 6.8, Picked: false },
  { Id: 40, Name: 'Saquon Barkley', Team: 'NYG/9', Pos: 'RB', Val: 6.8, Picked: false },
  { Id: 41, Name: 'Kareem Hunt', Team: 'KC/12', Pos: 'RB', Val: 6.6, Picked: false },
  { Id: 42, Name: 'Dalvin Cook', Team: 'MIN/10', Pos: 'RB', Val: 6.5, Picked: false },
  { Id: 43, Name: 'Devonta Freeman', Team: 'ATL/8', Pos: 'RB', Val: 5.2, Picked: false },
  { Id: 44, Name: 'Christian McCaffrey', Team: 'CAR/4', Pos: 'RB', Val: 4.8, Picked: false },
  { Id: 45, Name: 'Jordan Howard', Team: 'CHI/5', Pos: 'RB', Val: 4.5, Picked: false },
  { Id: 46, Name: 'Jerick McKinnon', Team: 'SF/11', Pos: 'RB', Val: 4.3, Picked: false },
  { Id: 47, Name: 'Joe Mixon', Team: 'CIN/9', Pos: 'RB', Val: 4.3, Picked: false },
  { Id: 48, Name: 'LeSean McCoy', Team: 'BUF/11', Pos: 'RB', Val: 3.8, Picked: false },
  { Id: 49, Name: 'Alex Collins', Team: 'BAL/10', Pos: 'RB', Val: 3.6, Picked: false },
  { Id: 50, Name: 'Jay Ajayi', Team: 'PHI/9', Pos: 'RB', Val: 3.1, Picked: false },
  { Id: 51, Name: 'Derrick Henry', Team: 'TEN/8', Pos: 'RB', Val: 3, Picked: false },
  { Id: 52, Name: 'Kenyan Drake', Team: 'MIA/11', Pos: 'RB', Val: 3, Picked: false },
  { Id: 53, Name: 'Lamar Miller', Team: 'HOU/10', Pos: 'RB', Val: 2.6, Picked: false },
  { Id: 54, Name: 'Mark Ingram', Team: 'NO/6', Pos: 'RB', Val: 2.3, Picked: false },
  { Id: 55, Name: 'Royce Freeman', Team: 'DEN/10', Pos: 'RB', Val: 2.2, Picked: false },
  { Id: 56, Name: 'Marshawn Lynch', Team: 'OAK/7', Pos: 'RB', Val: 2, Picked: false },
  { Id: 57, Name: 'Dion Lewis', Team: 'TEN/8', Pos: 'RB', Val: 1.7, Picked: false },
  { Id: 58, Name: 'Tevin Coleman', Team: 'ATL/8', Pos: 'RB', Val: 1.7, Picked: false },
  { Id: 59, Name: 'Rex Burkhead', Team: 'NE/11', Pos: 'RB', Val: 1.6, Picked: false },
  { Id: 60, Name: 'Isaiah Crowell', Team: 'NYJ/11', Pos: 'RB', Val: 1.2, Picked: false },
  { Id: 61, Name: 'Carlos Hyde', Team: 'CLE/11', Pos: 'RB', Val: 1.1, Picked: false },
  { Id: 62, Name: 'Kerryon Johnson', Team: 'DET/6', Pos: 'RB', Val: 0.9, Picked: false },
  { Id: 63, Name: 'Jamaal Williams', Team: 'GB/7', Pos: 'RB', Val: 0.8, Picked: false },
  { Id: 64, Name: 'Sony Michel', Team: 'NE/11', Pos: 'RB', Val: 0.7, Picked: false },
  { Id: 65, Name: 'Marlon Mack', Team: 'IND/9', Pos: 'RB', Val: 0.7, Picked: false },
  { Id: 66, Name: 'Rashaad Penny', Team: 'SEA/7', Pos: 'RB', Val: 0.6, Picked: false },
  { Id: 67, Name: 'Ronald Jones', Team: 'TB/5', Pos: 'RB', Val: 0, Picked: false },
  { Id: 68, Name: 'Tarik Cohen', Team: 'CHI/5', Pos: 'RB', Val: 0, Picked: false },
  { Id: 69, Name: 'Peyton Barber', Team: 'TB/5', Pos: 'RB', Val: 0, Picked: false },
  { Id: 70, Name: 'Chris Thompson', Team: 'WAS/4', Pos: 'RB', Val: -0.1, Picked: false },
  { Id: 71, Name: 'Chris Carson', Team: 'SEA/7', Pos: 'RB', Val: -0.1, Picked: false },
  { Id: 72, Name: 'Duke Johnson', Team: 'CLE/11', Pos: 'RB', Val: -0.2, Picked: false },
  { Id: 73, Name: 'Devontae Booker', Team: 'DEN/10', Pos: 'RB', Val: -0.4, Picked: false },
  { Id: 74, Name: 'Bilal Powell', Team: 'NYJ/11', Pos: 'RB', Val: -0.5, Picked: false },
  { Id: 75, Name: 'Giovani Bernard', Team: 'CIN/9', Pos: 'RB', Val: -0.5, Picked: false },
  { Id: 76, Name: 'CJ Anderson', Team: 'CAR/4', Pos: 'RB', Val: -0.8, Picked: false },
  { Id: 77, Name: 'Latavius Murray', Team: 'MIN/10', Pos: 'RB', Val: -1.1, Picked: false },
  { Id: 78, Name: 'James White', Team: 'NE/11', Pos: 'RB', Val: -1.1, Picked: false },
  { Id: 79, Name: 'Ty Montgomery', Team: 'GB/7', Pos: 'RB', Val: -1.1, Picked: false },
  { Id: 80, Name: 'Corey Clement', Team: 'PHI/9', Pos: 'RB', Val: -1.2, Picked: false },
  { Id: 81, Name: 'Matt Breida', Team: 'SF/11', Pos: 'RB', Val: -1.4, Picked: false },
  { Id: 82, Name: 'Theo Riddick', Team: 'DET/6', Pos: 'RB', Val: -1.6, Picked: false },
  { Id: 83, Name: 'Frank Gore', Team: 'MIA/11', Pos: 'RB', Val: -1.7, Picked: false },
  { Id: 84, Name: 'Doug Martin', Team: 'OAK/7', Pos: 'RB', Val: -1.8, Picked: false },
  { Id: 85, Name: 'Javorius Allen', Team: 'BAL/10', Pos: 'RB', Val: -1.8, Picked: false },
  { Id: 86, Name: 'Nick Chubb', Team: 'CLE/11', Pos: 'RB', Val: -1.8, Picked: false },
  { Id: 87, Name: 'Austin Ekeler', Team: 'LAC/8', Pos: 'RB', Val: -1.8, Picked: false },
  { Id: 88, Name: 'Aaron Jones', Team: 'GB/7', Pos: 'RB', Val: -1.8, Picked: false },
  { Id: 89, Name: 'Chris Ivory', Team: 'BUF/11', Pos: 'RB', Val: -1.9, Picked: false },
  { Id: 90, Name: 'LeGarrette Blount', Team: 'DET/6', Pos: 'RB', Val: -2, Picked: false },
  { Id: 91, Name: 'DOnta Foreman', Team: 'HOU/10', Pos: 'RB', Val: -2.1, Picked: false },
  { Id: 92, Name: 'TJ Yeldon', Team: 'JAX/9', Pos: 'RB', Val: -2.4, Picked: false },
  { Id: 93, Name: 'Antonio Brown', Team: 'PIT/7', Pos: 'WR', Val: 6.8, Picked: false },
  { Id: 94, Name: 'DeAndre Hopkins', Team: 'HOU/10', Pos: 'WR', Val: 5.8, Picked: false },
  { Id: 95, Name: 'Odell Beckham', Team: 'NYG/9', Pos: 'WR', Val: 5.4, Picked: false },
  { Id: 96, Name: 'Julio Jones', Team: 'ATL/8', Pos: 'WR', Val: 5.2, Picked: false },
  { Id: 97, Name: 'Michael Thomas', Team: 'NO/6', Pos: 'WR', Val: 4.3, Picked: false },
  { Id: 98, Name: 'Keenan Allen', Team: 'LAC/8', Pos: 'WR', Val: 4.3, Picked: false },
  { Id: 99, Name: 'Davante Adams', Team: 'GB/7', Pos: 'WR', Val: 4.1, Picked: false },
  { Id: 100, Name: 'AJ Green', Team: 'CIN/9', Pos: 'WR', Val: 4.1, Picked: false },
  { Id: 101, Name: 'Mike Evans', Team: 'TB/5', Pos: 'WR', Val: 3.5, Picked: false },
  { Id: 102, Name: 'TY Hilton', Team: 'IND/9', Pos: 'WR', Val: 3.3, Picked: false },
  { Id: 103, Name: 'Tyreek Hill', Team: 'KC/12', Pos: 'WR', Val: 3, Picked: false },
  { Id: 104, Name: 'Adam Thielen', Team: 'MIN/10', Pos: 'WR', Val: 3, Picked: false },
  { Id: 105, Name: 'Doug Baldwin', Team: 'SEA/7', Pos: 'WR', Val: 2.9, Picked: false },
  { Id: 106, Name: 'Stefon Diggs', Team: 'MIN/10', Pos: 'WR', Val: 2.8, Picked: false },
  { Id: 107, Name: 'Amari Cooper', Team: 'OAK/7', Pos: 'WR', Val: 2.7, Picked: false },
  { Id: 108, Name: 'JuJu Smith-Schuster', Team: 'PIT/7', Pos: 'WR', Val: 2.5, Picked: false },
  { Id: 109, Name: 'Larry Fitzgerald', Team: 'ARI/9', Pos: 'WR', Val: 2.3, Picked: false },
  { Id: 110, Name: 'Marvin Jones', Team: 'DET/6', Pos: 'WR', Val: 2.3, Picked: false },
  { Id: 111, Name: 'Allen Robinson', Team: 'CHI/5', Pos: 'WR', Val: 2.1, Picked: false },
  { Id: 112, Name: 'Demaryius Thomas', Team: 'DEN/10', Pos: 'WR', Val: 2.1, Picked: false },
  { Id: 113, Name: 'Brandin Cooks', Team: 'LAR/12', Pos: 'WR', Val: 2, Picked: false },
  { Id: 114, Name: 'Golden Tate', Team: 'DET/6', Pos: 'WR', Val: 1.8, Picked: false },
  { Id: 115, Name: 'Chris Hogan', Team: 'NE/11', Pos: 'WR', Val: 1.6, Picked: false },
  { Id: 116, Name: 'Jarvis Landry', Team: 'CLE/11', Pos: 'WR', Val: 1.6, Picked: false },
  { Id: 117, Name: 'Alshon Jeffery', Team: 'PHI/9', Pos: 'WR', Val: 1.6, Picked: false },
  { Id: 118, Name: 'Josh Gordon', Team: 'CLE/11', Pos: 'WR', Val: 1.5, Picked: false },
  { Id: 119, Name: 'Corey Davis', Team: 'TEN/8', Pos: 'WR', Val: 1.2, Picked: false },
  { Id: 120, Name: 'Sammy Watkins', Team: 'KC/12', Pos: 'WR', Val: 1.2, Picked: false },
  { Id: 121, Name: 'Michael Crabtree', Team: 'BAL/10', Pos: 'WR', Val: 1.1, Picked: false },
  { Id: 122, Name: 'Robby Anderson', Team: 'NYJ/11', Pos: 'WR', Val: 1.1, Picked: false },
  { Id: 123, Name: 'Marquise Goodwin', Team: 'SF/11', Pos: 'WR', Val: 1.1, Picked: false },
  { Id: 124, Name: 'Emmanuel Sanders', Team: 'DEN/10', Pos: 'WR', Val: 0.9, Picked: false },
  { Id: 125, Name: 'Robert Woods', Team: 'LAR/12', Pos: 'WR', Val: 0.9, Picked: false },
  { Id: 126, Name: 'Cooper Kupp', Team: 'LAR/12', Pos: 'WR', Val: 0.8, Picked: false },
  { Id: 127, Name: 'Devin Funchess', Team: 'CAR/4', Pos: 'WR', Val: 0.8, Picked: false },
  { Id: 128, Name: 'Pierre Garcon', Team: 'SF/11', Pos: 'WR', Val: 0.7, Picked: false },
  { Id: 129, Name: 'Kenny Stills', Team: 'MIA/11', Pos: 'WR', Val: 0.6, Picked: false },
  { Id: 130, Name: 'Will Fuller', Team: 'HOU/10', Pos: 'WR', Val: 0.4, Picked: false },
  { Id: 131, Name: 'Jamison Crowder', Team: 'WAS/4', Pos: 'WR', Val: 0.3, Picked: false },
  { Id: 132, Name: 'Nelson Agholor', Team: 'PHI/9', Pos: 'WR', Val: 0.3, Picked: false },
  { Id: 133, Name: 'Randall Cobb', Team: 'GB/7', Pos: 'WR', Val: 0.3, Picked: false },
  { Id: 134, Name: 'Sterling Shepard', Team: 'NYG/9', Pos: 'WR', Val: 0.2, Picked: false },
  { Id: 135, Name: 'Kelvin Benjamin', Team: 'BUF/11', Pos: 'WR', Val: 0.2, Picked: false },
  { Id: 136, Name: 'Jordy Nelson', Team: 'OAK/7', Pos: 'WR', Val: 0.1, Picked: false },
  { Id: 137, Name: 'Julian Edelman', Team: 'NE/11', Pos: 'WR', Val: 0, Picked: false },
  { Id: 138, Name: 'Marqise Lee', Team: 'JAX/9', Pos: 'WR', Val: -0.1, Picked: false },
  { Id: 139, Name: 'Kenny Golladay', Team: 'DET/6', Pos: 'WR', Val: -0.2, Picked: false },
  { Id: 140, Name: 'DeVante Parker', Team: 'MIA/11', Pos: 'WR', Val: -0.3, Picked: false },
  { Id: 141, Name: 'Allen Hurns', Team: 'DAL/8', Pos: 'WR', Val: -0.4, Picked: false },
  { Id: 142, Name: 'Rishard Matthews', Team: 'TEN/8', Pos: 'WR', Val: -0.5, Picked: false },
  { Id: 143, Name: 'Tyrell Williams', Team: 'LAC/8', Pos: 'WR', Val: -0.5, Picked: false },
  { Id: 144, Name: 'DeSean Jackson', Team: 'TB/5', Pos: 'WR', Val: -0.5, Picked: false },
  { Id: 145, Name: 'Josh Doctson', Team: 'WAS/4', Pos: 'WR', Val: -0.6, Picked: false },
  { Id: 146, Name: 'Tyler Lockett', Team: 'SEA/7', Pos: 'WR', Val: -0.6, Picked: false },
  { Id: 147, Name: 'Mohamed Sanu', Team: 'ATL/8', Pos: 'WR', Val: -0.8, Picked: false },
  { Id: 148, Name: 'DJ Moore', Team: 'CAR/4', Pos: 'WR', Val: -0.8, Picked: false },
  { Id: 149, Name: 'Ted Ginn', Team: 'NO/6', Pos: 'WR', Val: -0.8, Picked: false },
  { Id: 150, Name: 'Paul Richardson', Team: 'WAS/4', Pos: 'WR', Val: -1, Picked: false },
  { Id: 151, Name: 'John Brown', Team: 'BAL/10', Pos: 'WR', Val: -1, Picked: false },
  { Id: 152, Name: 'Calvin Ridley', Team: 'ATL/8', Pos: 'WR', Val: -1.1, Picked: false },
  { Id: 153, Name: 'Rob Gronkowski', Team: 'NE/11', Pos: 'TE', Val: 5, Picked: false },
  { Id: 154, Name: 'Travis Kelce', Team: 'KC/12', Pos: 'TE', Val: 3.6, Picked: false },
  { Id: 155, Name: 'Zach Ertz', Team: 'PHI/9', Pos: 'TE', Val: 3, Picked: false },
  { Id: 156, Name: 'Greg Olsen', Team: 'CAR/4', Pos: 'TE', Val: 1.9, Picked: false },
  { Id: 157, Name: 'Jimmy Graham', Team: 'GB/7', Pos: 'TE', Val: 1.8, Picked: false },
  { Id: 158, Name: 'Evan Engram', Team: 'NYG/9', Pos: 'TE', Val: 1.7, Picked: false },
  { Id: 159, Name: 'Delanie Walker', Team: 'TEN/8', Pos: 'TE', Val: 1.5, Picked: false },
  { Id: 160, Name: 'Kyle Rudolph', Team: 'MIN/10', Pos: 'TE', Val: 1.1, Picked: false },
  { Id: 161, Name: 'Trey Burton', Team: 'CHI/5', Pos: 'TE', Val: 0.7, Picked: false },
  { Id: 162, Name: 'Jordan Reed', Team: 'WAS/4', Pos: 'TE', Val: 0.6, Picked: false },
  { Id: 163, Name: 'Jack Doyle', Team: 'IND/9', Pos: 'TE', Val: 0.4, Picked: false },
  { Id: 164, Name: 'David Njoku', Team: 'CLE/11', Pos: 'TE', Val: 0.1, Picked: false },
  { Id: 165, Name: 'George Kittle', Team: 'SF/11', Pos: 'TE', Val: -0.1, Picked: false },
  { Id: 166, Name: 'OJ Howard', Team: 'TB/5', Pos: 'TE', Val: -0.1, Picked: false },
  { Id: 167, Name: 'Jared Cook', Team: 'OAK/7', Pos: 'TE', Val: -0.2, Picked: false },
  { Id: 168, Name: 'Cameron Brate', Team: 'TB/5', Pos: 'TE', Val: -0.4, Picked: false },
  { Id: 169, Name: 'Tyler Eifert', Team: 'CIN/9', Pos: 'TE', Val: -0.4, Picked: false },
  { Id: 170, Name: 'Eric Ebron', Team: 'IND/9', Pos: 'TE', Val: -0.4, Picked: false },
  { Id: 171, Name: 'Charles Clay', Team: 'BUF/11', Pos: 'TE', Val: -0.5, Picked: false },
  { Id: 172, Name: 'Austin Hooper', Team: 'ATL/8', Pos: 'TE', Val: -0.6, Picked: false },
  { Id: 173, Name: 'Ricky Seals-Jones', Team: 'ARI/9', Pos: 'TE', Val: -0.8, Picked: false },
  { Id: 174, Name: 'Ben Watson', Team: 'NO/6', Pos: 'TE', Val: -0.8, Picked: false },
  { Id: 175, Name: 'Vance McDonald', Team: 'PIT/7', Pos: 'TE', Val: -0.8, Picked: false },
  { Id: 176, Name: 'Austin Seferian-Jenkins', Team: 'JAX/9', Pos: 'TE', Val: -0.8, Picked: false },
  { Id: 177, Name: 'Hayden Hurst', Team: 'BAL/10', Pos: 'TE', Val: -1.3, Picked: false }
  ];

  allPlayersFiltered: Player[] = [];
  playerFilter: Player = {
    Id: 0,
    Name: '',
    Pos: '',
    Team: '',
    Val: 0,
    Picked: false
  };
  allTeams: Team[] = [];
  teamIdIndex = 1;
  currentDraftingTeamIndex = 0;
  currentDraftingTeam: Team = null;

  pickOrder: number[] = [0, 1];
  pickIndex = 0;
  draftStyle = 'snake';

  globalQbAvg = 0;
  globalRbAvg = 0;
  globalTeAvg = 0;
  globalWrAvg = 0;
  globalStarterAvg = 0;
  globalBeAvg = 0;
  maxPlayerVal = 0;
  minPlayerVal = 100;
  conditionalColorArray = [];

  toggleSortVal = 'none';
  toggleSortName = 'none';


  NextPick() {
    console.log('Next Pick called');
    this.pickIndex++;
    this.currentDraftingTeamIndex = this.pickOrder[this.pickIndex];
    this.currentDraftingTeam = this.allTeams[this.currentDraftingTeamIndex];
  }

  SetToPick(teamId: number) {
    for (let i = 0; i < this.allTeams.length; i++) {
      this.allTeams[i].Picking = false;
      if (this.allTeams[i].Id === teamId) {
        this.allTeams[i].Picking = true;
        this.currentDraftingTeamIndex = i;
        this.currentDraftingTeam = this.allTeams[i];
      }
    }
  }

  SetNameFilter(nameFilter: string) {
    console.log('New name filter ' + nameFilter);
    this.playerFilter.Name = nameFilter.toLowerCase();
    this.FilterPlayers();
  }

  SetPosFilter(posFilter: string) {
    this.playerFilter.Pos = posFilter;
    this.FilterPlayers();
    if (this.toggleSortVal !== 'none') {
      this.SortPlayersByValue(this.toggleSortVal);
    } else if (this.toggleSortName !== 'none') {
      this.SortPlayersByName(this.toggleSortName);
    }
  }

  FilterPlayers() {
    this.allPlayersFiltered = this.allPlayers.filter(p =>
      (p.Name.toLocaleLowerCase().indexOf(this.playerFilter.Name) !== -1
        && p.Pos.indexOf(this.playerFilter.Pos) !== -1)
    );
  }

  // valueArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3.2, 8.6, 5.3];
  ngOnInit() {
    // this.AddTeam();
    // this.AddTeam();
    for (let i = 0; i < 12; i++) {
      this.AddTeam();
    }

    this.SetToPick(1);
    this.SetPosFilter('');
    console.log(this.GetBye('NYG/7'));

    for (let i = 0; i < this.allPlayers.length; i++) {
      if (this.allPlayers[i].Val > this.maxPlayerVal) {
        this.maxPlayerVal = this.allPlayers[i].Val;
      }

      if (this.allPlayers[i].Val < this.minPlayerVal) {
        this.minPlayerVal = this.allPlayers[i].Val;
      }
    }

    this.conditionalColorArray = this._formattingService.generateThreeWayGradient('#f8696b', '#ffeb84', '#63be7b', 10);

    console.log(this.conditionalColorArray);

  }

  AddTeam() {
    this.allTeams.push({
      Id: this.teamIdIndex,
      Picking: false,
      OwnerName: 'Player ' + (this.allTeams.length + 1),
      QBs: [],
      RBs: [],
      WRs: [],
      TEs: [],
      BE: []
    });
    this.teamIdIndex++;
  }

  PickPlayer(pickedPlayerId: number) {
    const pickingTeam = this.allTeams[this.currentDraftingTeamIndex];
    const teamIndex = this.allPlayers.findIndex(p => p.Id === pickedPlayerId);
    const pickedPlayer = this.allPlayers[teamIndex];

    if (pickedPlayer.Picked === false) {
      this.allPlayers[teamIndex].Picked = true;
      if (pickedPlayer.Pos === 'QB') {
        if (pickingTeam.QBs.length < 1) {
          this.allTeams[this.currentDraftingTeamIndex].QBs.push(pickedPlayer);
        } else {
          this.allTeams[this.currentDraftingTeamIndex].BE.push(pickedPlayer);
        }
      } else if (pickedPlayer.Pos === 'RB') {
        if (pickingTeam.RBs.length < 2) {
          this.allTeams[this.currentDraftingTeamIndex].RBs.push(pickedPlayer);
        } else {
          this.allTeams[this.currentDraftingTeamIndex].BE.push(pickedPlayer);
        }
      } else if (pickedPlayer.Pos === 'WR') {
        if (pickingTeam.WRs.length < 3) {
          this.allTeams[this.currentDraftingTeamIndex].WRs.push(pickedPlayer);
        } else {
          this.allTeams[this.currentDraftingTeamIndex].BE.push(pickedPlayer);
        }
      } else if (pickedPlayer.Pos === 'TE') {
        if (pickingTeam.TEs.length < 1) {
          this.allTeams[this.currentDraftingTeamIndex].TEs.push(pickedPlayer);
        } else {
          this.allTeams[this.currentDraftingTeamIndex].BE.push(pickedPlayer);
        }
      }
      this.GetAllTeamPlayerAverage_Starters();
      console.log(this.allTeams[this.currentDraftingTeamIndex]);
    }
  }

  RemovePlayer(pickedPlayerId: number, teamId: number) {
    const teamIndex = this.allTeams.findIndex(t => t.Id === teamId);
    const qbIndex = this.allTeams[teamIndex].QBs.findIndex(p => p.Id === pickedPlayerId);
    const rbIndex = this.allTeams[teamIndex].RBs.findIndex(p => p.Id === pickedPlayerId);
    const wrIndex = this.allTeams[teamIndex].WRs.findIndex(p => p.Id === pickedPlayerId);
    const teIndex = this.allTeams[teamIndex].TEs.findIndex(p => p.Id === pickedPlayerId);
    const beIndex = this.allTeams[teamIndex].BE.findIndex(p => p.Id === pickedPlayerId);
    const playerIndex = this.allPlayers.findIndex(p => p.Id === pickedPlayerId);

    if (qbIndex !== -1) {
      this.allTeams[teamIndex].QBs.splice(qbIndex, 1);
    } else if (rbIndex !== -1) {
      this.allTeams[teamIndex].RBs.splice(rbIndex, 1);
    } else if (wrIndex !== -1) {
      this.allTeams[teamIndex].WRs.splice(wrIndex, 1);
    } else if (teIndex !== -1) {
      this.allTeams[teamIndex].TEs.splice(teIndex, 1);
    } else if (beIndex !== -1) {
      this.allTeams[teamIndex].BE.splice(beIndex, 1);
    }

    this.allPlayers[playerIndex].Picked = false;
    this.GetAllTeamPlayerAverage_Starters();
  }

  ToggleSortPlayersByValue() {
    if (this.toggleSortVal === 'none' || this.toggleSortVal === 'asc') {
      this.SortPlayersByValue('desc');
    } else if (this.toggleSortVal === 'desc') {
      this.SortPlayersByValue('asc');
    }
  }

  SortPlayersByValue(sortStyle: string) {
    this.toggleSortName = 'none';
    console.log('SortPlayersByValue');
    if (sortStyle === 'asc') {
      this.allPlayersFiltered.sort((a, b) => {
        if (a.Val > b.Val) {
          return 1;
        } else if (a.Val < b.Val) {
          return -1;
        } else {
          return 0;
        }
      });
      this.toggleSortVal = 'asc';
    } else if (sortStyle === 'desc') {
      this.allPlayersFiltered.sort((a, b) => {
        if (a.Val > b.Val) {
          return -1;
        } else if (a.Val < b.Val) {
          return 1;
        } else {
          return 0;
        }
      });
      this.toggleSortVal = 'desc';
    }
  }

  IsCuff(player: Player): boolean {
    if (this.currentDraftingTeam !== null && this.currentDraftingTeam.RBs !== null) {
      if (this.currentDraftingTeam.RBs.findIndex(p => p.Id === player.Id) !== -1) {
        return false;
      }
      if (this.currentDraftingTeam.RBs.findIndex(p =>
        (this.GetTeam(p.Team) === this.GetTeam(player.Team) && (p.Pos === player.Pos))) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  }

  SameBye(player: Player): boolean {
    if (player.Pos === 'QB' && this.currentDraftingTeam.QBs.length > 0) {
      if (this.currentDraftingTeam.QBs.findIndex(p => this.GetBye(p.Team) === this.GetBye(player.Team)) !== -1) {
        return true;
      } else {
        return false;
      }
    } else if (player.Pos === 'RB' && this.currentDraftingTeam.RBs.length > 0) {
      if (this.currentDraftingTeam.RBs.findIndex(p => this.GetBye(p.Team) === this.GetBye(player.Team)) !== -1) {
        return true;
      } else {
        return false;
      }
    } else if (player.Pos === 'WR' && this.currentDraftingTeam.WRs.length > 0) {
      if (this.currentDraftingTeam.WRs.findIndex(p => this.GetBye(p.Team) === this.GetBye(player.Team)) !== -1) {
        return true;
      } else {
        return false;
      }
    } else if (player.Pos === 'TE' && this.currentDraftingTeam.TEs.length > 0) {
      if (this.currentDraftingTeam.TEs.findIndex(p => this.GetBye(p.Team) === this.GetBye(player.Team)) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  }

  GetTotalPositionPoints(players: Player[]) {
    let sum = 0;
    for (let i = 0; i < players.length; i++) {
      sum += players[i].Val;
    }
    return sum;
  }

  GetTeam(playerTeamByeString: string): string {
    const slashIndex = playerTeamByeString.indexOf('/');
    return playerTeamByeString.substring(0, slashIndex);
  }

  GetBye(playerTeamByeString: string): number {
    const slashIndex = playerTeamByeString.indexOf('/');
    // console.log(playerTeamByeString.substring(slashIndex + 1, playerTeamByeString.length));
    // tslint:disable-next-line:radix
    return parseInt(playerTeamByeString.substring(slashIndex + 1, playerTeamByeString.length));
  }

  ToggleSortPlayersByName() {
    if (this.toggleSortName === 'none' || this.toggleSortName === 'asc') {
      this.SortPlayersByName('desc');
    } else if (this.toggleSortName === 'desc') {
      this.SortPlayersByName('asc');
    }
  }

  SortPlayersByName(sortStyle: string) {
    console.log('SortPlayersByName called');
    this.toggleSortVal = 'none';
    if (sortStyle === 'desc') {
      this.allPlayersFiltered.sort((a, b) => {
        if (a.Name > b.Name) {
          return 1;
        } else if (a.Name < b.Name) {
          return -1;
        } else {
          return 0;
        }
      });
      this.toggleSortName = 'desc';
    } else if (sortStyle === 'asc') {
      this.allPlayersFiltered.sort((a, b) => {
        if (a.Name > b.Name) {
          return -1;
        } else if (a.Name < b.Name) {
          return 1;
        } else {
          return 0;
        }
      });
      this.toggleSortName = 'asc';
    }

  }

  GetAllTeamPlayerAverage_Starters() {
    let QBsum = 0;
    let RBsum = 0;
    let WRsum = 0;
    let TEsum = 0;
    let BEsum = 0;

    const numTeams = this.allTeams.length;
    for (let i = 0; i < this.allTeams.length; i++) {
      if (this.allTeams[i].QBs.length > 0) {
        for (let j = 0; j < this.allTeams[i].QBs.length; j++) {
          QBsum += this.allTeams[i].QBs[j].Val;
        }
      }
      if (this.allTeams[i].RBs.length > 0) {
        for (let j = 0; j < this.allTeams[i].RBs.length; j++) {
          RBsum += this.allTeams[i].RBs[j].Val;
        }
      }

      if (this.allTeams[i].WRs.length > 0) {
        for (let j = 0; j < this.allTeams[i].WRs.length; j++) {
          WRsum += this.allTeams[i].WRs[j].Val;
        }
      }

      if (this.allTeams[i].TEs.length > 0) {
        for (let j = 0; j < this.allTeams[i].TEs.length; j++) {
          TEsum += this.allTeams[i].TEs[j].Val;
        }
      }

      if (this.allTeams[i].BE.length > 0) {
        for (let j = 0; j < this.allTeams[i].BE.length; j++) {
          BEsum += this.allTeams[i].BE[j].Val;
        }
      }
    }
    this.globalQbAvg = QBsum / numTeams;
    this.globalRbAvg = RBsum / numTeams;
    this.globalWrAvg = WRsum / numTeams;
    this.globalTeAvg = TEsum / numTeams;
    this.globalBeAvg = BEsum / numTeams;
    this.globalStarterAvg = this.globalQbAvg + this.globalRbAvg + this.globalWrAvg + this.globalTeAvg;
  }


}
