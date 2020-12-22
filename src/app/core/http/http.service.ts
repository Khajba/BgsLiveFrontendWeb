import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';
import { ToastService } from "src/app/bgslive-components/bgs-toast/toast.service";
import { Severity } from "src/app/enums/severity-enum";

@Injectable({
    providedIn: 'root'
})
export class HttpService { 

    constructor(
        private readonly httpClient: HttpClient,
        private readonly toastService: ToastService) { }

    get<TData>(url: string, queryParams?: {}, showDefaultMessage?: boolean, skipJwtInterceptor: boolean = false) {
        return this.httpClient
            .get<TData>(`${url}?${this.getQueryParams(queryParams).toString()}`, { headers: { skipJwtInterceptor: skipJwtInterceptor.toString() } })
            .pipe(map(response => this.handleResponse(response, showDefaultMessage)));
    }

    post<TData>(url: string, body?: any, showDefaultMessage?: boolean, skipJwtInterceptor: boolean = false) {
        return this.httpClient
            .post<TData>(url, body, { headers: { skipJwtInterceptor: skipJwtInterceptor.toString() } })
            .pipe(map(response => this.handleResponse(response, showDefaultMessage)));
    }

    private getQueryParams(filter: any): URLSearchParams {
        const params = new URLSearchParams();

        for (var field in filter) {
            if (filter[field] != null) {
                params.set(field, filter[field])
            }
        }

        return params;
    }

    private handleResponse<TData>(response: TData, showDefaultMessage: boolean) {
        if (showDefaultMessage) {
            this.toastService.add({ severity: Severity.Error, message: 'Operation completed successfully' })
        }
        return response;
    }
}