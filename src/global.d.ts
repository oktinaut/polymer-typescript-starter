import { interfaces } from "inversify";

interface ApplicationGlobals {
    rootPath: string;

    inject:      (serviceIdentifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>) => (proto: any, key: string) => void;
    named:       (serviceIdentifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>, named: string) => (proto: any, key: string) => void
    tagged:      (serviceIdentifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>, key: string, value: any) => (proto: any, propertyName: string) => void;
    multiInject: (serviceIdentifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>) => (proto: any, key: string) => void;
}

declare global {
    const Application: ApplicationGlobals;
}
