import {
  DiCode,
  DiDatabase,
  DiAndroid,
  DiLinux,
  DiWordpress,
  DiYii,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiAtom,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBuildOutline,
  IoAlbumsOutline,
  IoChatbubbleOutline,
  IoCallOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

const data = {
  navlinks: [
    {
      id: 1,
      text: "Home",
      to: "#home",
      Icon: IoHomeOutline,
    },
    {
      id: 2,
      text: "About Me",
      to: "#about",
      Icon: IoPersonOutline,
    },
    {
      id: 3,
      text: "Services",
      to: "#services",
      Icon: IoBuildOutline,
    },
    {
      id: 4,
      text: "Projects",
      to: "#projects",
      Icon: IoAlbumsOutline,
    },
    {
      id: 5,
      text: "Reviews",
      to: "#reviews",
      Icon: IoChatbubbleOutline,
    },
    {
      id: 6,
      text: "Contact",
      to: "#contact",
      Icon: IoCallOutline,
    },
  ],
  banner: {
    author: "Md Ramzan Ali",
    jobs: [
      "Frontend Designer",
      "Backend Developer",
      "App Developer",
      "Software Developer",
    ],
  },
  aboutMe: {
    image: "../assets/avatars/Rimon Ahmed.jpg",
    description: `Experienced Full Stack Web and Software Developer with a
    passion for creating efficient and user-friendly digital
    solutions. Proficient in both front-end and back-end
    development. I excel in crafting responsive web applications
    and robust software systems.`,
  },
  skills: [
    {
      id: 1,
      text: "HTML5",
      Icon: DiHtml5,
    },
    {
      id: 2,
      text: "CSS3",
      Icon: DiCss3,
    },
    {
      id: 3,
      text: "JavaScript",
      Icon: DiJsBadge,
    },
    {
      id: 4,
      text: "React JS",
      Icon: DiReact,
    },
    {
      id: 5,
      text: "Python",
      Icon: DiPython,
    },
    {
      id: 6,
      text: "Node JS",
      Icon: DiNodejsSmall,
    },
    {
      id: 7,
      text: "Electron JS",
      Icon: DiAtom,
    },
    {
      id: 8,
      text: "React Native",
      Icon: DiAndroid,
    },
    {
      id: 9,
      text: "MongoDB",
      Icon: DiMongodb,
    },
  ],
  services: [
    {
      id: 1,
      title: "Frontend Design",
      description:
        "Crafting visually stunning, user-friendly interfaces to captivate your audience and enhance user engagement.",
      Icon: DiCode,
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Building the robust backbone of your digital presence to ensure seamless functionality, scalability, and data management.",
      Icon: DiDatabase,
    },
    {
      id: 3,
      title: "App Development",
      description:
        "Transforming your innovative ideas into cutting-edge mobile and web solutions that deliver exceptional user experiences.",
      Icon: DiAndroid,
    },
    {
      id: 4,
      title: "Software Development",
      description:
        "Optimizing and streamlining your business processes for sustainable growth and increased efficiency through tailored software solutions.",
      Icon: DiLinux,
    },
    {
      id: 5,
      title: "Wordpress Customization",
      description:
        "Personalizing your WordPress website to perfectly align with your brand identity, ensuring a unique and engaging online presence.",
      Icon: DiWordpress,
    },
    {
      id: 6,
      title: "Digital Marketing",
      description:
        "Elevating your online visibility and maximizing return on investment by deploying data-driven strategies and compelling content.",
      Icon: DiYii,
    },
  ],
  projets: [],
  reviews: [
    {
      id: 1,
      name: "Ripon Hossain Shuvo",
      job: "Web Designer",
      image: "/assets/avatars/Ripon Hossain Shuvo.jpg",
      email: "rhshuvo44@gmail.com",
      mobile: "+88017773618610",
      socialLinks: {
        facebook: "https://www.facebook.com/riponhossainshuvo.2",
        twitter: "https://twitter.com/rhshuvo44",
        linkedin: "https://www.linkedin.com/in/rhshuvo44",
        github: "https://www.github.com/rhshuvo44",
      },
      review:
        "Working with Md Ramzan Ali was an absolute pleasure. They transformed our outdated e-commerce site into a modern, user-friendly platform. Their attention to detail and problem-solving skills are unmatched. We saw a significant increase in sales after the relaunch. Highly recommend!",
    },
    {
      id: 2,
      name: "Abdullah Al Tansen",
      job: "Web Designer",
      image: "/assets/avatars/Abdullah Al Tansen.jpg",
      email: "abdullahaltansen899@gmail.com",
      mobile: "+8801861126899",
      socialLinks: {
        facebook: "https://www.facebook.com/abdullahtansen",
        twitter: "https://twitter.com/tansenal42298",
        linkedin: "https://www.linkedin.com/in/abdullahtansen",
        github: "https://www.github.com/abdullahtansen",
      },
      review:
        "I can't thank Md Ramzan Ali enough for the fantastic mobile app they created for my business. Their coding skills are top-notch, and they were always available to address my concerns. The app has received rave reviews from our users, and it's all thanks to their expertise.",
    },
    {
      id: 3,
      name: "Md Kawchar",
      job: "Digital Marketer",
      image: "/assets/avatars/Md Kawchar.jpg",
      email: "mdkawchar13@gmail.com",
      mobile: "+881620918483",
      socialLinks: {
        facebook: "https://www.facebook.com/rjkawchar",
        twitter: "https://twitter.com/rjkawchar",
        linkedin: "https://www.linkedin.com/in/rjkawchar",
        github: "https://www.github.com/rjkawchar",
      },
      review:
        "Working with Md Ramzan Ali was a game-changer for our business. They delivered a complex web application on time and within budget. Their ability to turn our ideas into a functional product is remarkable. We continue to collaborate with them for updates and improvements.",
    },
    {
      id: 4,
      name: "Md Ashraful Alam",
      job: "Graphic Designer",
      image: "/assets/avatars/Md Ashraful Alam.jpg",
      email: "ashrafulalam9522@gmail.com",
      mobile: "+8801630339522",
      socialLinks: {
        facebook: "https://www.facebook.com/ashrafulalam.murad.58",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/ashraful-alam-9b2b70231",
        github: "https://www.github.com/",
      },
      review:
        "I hired Md Ramzan Ali to build a custom content management system, and I couldn't be happier with the results. They took the time to understand our unique needs and delivered a system that's easy to use and extremely efficient. I appreciate their professionalism and technical proficiency.",
    },
    {
      id: 5,
      name: "Md Emran Ali",
      job: "Wordpress Developer",
      image: "/assets/avatars/Md Emran Ali.jpg",
      email: "imrantechworld@gmail.com",
      mobile: "+8801767334779",
      socialLinks: {
        facebook: "https://www.facebook.com/imran.b44",
        twitter: "https://twitter.com/imran_badsha79",
        linkedin: "https://www.linkedin.com/in/md-emran-ali-1b1202290",
        github: "https://www.github.com/",
      },
      review:
        "I've had the pleasure of working with Md Ramzan Ali on several projects, and they never disappoint. Their full stack development skills are outstanding, and they consistently deliver high-quality work. I highly recommend them for any development needs.",
    },
    {
      id: 6,
      name: "Mehedi Hasan",
      job: "Digital Marketer",
      image: "/assets/avatars/Mehedi Hasan.jpg",
      email: "mahadihasan.mimh3136@gmail.com",
      mobile: "+8801824040264",
      socialLinks: {
        facebook: "https://www.facebook.com/mahadi0264mh",
        twitter: "https://twitter.com/Mahadi938642.",
        linkedin: "https://www.linkedin.com/in/",
        github: "https://www.github.com/",
      },
      review:
        "We approached Md Ramzan Ali for a website redesign, and they exceeded our expectations. They not only gave our site a fresh look but also improved its performance and user experience. Their commitment to delivering results is truly commendable.",
    },
    {
      id: 7,
      name: "Md Ismail Hossain",
      job: "UX/UI Designer",
      image: "/assets/avatars/Md Ismail Hossain.jpg",
      email: "ismailhossain14321@​yahoo.com",
      mobile: "+8801607610266",
      socialLinks: {
        facebook: "https://www.facebook.com/oyonsagor1999.gmailcom",
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/",
        github: "https://www.github.com/",
      },
      review:
        "We needed to integrate multiple APIs into our platform, and Md Ramzan Ali made it seem effortless. Their knowledge of API integration is impressive, and they ensured everything worked seamlessly. Their communication and problem-solving skills made the project a success.",
    },
  ],
  contacts: {
    address: "Saturia, Manikganj",
    city: "Dhaka",
    state: "Bangladesh",
    zip: "1810",
    mobiles: ["+8801641351301", "+8801951060880"],
    emails: ["its.ramzan.always@gmail.com"],
    website: "https://ramzanali.netlify.app",
    socialLinks: [
      {
        id: 1,
        text: "Facebook",
        link: "https://www.facebook.com/rimonians",
        Icon: IoLogoFacebook,
      },
      {
        id: 2,
        text: "Twitter",
        link: "https://twitter.com/rimonians",
        Icon: IoLogoTwitter,
      },
      {
        id: 3,
        text: "LinkedIn",
        link: "https://www.linkedin.com/company/rimonians",
        Icon: IoLogoLinkedin,
      },
      {
        id: 4,
        text: "Github",
        link: "https://www.github.com/rimonians",
        Icon: IoLogoGithub,
      },
    ],
  },
};

export default data;
