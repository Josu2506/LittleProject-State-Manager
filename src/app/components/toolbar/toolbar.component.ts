import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PeopleTableComponent } from '../people-table';
import { SourceOfTruthKeys } from 'src/app/state-management/store';
import { CommonModule } from '@angular/common';
import { ProjectState } from 'src/app/state-management/models/project-state-manager';


@Component({
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private projectStateManager: ProjectState, public dialog: MatDialog) {
    this.projectStateManager.getEntity(SourceOfTruthKeys.USER)
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
    this.projectStateManager.getEntity(SourceOfTruthKeys.USER).unsubscribe();
  }
}
