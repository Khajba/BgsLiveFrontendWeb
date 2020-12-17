import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ArrowComponentComponent } from '../bgslive-components/arrow-component/arrow-component.component';
import { CarouselComponent } from '../bgslive-components/carousel/carousel.component';
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
        InputComponent
    ],
    imports: [

    ],
    exports: [
        LocalizePipe,
        FormsModule,
        ArrowComponentComponent,
        PromotionComponent,
        InputComponent
    ],
    providers: [
        MessageService,
        AuthorizationService,
        AccountService

    ]

})

export class BgsLiveSharedModule {

}