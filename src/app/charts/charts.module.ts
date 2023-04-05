import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartService } from './chart.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, ChartsRoutingModule, HttpClientModule, FormsModule],
  providers: [ChartService],
})
export class ChartsModule {}
