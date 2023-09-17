import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataAccessService } from '../core/services/data-access/data-access.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public subForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required]
  });

  constructor(
    public dataAccess: DataAccessService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  public postSubscription(): void {
  
    this.dataAccess.postSubscription(this.subForm.value).subscribe(({
      next: () => {
        this.openSnackBar("Subskrypcja powiodla się.")
        this.subForm.reset();
      }
    })
    );
  }

  public openSnackBar(message: string): void {
    this._snackBar.open(message, 'Zamknij', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'top',
    });
  }
}
