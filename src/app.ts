
// Third Part
import "reflect-metadata";
import Axios, { AxiosRequestConfig } from "axios";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import { Response, Request } from "express";
import { InversifyExpressServer, TYPE } from "inversify-express-utils";
import * as swagger from "swagger-express-ts";
import { SwaggerDefinitionConstant } from "swagger-express-ts";
const fileUpload = require('express-fileupload');

import startConnection from './infraestructure/database';

// Infraestrutura
import { TYPES } from "./infraestructure/constants/dependency.types";


// Repository
import PatientRepository from './repositories/patient.repository';
import IPatientRepository from "./repositories/interfaces/patient.repository.interface";

// Controllers
import IPatientController from "./controllers/interfaces/patient.controller.interface";
import PatientController from "./controllers/patient.controller";

// Service
import IPatientService from "services/interfaces/patient.service.interface";
import PatientService from "services/patient.service";

const injectionContainer = new Container();

export class App {

    static jwtToken = "";
    
    private options: cors.CorsOptions = {
        origin: "*",
        // credentials: true,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Authorization", "Accept", "X-Access-Token", "Access-Control-Allow-Origin"],
    };

    constructor() {
        this.initializeEnvironmentConfig();
        
        this.initAxios();
        this.initDatabase().then(() => {
            this.dependencyInjectionBind();
            this.initializeServer();
        });
    
    }

    initAxios(): void {
        Axios.defaults.baseURL = process.env.API_CORE_URL;
        
        Axios.defaults.headers = {
            'Accept': 'application/json',
            'Accept-Language': 'es',
            'Content-Type': 'application/json',
            'Authorization': '',
        };

        Axios.interceptors.request.use((req) => {
            if(App.jwtToken != ""){
                req.headers.authorization = `Bearer ${App.jwtToken}`;
            }

            return req;
        });
    }

    async initDatabase(): Promise<void> {      
        await startConnection(); 
    }

    initializeEnvironmentConfig(): void {
        let path;
        let nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : "local";
        
        switch (nodeEnv) {
            case "local-docker":
                path = `${__dirname}/../process.local.docker.env`;
                break;
            case "local":
                path = `${__dirname}/../process.env`;
                break;
        }

        if(path)
            dotenv.config({ path: path });
    }

    dependencyInjectionBind(): void {

        // Service
        injectionContainer.bind<IPatientService>(TYPES.IPatientService).to(PatientService);

        // Repository
        injectionContainer.bind<IPatientController>(TYPES.IPatientController).to(PatientController);

        // Controllers
        injectionContainer.bind<IPatientRepository>(TYPES.IPatientRepository).to(PatientRepository);

    }

    errorHandler(error: Error, request: Request, response: Response, next) {
        let errorClient: any = error;
        let responseTemp = errorClient.response;

        if("response" in errorClient && responseTemp !== undefined){
            response.status(responseTemp.status);
            response.json(responseTemp.data);
        } else {
            response.status(500);
            response.json({ 
                status: 500,
                message: error.message,
                stack: error.stack
            });
        }
    }

    authorizationHandler(request: Request, response: Response, next) {
        if("authorization" in request.headers){
            App.jwtToken = request.headers.authorization;
        } else {
            App.jwtToken = "";
        }

        next();
    }
    
    requestLog(request: Request, response: Response, next) {
        console.log(request.method +" "+ request.url);

        next();
    }

    initializeServer() {
        let server: InversifyExpressServer = new InversifyExpressServer(injectionContainer);

        server.setConfig((app) => {
            app.use(this.authorizationHandler);
            app.use(this.requestLog);
            app.use(fileUpload())
            app.use(cors(this.options));
            app.use(
                bodyParser.urlencoded({
                    limit: "50mb", //deve ser limitado pela api
                    extended: true,
                })
            );
            app.use(
                bodyParser.json({
                    limit: "50mb", //deve ser limitado pela api
                })
            );
        });

        let serverInstance = server.build();
        
    
        serverInstance.use(this.errorHandler);
        serverInstance.use( '/api-docs' , express.static( 'swagger' ) );
        serverInstance.use( '/api-docs/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );
        serverInstance.use(swagger.express({
            definition : {
                info : {
                    title : "My api" ,
                    version : "1.0"
                },
                externalDocs : {
                    url : "My url"
                },
                securityDefinitions: {
                    "JWT": {
                        "type": SwaggerDefinitionConstant.Security.Type.API_KEY,
                        "name": "Authorization",
                        "in": SwaggerDefinitionConstant.Security.In.HEADER
                    }
                }
            }
        }));

        serverInstance.listen(process.env.NODE_PORT);
        console.log(`Skeleton API is running in ${process.env.NODE_PORT} port!`);
    }
}

export default new App();
