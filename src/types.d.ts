
declare module '@polymer/polymer/lib/utils/settings' {

    export function setPassiveTouchGestures(value: boolean);

    export function setRootPath(path: string);
}

declare module "*.html" {

    const template: HTMLTemplateElement;

    export = template;
}