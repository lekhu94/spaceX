import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaselayoutComponent } from './baselayout.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { LaunchesComponent } from './launches/launches.component';

const routes: Routes = [
    {
        path: '',
        component: BaselayoutComponent,
        children: [
            {path: '', component: LaunchesComponent},
            {path: ':id', component: LaunchesComponent}
        ]
    }
]

@NgModule({
    declarations: [
        BaselayoutComponent,
        FilterbarComponent,
        LaunchesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
})

export class BaselayoutModule { }
