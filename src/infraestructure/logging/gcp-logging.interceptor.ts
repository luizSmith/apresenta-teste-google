import { Injectable } from '@nestjs/common';

import { Logging } from '@google-cloud/logging';

import { GcpLogTypeEnum } from './interfaces/gcp-logging.interceptor.interface';
@Injectable()
export class GcpLogging {
    private logging: Logging;

    constructor() {
        this.logging = new Logging({
            projectId: process.env.GOOGLE_PROJECT_ID,
        });
    }

    registerLog(
        logname: string,
        title: string,
        details: Record<string, unknown> | string | number | unknown,
        type: GcpLogTypeEnum
    ): void {
        const { log, entry } = this.mountLogBase(logname, title, details);
        switch (type) {
            case GcpLogTypeEnum.info:
                console.info(details);
                break;

            case GcpLogTypeEnum.notice:
                log.notice(entry);
                break;

            case GcpLogTypeEnum.error:
                log.error(entry);
                break;

            case GcpLogTypeEnum.warning:
                log.warning(entry);
                break;

            case GcpLogTypeEnum.critical:
                log.critical(entry);
                break;

            case GcpLogTypeEnum.alert:
                log.alert(entry);
                break;

            case GcpLogTypeEnum.emergency:
                log.emergency(entry);
                break;
        }
    }

    private mountLogBase(
        logname: string,
        title: string,
        details: Record<string, unknown> | string | number | unknown
    ) {
        const log = this.logging.logSync(logname);
        const metadata = {
            labels: {
                logname,
                application: 'drc-messaging-node',
            },
            resource: {
                type: 'cloud_run_revision',
                labels: {
                    service_name: process.env.GCP_CLOUDRUN_SERVICE_NAME,
                },
            },
            metadata: details,
            textPayload: title,
            jsonPayload: details,
        };

        return {
            metadata,
            log,
            entry: log.entry(metadata, `${logname} - ${title}`),
        };
    }
}
