import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {Post} from "../../model/post.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {PostService} from "../../services/post.service";
import {PostCreateComponent} from "../../components/post-create/post-create.component";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-post-management',
  standalone: true,
  imports: [
    PostCreateComponent,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatIcon,
    MatHeaderRowDef,
    MatRowDef,
    NgClass,
    MatPaginator,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatSortHeader,
    MatSort
  ],
  templateUrl: './post-management.component.html',
  styleUrl: './post-management.component.css'
})
export class PostManagementComponent implements OnInit,AfterViewInit{

  protected postData!: Post;
  protected columnsToDisplay: string[] = ['id', 'userName','title', 'date', 'content', 'actions'];
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false})
  protected sort!: MatSort;
  protected editMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;
  private postService: PostService = inject(PostService);

    constructor() {
      this.editMode = false;
      this.postData = new Post({});
      this.dataSource = new MatTableDataSource();
      console.log(this.postData);
    }
    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    ngOnInit(): void {
      this.getAllPosts();
    }
  protected onEditItem(item: Post) {
    this.editMode = true;
    this.postData = item;
  }
  protected onDeleteItem(item: Post) {
    this.deletePost(item.id);
  }
  protected onCancelRequested() {
    this.resetEditState();
    this.getAllPosts();
  }

  protected onPostAddRequested(item: Post) {
    this.postData = item;
    this.createPost();
    this.resetEditState()
  }

  protected onPostUpdateRequested(item: Post) {
    this.postData = item;
    this.updatePost();
    this.resetEditState();
  }
  private resetEditState(): void {
    this.postData = new Post({});
    this.editMode = false;
  }
    private getAllPosts() {
      this.postService.getAll().subscribe((response: Array<Post>) => this.dataSource.data = response);
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
        let index = this.dataSource.data.findIndex((post: Post) => post.id === response.id);
        this.dataSource.data[index] = response;
        this.dataSource.data = this.dataSource.data;
      });
  }
  private deletePost(id: number) {
    this.postService.delete(id).subscribe(() => {
      this.dataSource.data=this.dataSource.data.filter((post: Post) => post.id !== id);
    });
  }
}
