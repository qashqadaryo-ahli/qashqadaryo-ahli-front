import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageComponent } from "../entity/message/message.component";

const routes: Routes = [
    {
        path: '',
        component: MessageComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}