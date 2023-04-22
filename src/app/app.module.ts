import { DataSharing } from './services/data-sharing.service';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProjectState } from './state-management/models/project-state-manager';
import { SourceOfTruth } from './state-management/store';
import { HomeComponent } from './modules';


export const ProjectStateManager = new ProjectState(SourceOfTruth);

export const DataSharingState = new DataSharing()
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
