import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/index'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAll()
  }

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  getAll() {
    this.userService.getAll()
    .then((res: User[]) => (this.users = res))
    .catch(err => console.log(err))
  }

}
