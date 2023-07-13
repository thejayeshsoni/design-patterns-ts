/**
 * Consider you have a website with different pages and you are supposed to allow the user to change the theme.
 * What would you do? Create multiple copies of each of the pages for each of the themes or would you just create separate theme and load them based on the user's preferences?
 */

/**
 * Bridge pattern is about preferring composition over inheritance.
 * Implementation details are pushed from a hierarchy to another object with a separate hierarchy.
 */

// Translating our WebPage example from above. Here we have the WebPage hierarchy

/*
Webpage interface :
constructor(theme)
getContent()
*/
class About {
  constructor(theme) {
    this.theme = theme;
  }

  getContent() {
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers {
  constructor(theme) {
    this.theme = theme;
  }

  getContent() {
    return `Careers page in ${this.theme.getColor()}`;
  }
}

// And the separate theme hierarchy
/*
Theme interface :
getColor()
*/

class DarkTheme {
  getColor() {
    return "Dark Black";
  }
}
class LightTheme {
  getColor() {
    return "Off white";
  }
}
class AquaTheme {
  getColor() {
    return "Light blue";
  }
}

// And both the hierarchies

const darkTheme = new DarkTheme();
const lightTheme = new LightTheme();

const about = new About(darkTheme);
const careers = new Careers(lightTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"
