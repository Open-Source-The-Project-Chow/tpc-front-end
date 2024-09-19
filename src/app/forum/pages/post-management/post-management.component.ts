import {Component, inject, OnInit} from '@angular/core';
import {Post} from "../../model/post.entity";
import {MatTableDataSource} from "@angular/material/table";
import {PostService} from "../../services/post.service";
import {PostItemComponent} from "../../components/post-item/post-item.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [
    PostItemComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.css'
})
export class PostManagementComponent implements OnInit {
  private postService: PostService = inject(PostService);
  protected dataSource: MatTableDataSource<Post> = new MatTableDataSource<Post>();

  ngOnInit(): void {
    this.getAllPosts();
  }

  private getAllPosts() {
    this.postService.getAll().subscribe((response: Post[]) => {
      this.dataSource.data = response;
    });
  }
}
