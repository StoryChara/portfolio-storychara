import IMG_planifiklub from '../components/img/proyectos/planifiklub.png';
import IMG_nodemailer from '../components/img/proyectos/nodemailer-api-pk.png';
import IMG_cakedelivery from '../components/img/proyectos/cake-delivery.png';
import IMG_punchout from '../components/img/proyectos/punch-out.png';
import IMG_angrybirds from '../components/img/proyectos/angry-birds.png';
import IMG_fogshader from '../components/img/proyectos/fog-texture.png';
import IMG_cartidy from '../components/img/proyectos/cartidy.png';
import IMG_duckhunt from '../components/img/proyectos/duck-hunt.png';
import IMG_stonehenge from '../components/img/proyectos/stonehenge.png';
import IMG_tangram from '../components/img/proyectos/tangram.png';
import IMG_heladeria from '../components/img/proyectos/heladeria.png';
import IMG_animals from '../components/img/proyectos/animals-api.png';
import IMG_stardew from '../components/img/proyectos/stardew_time.png';
import IMG_vtools from '../components/img/proyectos/vtools-preview.png';
import IMG_wiesite from '../components/img/proyectos/wiesite.png';

const projects = [
  {
    image: IMG_planifiklub, 
    title: 'PlanifiKlub',
    description: 'Web platform dedicated to country clubs for booking buildings for their events.',
    technologies: ['React', 'Node.js', 'JSX', 'Supabase', 'JavaScript', 'HTML'],
    github: 'https://github.com/luisdiazv/planifiklub',
    web: 'https://planifiklub.vercel.app/'
  },
  {
    image: IMG_wiesite, 
    title: 'WIEsite!?',
    description: 'Development of an innovative and functional website that will represent WIE UNAL, a platform designed to inform, inspire and connect the community.',
    technologies: ['React', 'Node.js', 'JSX', 'Supabase', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/WIE-UNAL/website',
    web: 'https://wie-unal.vercel.app'
  },
  {
    image: IMG_duckhunt,
    title: 'Duck Hunt',
    description: "Recreation of Nintendo's Duck Hunt game, transformed into an infinite game without levels",
    technologies: ['JavaScript', 'HTML', 'Processing'],
    github: 'https://github.com/StoryChara/Duck-Hunt',
    web: 'https://storychara.github.io/Duck-Hunt/'
  },
  {
    image: IMG_vtools,
    title: 'vTools Preview',
    description: 'Project to visualize code for event registration in vTools; it also allows easy copying for insertion on the IEEE vTools page.',
    technologies: ['React', 'Node.js', 'JSX', 'JavaScript', 'HTML'],
    github: 'https://github.com/StoryChara/vTools-Template',
    web: 'https://vtools-template.vercel.app'
  },
  {
    image: IMG_nodemailer,
    title: 'NodeMailer Web Service - PlanifiKlub',
    description: 'API for the email function of the PlanifiKlub platform.',
    technologies: ['JavaScript', 'API'],
    github: 'https://github.com/luisdiazv/pk_EmailService'
  },
  {
    image: IMG_cakedelivery,
    title: 'Cake Delivery',
    description: 'Compiler that works like a simple RPG-style game with an aesthetic similar to games from the 1980s.',
    technologies: ['Python', 'Compiler'],
    github: 'https://github.com/camunozv/CakeDelivery'
  },
  {
    image: IMG_heladeria, 
    title: 'Heladeria',
    description: 'Web project using Python Flask, project developed in a course at Universidad de los Andes.',
    technologies: ['Python', 'Flask', 'SQLAlchemy'],
    github: 'https://github.com/StoryChara/backend_python'
  },
  {
    image: IMG_animals, 
    title: 'Animals Web Service',
    description: 'Web project using Python Flask, project developed in a course at Universidad de los Andes.',
    technologies: ['Python', 'Flask', 'API'],
    github: 'https://github.com/StoryChara/backend_python'
  },
  {
    image: IMG_punchout,
    title: 'Punch-Out!!!',
    description: "Recreation of Nintendo's Punch-Out game, specifically the level of the battle against Mike Tyson.",
    technologies: ['JavaScript', 'HTML', 'Processing'],
    github: 'https://github.com/StoryChara/punch-out',
    web: 'https://storychara.github.io/punch-out/'
  },
  {
    image: IMG_angrybirds,
    title: 'Angry Birds',
    description: "Recreation of the first level of Rovio's Angry Birds game.",
    technologies: ['JavaScript', 'HTML', 'Processing'],
    github: 'https://github.com/StoryChara/Angry-Birds',
    web: 'https://storychara.github.io/Angry-Birds/'
  },
  {
    image: IMG_fogshader,
    title: 'Fog Shader',
    description: 'Fog shader with adjustable distances.',
    technologies: ['JavaScript', 'HTML', 'Processing'],
    github: 'https://github.com/StoryChara/Fog-Shader',
    web: 'https://storychara.github.io/Fog-Shader/'
  },
  {
    image: IMG_cartidy,
    title: 'Cartidy',
    description: 'Magi card organizer using different types of data structures.',
    technologies: ['Python'],
    github: 'https://github.com/StoryChara/Cartidy'
  },
  {
    image: IMG_stonehenge,
    title: 'Stonehenge',
    description: 'Creation of Stonehenge with shapes, using translates and rotates.',
    technologies: ['JavaScript', 'HTML', 'Processing'],
    github: 'https://github.com/StoryChara/stonehenge',
    web: 'https://storychara.github.io/stonehenge/'
  },
  {
    image: IMG_tangram,
    title: 'Tangram',
    description: 'Tangram game with various levels or the option to create your own level.',
    technologies: ['Java', 'Processing'],
    github: 'https://github.com/StoryChara/tangram'
  },
  {
    image: IMG_stardew,
    title: 'Stardew Time',
    description: "Modified clock for a Stardew Valley roleplay along with all the game's shopping information.",
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