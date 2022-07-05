import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DeleteDialogData {
  entity: string;
  confirmationString: string;
  extra?: string;
}

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationDialog implements OnInit {
  protected confirmationInput = '';

  constructor(@Inject(MAT_DIALOG_DATA) protected data: DeleteDialogData) {}

  ngOnInit(): void {}
}
