import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {UsersClient} from '../../../api/src/lib/users.service';
import {UserDetail} from '../../../models/src/lib/users';
import {Observable} from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'nano-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<UserDetail>;
  id!: number;

  constructor(private route: ActivatedRoute, private userService: UsersClient) {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    });
  }

  ngOnInit() {
    this.user$ = this.userService.getUser(this.id);
    this.user$.subscribe(res => console.log(res));
    console.log(this.user$);
  }
}
