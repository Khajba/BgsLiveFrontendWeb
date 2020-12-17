import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants';
import { LocalizationService } from '../localization/localization.service';

@Injectable({
    providedIn: 'root'
})
export class AppConfigurationService {

    public get appConfiguration(): AppConfiguration { return this._appConfiguration; };
    private _appConfiguration: AppConfiguration = {};

    private dictionary: { key?: string, value?: string } = {};
    private errorCodes: { errorCode?: number, message?: string } = {};

    constructor(
        private readonly httpClient: HttpClient,
        private readonly localizationService: LocalizationService) { }

    async init() {
        await this.initConfig();
        await this.initDictionary();
        await this.initErrorCodes();

        return true;
    }

    getDictionary(dictionaryName: string) {
        return this.dictionary[dictionaryName] || dictionaryName;
    }

    getErrorMessage(errorCode: number) {
        return this.errorCodes[errorCode];
    }

    private async initConfig() {
        const configFileName = environment.production ?
            'config.prod.json' :
            'config.dev.json';

        return this.httpClient.get(`./assets/config/${configFileName}`,
            { responseType: 'text', headers: { skipJwtInterceptor: 'true' } }
        ).pipe(
            map(data => {
                this._appConfiguration = JSON.parse(data);
            }, () => {
                this._appConfiguration = {};
            })
        ).toPromise();

    }

    private async initDictionary() {
        const currentLanguage = localStorage.getItem(Constants.KEY_LANGUAGE);

        if (currentLanguage) {
            this.localizationService.currentLangauge$.next(JSON.parse(currentLanguage));
        }

        return this.httpClient.get(`./assets/dictionary/${this.localizationService.currentLanguage.tag}.json`,
            { responseType: 'text', headers: { skipJwtInterceptor: 'true' } }
        ).pipe(map(
            data => {
                this.dictionary = JSON.parse(data);
            },
            () => {
                this.dictionary = {};
            })
        ).toPromise();
    }

    private async initErrorCodes() {
        return this.httpClient.get(`./assets/error-codes/${this.localizationService.currentLanguage.tag}.json`,
            { responseType: 'text', headers: { skipJwtInterceptor: 'true' } }
        ).pipe(map(
            data => {
                this.errorCodes = JSON.parse(data);
            },
            () => {
                this.errorCodes = {};
            })
        ).toPromise();
    }
}

export interface AppConfiguration {
    apiBaseUri?: string;
}