import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { platformBrowser }    from '@angular/platform-browser';
import { AppModule } from './app.module';

// platformBrowser().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule);