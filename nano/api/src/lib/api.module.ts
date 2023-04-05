import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  providers: [HttpClient]
})
export class ApiModule {}
