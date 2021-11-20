import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageComponent } from "../entity/message/message.component";
import { MaterialModule } from "../shared/material/material";
import { RoutingModule } from "./managment-routing.module";

@NgModule({
  declarations: [],  
  imports: [
      CommonModule,
      RoutingModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    providers:[]
  })
  export class ManagmentModule{}