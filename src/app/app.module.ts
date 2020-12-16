import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigurationService } from './core/app-configuration/app-configuration.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandlerInterceptor } from './core/http/http-error-handler.intercaptor';
import { HttpJwtHandlerInterceptor } from './core/http/http-jwt-handler.intercaptor';
import { HttpHeadersInterceptor } from './core/http/http-language-header.intercaptor';
import { NavigationComponent } from './headers/navigation/navigation.component';
import { MessageService } from 'primeng/api';
import { AuthorizationService } from './core/authorization/authorization-service';
import { BgsLiveSharedModule } from './shared/shared.module';
import { LanguageComponent } from './headers/language/language.component';
import { DialogComponentComponent } from './bgslive-components/dialog-component/dialog-component.component';
import { RegisterComponent } from './features/account/register/register.component';
import { InputComponent } from './bgslive-components/input/input.component';
import { ButtonComponentComponent } from './bgslive-components/button-component/button-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LanguageComponent,
    DialogComponentComponent,
    RegisterComponent,
    InputComponent,
    ButtonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BgsLiveSharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (settings: AppConfigurationService) => async () => await settings.init(),
      deps: [AppConfigurationService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpJwtHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    MessageService,
    AuthorizationService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
