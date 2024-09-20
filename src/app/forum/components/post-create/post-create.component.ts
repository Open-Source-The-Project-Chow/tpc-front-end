import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Post} from "../../model/post.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

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
    MatError
  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  @Input() post!: Post;
  @Input() editMode: boolean = false;
  @Output() protected postAddRequested = new EventEmitter<Post>();
  @Output() protected postUpdateRequested = new EventEmitter<Post>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('PostForm', {static: false}) protected postForm!: NgForm;

  constructor() {
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
      this.postAddRequested.emit(this.post);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  protected onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }
}
