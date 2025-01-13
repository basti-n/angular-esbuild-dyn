import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly loadedCssElements = new Set<HTMLLinkElement>();

  ngOnDestroy(): void {
    this.loadedCssElements.forEach((script) => {
      script.remove();
    });
  }

  protected loadCssAsset(): void {
    const cssPath = 'assets/styles.css';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssPath;

    document.head.appendChild(link);
    this.loadedCssElements.add(link);
  }
}
