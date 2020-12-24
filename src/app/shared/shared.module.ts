import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ArrowComponentComponent } from '../bgslive-components/arrow-component/arrow-component.component';
import { BgsTableComponent } from "../bgslive-components/bgs-table/bgs-table.component";
import { ButtonComponentComponent } from "../bgslive-components/button-component/button-component.component";
import { InputComponent } from "../bgslive-components/input/input.component";
import { AuthorizationService } from '../core/authorization/authorization-service';
import { LocalizePipe } from '../core/localization/localize.pipe';
import { AccountService } from '../features/account/account.service';
import { PromotionComponent } from '../features/promotion/promotion.component';

@NgModule({
    declarations: [
        LocalizePipe,
        ArrowComponentComponent,
        PromotionComponent,
        InputComponent,
        ButtonComponentComponent,
        BgsTableComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        LocalizePipe,
        FormsModule,
        ArrowComponentComponent,
        PromotionComponent,
        InputComponent,
        ButtonComponentComponent,
        BgsTableComponent
    ],
    providers: [
        AuthorizationService,
        AccountService
    ]
})

export class BgsLiveSharedModule {

}