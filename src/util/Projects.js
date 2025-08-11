import IMG_planifiklub from '../components/img/proyectos/planifiklub.png';
import IMG_nodemailer from '../components/img/proyectos/nodemailer-api-pk.png';
import IMG_cakedelivery from '../components/img/proyectos/cake-delivery.png';
import IMG_cartidy from '../components/img/proyectos/cartidy.png';
import IMG_visual_computing from '../components/img/proyectos/visual-computing.png';
import IMG_tangram from '../components/img/proyectos/tangram.png';
import IMG_backend_py from '../components/img/proyectos/backend.png';
import IMG_stardew from '../components/img/proyectos/stardew_time.png';
import IMG_vtools from '../components/img/proyectos/vtools-preview.png';
import IMG_wiesite from '../components/img/proyectos/wiesite.png';

const projects = [
  {
    image: IMG_planifiklub, 
    title: 'PlanifiKlub',
    description: 'Developed a full-stack web app using React and Supabase to streamline event and facility bookings for private clubs.',
    technologies: ['React', 'Node.js', 'JSX', 'Supabase', 'JavaScript', 'HTML'],
    github: 'https://github.com/luisdiazv/planifiklub',
    web: 'https://planifiklub.vercel.app/'
  },
  {
    image: IMG_wiesite, 
    title: 'WIEsite!?',
    description: 'Developed the official Single-Page Application (SPA) for the Women in Engineering (WIE) affinity group using React.',
    technologies: ['React', 'Node.js', 'JSX', 'Supabase', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/WIE-UNAL/website',
    web: 'https://wie-unal.vercel.app'
  },
  {
    image: IMG_visual_computing,
    title: 'Visual Computing',
    description: "A collection of projects recreating classic games and graphics demos using JavaScript and Processing to demonstrate command of physics, animations, and rendering.",
    technologies: ['JavaScript', 'HTML', 'Processing'],
    github: 'https://github.com/StoryChara/Visual_Computing',
    web: 'https://storychara.github.io/Visual_Computing'
  },
  {
    image: IMG_vtools,
    title: 'vTools Preview',
    description: 'Created a React-based web tool to help IEEE volunteers generate and preview HTML for event pages on the vTools platform.',
    technologies: ['React', 'Node.js', 'JSX', 'JavaScript', 'HTML'],
    github: 'https://github.com/StoryChara/vTools-Template',
    web: 'https://vtools-template.vercel.app'
  },
  {
    image: IMG_nodemailer,
    title: 'NodeMailer Web Service - PlanifiKlub',
    description: 'Built a dedicated RESTful microservice with Node.js and Express to handle transactional email delivery for a web platform.',
    technologies: ['JavaScript', 'API'],
    github: 'https://github.com/luisdiazv/pk_EmailService'
  },
  {
    image: IMG_cakedelivery,
    title: 'Cake Delivery',
    description: 'Developed a text-based RPG with a custom compiler in Python, featuring a retro 80s aesthetic and narrative-driven gameplay.',
    technologies: ['Python', 'Compiler'],
    github: 'https://github.com/camunozv/CakeDelivery'
  },
  {
    image: IMG_backend_py, 
    title: 'Backend Python',
    description: 'Built a complete backend for a web application using Python and Flask, following the MVC architectural pattern.',
    technologies: ['Python', 'Flask', 'SQLAlchemy'],
    github: 'https://github.com/StoryChara/backend_python'
  },
  {
    image: IMG_cartidy,
    title: 'Cartidy',
    description: 'A software system for managing card collections, built in Python to demonstrate the practical application of core data structures.',
    technologies: ['Python'],
    github: 'https://github.com/StoryChara/Cartidy'
  },
  {
    image: IMG_tangram,
    title: 'Tangram',
    description: 'An interactive Tangram puzzle game developed in Java with Processing, featuring multiple levels and a custom level editor.',
    technologies: ['Java', 'Processing'],
    github: 'https://github.com/StoryChara/tangram'
  },
  {
    image: IMG_stardew,
    title: 'Stardew Time',
    description: "A companion web app for a Stardew Valley roleplay server, built with vanilla JavaScript, HTML, and CSS.",
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/StoryChara/Stardew_Time',
    web: 'https://storychara.github.io/Stardew_Time/'
  }
  /*
  {
    image: ,
    title: '',
    description: '',
    technologies: [''],
    github: '',
    web: ''
  },
  */
];

export { projects }