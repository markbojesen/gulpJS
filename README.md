# Main gulp file for front-end **Sass** projects

## How to get started?

1. Make sure you have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [Sass](http://sass-lang.com/) and [Gulp](https://gulpjs.com/) installed.

    - ```npm install sass```
    - ```npm install gulp-cli -g```

2. Clone or download this repo.

3. ```cd``` into the project directory via your terminal

4. Run ```npm install``` in your terminal and it should automatically download the required dependencies included in the package.json file.

5. When installed,  in your project folder run ```gulp```. Gulp tasks should execute and a live development server should appear in your browser automatically(make sure you have an uptodate version of [chrome](https://www.google.com/chrome/index.html)).

6. Alternatively, go to **http://localhost:3000/** and your development server should run locally.

7. **dist** folder is created for production.

8. Enjoy and let me know if you come across any issues via the issue tracker!


## What actually happens when ```gulp``` is run?

- Local server is spun up.

**Note: Changes to the local server happens live but below process only happens once the actual gulp command is run**

- HTML files are being copied from ```src``` to production folder ```dist```

- Sass(SCSS) is compiled to standard CSS.

- Image optimization.

- Concatenation and uglification of all JavaScript files.

##### Current tasks being run: CopyHtml, imageMin, concatenation, compile sass, uglify js and browser-sync
