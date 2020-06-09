interface Feature {
  title: string;
  content: string;
  color: string;
  icon: string;
}

interface Slider {
  image: string;
}

interface Testimonial {
  name: string;
  content: string;
  location: string;
}

interface MOre {
  title: string;
  screen: string;
  subtitle: string;
  content: string;
  image_url: string;
}

interface Features extends Array<Feature> {}
interface Testimonials extends Array<Testimonial> {}
interface Sliders extends Array<Slider> {}

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
    content: "Instantly generate your cv "
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
  // {
  //   image: "https://picsum.photos/id/0/1230/500"
  // },
  // {
  //   image: "https://picsum.photos/id/1/1230/500"
  // },
  // {
  //   image: "https://picsum.photos/id/2/1230/500"
  // },
  // {
  //   image: "https://picsum.photos/id/3/1230/500"
  // },
  // {
  //   image: "https://picsum.photos/id/4/1230/500"
  // },
  // {
  //   image: "https://picsum.photos/id/5/1230/500"
  // },
  // {
  //   image: "https://picsum.photos/id/6/1230/500"
  // },
  // {
  //   image: "https://picsum.photos/id/7/1230/500"
  // }
];
