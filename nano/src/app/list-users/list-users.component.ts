import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {UsersClient} from '../../../api/src/lib/users.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListUsersParams, PaginationFormModel, PaginationResponse, User} from '../../../models/src/lib/users';
import {Router} from '@angular/router';

@Component({
    selector: 'nano-list-users',
    standalone: true,
    imports: [CommonModule, MatPaginatorModule, MatTableModule, FormsModule, ReactiveFormsModule],
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
    @ViewChild('firstPaginator') firstPaginator!: MatPaginator;
    @ViewChild('secondPaginator') secondPaginator!: MatPaginator;
    paginationForm = new FormGroup<PaginationFormModel>({
        page: new FormControl(1, {nonNullable: true}),
        per_page: new FormControl(10, {nonNullable: true})
    })

    dataSource = new MatTableDataSource();
    data: PaginationResponse | null = null;
    displayedColumns = ['firstName', 'lastName', 'email', 'avatar'];

    constructor(private usersClient: UsersClient,
                private router: Router) {
    }

    ngOnInit() {
        this.getData();
        this.paginationForm.valueChanges.subscribe(chng => {
            this.getData(chng);

        })
    }

    getData(params?: ListUsersParams) {
        this.usersClient.listUsers(params).subscribe(
            res => {
                this.data = res;
                this.dataSource = new MatTableDataSource<any>(res.data);
                this.dataSource.paginator = this.firstPaginator;
            }
        )
    }

    detail(user: User) {
        this.router.navigate(['/user', user.id], {state: user})
    }

}
