import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CardConfig } from '../../../interfaces/card.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit {
  public cardConfigForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: DialogRef<CardConfig>,
    @Inject(DIALOG_DATA) private data: CardConfig
  ) {}

  ngOnInit(): void {
    this.cardConfigForm = this.fb.group({
      title: [this.data.title, Validators.required],
      description: [this.data.description, Validators.required],
    });
  }

  public onConfirm(): void {
    const value: CardConfig = this.cardConfigForm.value;
    this.dialogRef.close(value);
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}
