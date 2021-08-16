import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GcpLogging } from 'src/infraestructure/logging/gcp-logging.interceptor';
import { GcpLogTypeEnum } from 'src/infraestructure/logging/interfaces/gcp-logging.interceptor.interface';
@Injectable()
export class CustomErrorInterceptor implements NestInterceptor {
    private logger: GcpLogging;
    constructor() {
        this.logger = new GcpLogging();
    }

    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<unknown> {
        // next.handle() is an Observable of the controller's result value
        return next.handle().pipe(
            catchError((error) => {
                if (typeof error === 'object') {
                    if (error.response) {
                        throw new HttpException(
                            error.response.message,
                            error.response.statusCode
                        );
                    }
                    if (error instanceof Error) {
                        throw new HttpException(error.message, 500);
                    } else {
                        if (error.gcpScope) {
                            this.logger.registerLog(
                                error.gcpScope.logname,
                                error.gcpScope.title,
                                error.message,
                                error.gcpScope.type || GcpLogTypeEnum.alert
                            );
                        }
                        throw new HttpException(
                            error.message,
                            error.statusCode
                        );
                    }
                } else {
                    throw new HttpException(error, 500);
                }
            })
        );
    }
}
