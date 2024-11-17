import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Post} from "../../model/post.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    MatLabel,
    MatInput,
    MatFormField,
    MatButton,
    MatDialogActions,
    FormsModule,
    NgIf,
    MatDialogTitle,
    MatDialogContent,
    MatError,
    MatCardActions,
    MatCardContent,
    MatCard,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  @Input() post!: Post;
  @Input() editMode: boolean = false;
  @Output() postAddRequested = new EventEmitter<Post>();
  @Output() protected postUpdateRequested = new EventEmitter<Post>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('PostForm', {static: false}) protected postForm!: NgForm;

  constructor(private dialogRef: MatDialogRef<PostCreateComponent>, private postService: PostService) {
    this.post = new Post({});
  }

  private resetEditState() {
    this.post = new Post({});
    this.postForm.reset();
  }

  private isValid = () => this.postForm.valid;

  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit() {
    if (this.isValid()) {
      if (this.isEditMode()) {
        this.postUpdateRequested.emit(this.post);
      } else {
        // Hardcode the image URL
        this.post.image = 'https://tienda.figurasperuanas.com/wp/wp-content/uploads/2023/01/Captura-de-pantalla-2023-04-17-a-las-16.51.40.png';

        this.postService.createPost(this.post).subscribe(
          response => {
            console.log('Post created successfully', response);
            this.postAddRequested.emit(response);
            this.resetEditState();
          },
          error => {
            console.error('Error creating post', error);
            alert(error); // Display the error message to the user
          }
        );
      }
    } else {
      console.error('Invalid form data');
    }
  }

  protected onClose() {
    this.dialogRef.close();
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.post.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
