import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Post} from "../../model/post.entity";
import {MatTableDataSource} from "@angular/material/table";
import {PostService} from "../../services/post.service";
import {PostItemComponent} from "../../components/post-item/post-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import { MatDialog } from '@angular/material/dialog';
import { PostCreateComponent } from '../../components/post-create/post-create.component';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [
    PostItemComponent,
    NgIf,
    NgForOf,
    MatIcon,
    MatIconButton,
    MatButton
  ],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.css'
})
export class PostManagementComponent implements OnInit {
  protected postData!: Post;
  private postService: PostService = inject(PostService);
  protected dataSource: MatTableDataSource<Post> = new MatTableDataSource<Post>();
  private dialog: MatDialog = inject(MatDialog);
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;
  protected editMode: boolean = false;

  constructor() {
    this.editMode = false;
    this.postData = new Post({});
    this.dataSource = new MatTableDataSource();
    console.log(this.postService);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllPosts();
  }

  private getAllPosts() {
    this.postService.getAll().subscribe((response: Post[]) => {
      this.dataSource.data = response;
    });
  }
  protected onPostAddRequested(item: Post) {
    this.postData = item;
    this.createPost();
    this.resetEditState();
  }
  protected onPostUpdateRequested(item: Post) {
    this.postData= item;
    this.updatePost();
    this.resetEditState();
  }
  private resetEditState(): void {
    this.postData = new Post({});
    this.editMode = false;
  }
  openCreatePostDialog(): void {
    const dialogRef = this.dialog.open(PostCreateComponent, {
      width: '50%',
      height: '40%',
      data: { post: new Post({}), editMode: false },
      disableClose: false,
      panelClass: 'custom-dialog-container'
    });
  }
  private createPost() {
    this.postService.create(this.postData).subscribe((response: Post) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }
  private updatePost() {
    let postToUpdate = this.postData;
    this.postService.update(postToUpdate.id, postToUpdate).subscribe((response: Post) => {
      let index = this.dataSource.data.findIndex((post: Post) => post.id === post.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    });
  }
}
