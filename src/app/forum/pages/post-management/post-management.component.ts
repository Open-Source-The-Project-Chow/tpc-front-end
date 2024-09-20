import {Component, inject, OnInit} from '@angular/core';
import {Post} from "../../model/post.entity";
import {MatTableDataSource} from "@angular/material/table";
import {PostService} from "../../services/post.service";
import {PostItemComponent} from "../../components/post-item/post-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import { MatDialog } from '@angular/material/dialog';
import { PostCreateComponent } from '../../components/post-create/post-create.component';

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
  private postService: PostService = inject(PostService);
  protected dataSource: MatTableDataSource<Post> = new MatTableDataSource<Post>();
  private dialog: MatDialog = inject(MatDialog);

  ngOnInit(): void {
    this.getAllPosts();
  }

  private getAllPosts() {
    this.postService.getAll().subscribe((response: Post[]) => {
      this.dataSource.data = response;
    });
  }
  openCreatePostDialog(): void {
    const dialogRef = this.dialog.open(PostCreateComponent, {
      width: '400px',
      data: { post: new Post({}), editMode: false },
      panelClass: 'custom-dialog-container'
    });
  }
}
