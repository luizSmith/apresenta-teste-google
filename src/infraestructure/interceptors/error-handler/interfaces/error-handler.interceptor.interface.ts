import { GcpLogTypeEnum } from 'src/infraestructure/logging/interfaces/gcp-logging.interceptor.interface';

export interface ICustomError {
    name: string;
    message: string;
    statusCode: number;
    gcpScope?: GcpInterface;
}

export interface GcpInterface {
    logname: string;
    title: string;
    type: GcpLogTypeEnum;
}
