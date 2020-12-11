import { NgModule } from "@angular/core";
import { MessageService } from 'primeng/api';
import { AuthorizationService } from '../core/authorization/authorization-service';
import { LocalizePipe } from '../core/localization/localize.pipe';

@NgModule({
    declarations: [
        LocalizePipe
    ],
    imports: [

    ],
    exports: [
        LocalizePipe
    ],
    providers: [
        MessageService,
        AuthorizationService,

    ]

})

export class BgsLiveSharedModule {

}