import { Injectable } from "@angular/core";
import { AppConfigurationService } from "src/app/core/app-configuration/app-configuration.service";
import { HttpService } from "src/app/core/http/http.service";
import { UserDetails } from "src/app/models/user-models/user-details.model";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {

    private get apiBaseUri() {
        return `${this.configurationService.appConfiguration.apiBaseUri}/api/user`
    }

    constructor(
        private readonly configurationService: AppConfigurationService,
        private readonly httpService: HttpService
    ) { }

    update(phoneNumber: string) {

        return this.httpService.post<string>(`${this.apiBaseUri}/update`, { phoneNumber })
    }

    getDetails() {
        return this.httpService.get<UserDetails>(`${this.apiBaseUri}/getDetails`)
            .pipe(map(
                response => {
                    let birthdate = response.birtDate;
                    response.birthDay = birthdate.getDate();
                    response.birthMonth = birthdate.getMonth() + 1;
                    response.birthYear = birthdate.getFullYear();
                }
            ))

    }
}