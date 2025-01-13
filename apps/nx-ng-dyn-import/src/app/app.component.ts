import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly loadedJsElements = new Set<
    HTMLScriptElement | HTMLLinkElement
  >();

  ngOnDestroy(): void {
    this.loadedJsElements.forEach((script) => {
      script.remove();
    });
  }

  protected loadDynamicJs(): void {
    const script = document.createElement('script');
    script.src = 'assets/dynamic-js.js';
    document.head.appendChild(script);
    this.loadedJsElements.add(script);
  }

  protected loadDynamicJsRed(): void {
    const script = document.createElement('script');
    script.src = 'assets/web/main.js?version=2.0.0';
    document.head.appendChild(script);
    this.loadedJsElements.add(script);
  }

  protected loadDynamicJsRedNodeModules(): void {
    const script = document.createElement('script');
    script.src = 'assets/wc-date-time-box/main.js?version=2.0.0';
    document.head.appendChild(script);
    this.loadedJsElements.add(script);

    const cssPath = 'assets/wc-date-time-box/styles.css';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssPath;

    document.head.appendChild(link);
    this.loadedJsElements.add(link);
  }
}
