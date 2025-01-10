import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  private readonly loadedJsElements = new Set<HTMLScriptElement>();

  ngOnDestroy(): void {
    this.loadedJsElements.forEach((script) => {
      script.remove();
    });
  }

  protected loadDynamicJs(): void {
    const script = document.createElement('script');
    script.src = 'assets/dynamic-js.js';
    document.body.appendChild(script);
    this.loadedJsElements.add(script);
  }

  protected loadDynamicJsFromNodeModules(): void {
    const script = document.createElement('script');
    script.src = 'assets/nm/index.js';
    document.body.appendChild(script);
    this.loadedJsElements.add(script);
  }
}
