
declare module '@polymer/polymer/polymer-element' {

    export class PolymerElement extends HTMLElement {

        protected $: any;

        protected connectedCallback(): any;
    }

    export function html(template: TemplateStringsArray, ...values: any[]): HTMLTemplateElement;
}

declare module '@polymer/polymer/lib/utils/settings' {

    export function setPassiveTouchGestures(value: boolean);

    export function setRootPath(path: string);
}

declare module "*.html" {

    const template: HTMLTemplateElement;

    export = template;
}