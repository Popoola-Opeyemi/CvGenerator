export interface scrollOptions {
  container: string;
  easing: string;
  offset: number;
  force: boolean;
  cancelable: boolean;
  onStart?(element: any): any;
  onDone?(element: any): any;
  onCancel?(element: any): any;
  x: boolean;
  y: boolean;
}

interface codeMirror {
  gutters?: Array<string>;
  lint?: boolean;
  tabSize?: number;
  mode?: string;
  theme?: string;
  hintOptions?: object;
  highlightDifferences?: boolean;
  highlightSelectionMatches?: {};
  lineNumbers?: boolean;
  extraKeys?: {};
}

interface Feature {
  title: string;
  content: string;
  color: string;
  icon: string;
}

interface Slider {
  image: string;
}

interface Theme {
  name: string;
  value: string;
}

interface Testimonial {
  name: string;
  content: string;
  location: string;
}

interface More {
  title: string;
  subtitle: string;
  content: string;
  image_url: string;
}

interface Features extends Array<Feature> {}
interface Testimonials extends Array<Testimonial> {}
interface Sliders extends Array<Slider> {}
interface MoreItems extends Array<More> {}
interface Themes extends Array<Theme> {}

export const FeatureList: Features = [
  {
    color: "e7c12d",
    icon: "custom-icon-3.png",
    title: "Simple",
    content: `Javascript object notation is one of the simplest
          data-structure of all time and its one of the core feature
          of our generator,which makes our app simple and easy to edit`
  },
  {
    color: "ea2c58",
    icon: "custom-icon-1.png",
    title: "Secure",
    content: `With state of the art security,we guarantee
    that your data is transfered in a secured network and we dont
    store or watch you generate your resume,you are anonymous with us`
  },

  {
    color: "91d214",
    icon: "custom-icon-2.png",
    title: "Fast",
    content: `Insanely fast cv generation to get you up to speed in  gettting that resume ready`
  }
];

export const TestimoniaList: Testimonials = [
  {
    name: "Collins Ifunanya",
    content: "Its just amazing ,got my resume in less than 25seconds",
    location: "Nigeria"
  },
  {
    name: "Atom John",
    content:
      "An amazing application, the resume i built with this helped secure my first freelance Job ",
    location: "Nigeria"
  },
  {
    name: "Josh Oji",
    content: "FavResume made the journey into tech industry easy",
    location: "Nigeria"
  }
];

export const SliderList: Sliders = [
  { image: "../app/1.png" },
  { image: "../app/2.png" },
  { image: "../app/3.png" },
  { image: "../app/1.png" },
  { image: "../app/2.png" },
  { image: "../app/3.png" }
];

export const moreItemsList: MoreItems = [
  {
    title: "FavReaders",
    subtitle:
      "The more that you read,the more things you will know.The more you learn,the more places you'll go.",
    content: `FavReaders is a community of developers that share 
    the same goal of one book per day.Its an enriching section,
    everyone get to read same book per day and share opinion
    on the morals of the book.`,
    image_url: "4.png"
  },
  {
    title: "FavCode54",
    subtitle: "Everyone can code!",
    content: `We have a mission to develop the 
    African continent by making technology accessible 
    to everyone. We teach, we mentor, we develop! 
    Tech's taking over Africa.it's a revolution.`,
    image_url: "4.png"
  },
  {
    title: "FavBrain",
    subtitle: "Find that quality hand for the job!",
    content: `We bring together capable hands across Africa that are fit to take on any project ..`,
    image_url: "4.png"
  },
  {
    title: "Host9ja",
    subtitle: "Hosting made easier!",
    content: `We provide business the perfect domain with strong ,secured and reliable hosting services.`,
    image_url: "4.png"
  }
];

export const ThemeList: Themes = [
  { name: "Dracula", value: "dracula" },
  { name: "Snow-white", value: "default" },
  { name: "Paraiso-dark", value: "paraiso-dark" },
  { name: "Rubyblue", value: "rubyblue" },
  { name: "Mbo", value: "mbo" },
  { name: "Paraiso-light", value: "paraiso-light" }
];

export const cmOptions: codeMirror = {
  gutters: ["CodeMirror-lint-markers"],
  lint: true,
  tabSize: 4,
  mode: "application/json",
  theme: "dracula",
  highlightDifferences: true,
  highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
  lineNumbers: true,
  hintOptions: {
    completeSingle: false
  },
  extraKeys: {
    F11(cm: any) {
      cm.setOption("fullScreen", !cm.getOption("fullScreen"));
    },
    Esc(cm: any) {
      if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
    }
  }
};

export function Scroller(ID: string): scrollOptions {
  const Options: scrollOptions = {
    container: ID,
    easing: "ease-in",
    offset: -60,
    force: true,
    cancelable: true,
    x: false,
    y: true
  };
  return Options;
}
