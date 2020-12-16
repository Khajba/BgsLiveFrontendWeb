import { Injectable } from "@angular/core";
import { AuthUserModel } from 'src/app/core/authorization/authentification-response.model';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthenticateUserModel } from 'src/app/models/authorization/authentificate-user.model';
import { RegisterUserModel } from 'src/app/models/authorization/register-user.model';

const apiBaseUrl = "http://localhost:51735/api/account";

@Injectable()
export class AccountService {

    constructor(private readonly httpService: HttpService) { }

    registerUser(user: RegisterUserModel) {
        return this.httpService.post<RegisterUserModel>(`${apiBaseUrl}/register`, user)
    }

    login(user: AuthenticateUserModel) {
        return this.httpService.get<AuthUserModel>(`${apiBaseUrl}/login`, user)
    }


}