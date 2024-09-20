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
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  @Input() post!: Post;
  @Input() editMode: boolean = false;
  @Output() protected postAddRequested = new EventEmitter<Post>();
  @Output() protected postUpdateRequested = new EventEmitter<Post>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('PostForm', {static: false}) protected postForm!: NgForm;

  constructor(private dialogRef: MatDialogRef<PostCreateComponent>) {
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
      let emitter = this.isEditMode()? this.postUpdateRequested : this.postAddRequested;
      emitter.emit(this.post);
      this.resetEditState();
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
      console.log('Archivo seleccionado:', file);
    }
  }
}
