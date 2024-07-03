export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Developing a Next.js Web Application for Mercedes Benz Tunisia",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mercedes Benz Tunisia - Luxury Passenger Cars",
    des: "Discover luxury Mercedes Benz vehicles and genuine parts in Tunisia. Expert service to keep your Mercedes at its best.",
    img: "/p1.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/js.svg",
      "/three.svg",
      "/db.svg",
      "/gl.svg",
    ],
    link: "https://dealership-six.vercel.app/",
  },
  {
    id: 2,
    title: "Fedi Riahi's Portfolio",
    des: "A showcase of my web development projects, featuring modern technologies and innovative designs. Explore my work and see my skills in action.",
    img: "/p4.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/na.png",
      "/ac.png",
    ],
    link: "/",
  },

  {
    id: 3,
    title: "KitchenFolio - Discover, Create & Share Recipes",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/js.svg",
      "/fb.svg",
      "/db.svg",
      "/gl.svg",
    ],
    link: "https://kitchen-folio-lafic5u8u-riahif.vercel.app/",
  },
  {
    id: 4,
    title: "La More - Your Online Fashion Haven",
    des: "Explore the latest trends and timeless classics in our curated clothing collection. Shop with ease and elevate your style!.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/fb.svg", "/db.svg"],
    link: "/ui.yoom.com",
  },
];

export const testimonials = [
  {
    quote:
      "The Stylish Threads website is so easy to navigate. I love the clean layout and how quickly I can find what I'm looking for. A fantastic shopping experience.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Riahi's portfolio website is well-organized and visually appealing. It's easy to navigate, and his projects are showcased beautifully. A great representation of his skills.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "KitchenFolio's website is a joy to use. The design is intuitive and visually appealing, making it easy to discover and share recipes. It's my go-to for culinary inspiration.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Iware",
    img: "/iware.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "All Circuits",
    img: "/all.png",
    nameImg: "/appName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend developer Intern",
    desc: "Assisted in the development of a web-based dashboard using Javascript, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Web Developer",
    desc: "Created a user-friendly web platform highlighting luxury Mercedes Benz vehicles and genuine parts in Tunisia, ensuring seamless access to expert services.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
