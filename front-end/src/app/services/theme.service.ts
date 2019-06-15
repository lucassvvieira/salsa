import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
    constructor() {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            this.setLightTheme();
        } else if (theme === 'dark') {
            this.setDarkTheme();
        }
    }

    setLightTheme(): void {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }

    setDarkTheme(): void {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}