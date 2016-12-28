import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './environment';
// import { platformBrowser }    from '@angular/platform-browser';
import { AppModule } from './app.module';

// platformBrowser().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));