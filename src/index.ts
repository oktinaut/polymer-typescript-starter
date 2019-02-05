import "reflect-metadata";

import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";

import { setPassiveTouchGestures, setRootPath } from "@polymer/polymer/lib/utils/settings";

setPassiveTouchGestures(true);
setRootPath(Application.rootPath);

const container = new Container();

const { lazyInject, lazyInjectNamed, lazyInjectTagged, lazyMultiInject } = getDecorators(container);

Application.inject = lazyInject;
Application.named = lazyInjectNamed;
Application.tagged = lazyInjectTagged;
Application.multiInject = lazyMultiInject;

import("./bootstrap").then(module => {
    module.bootstrap(container);
});
