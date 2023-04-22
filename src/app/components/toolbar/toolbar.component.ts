import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PeopleTableComponent } from '../people-table';
import { SourceOfTruthKeys } from 'src/app/state-management/store';
import { ProjectStateManager } from 'src/app/app.module';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog) {
    ProjectStateManager.getEntity(SourceOfTruthKeys.USER)
      .getObservable()
      .subscribe((user) => {console.log(user)});
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(PeopleTableComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnDestroy(): void {
    ProjectStateManager.getEntity(SourceOfTruthKeys.USER).unsubscribe();
  }
}
