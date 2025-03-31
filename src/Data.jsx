import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaLevelDownAlt } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from "react-icons/ri";
import htmlImg from './assets/html-5.svg';
import cssImg from './assets/css-3.svg';
import jsImg from './assets/javascript.svg';
import reactImg from './assets/react.svg';
import tailwindImg from './assets/tailwind.svg';

import gimpImg from './assets/gimp.svg';
import figmaImg from './assets/figma.svg';

import proyecto1 from './assets/proyecto1.jpg';
import proyecto2 from './assets/proyecto2.jpg';
import proyecto3 from './assets/proyecto3.jpg';
import proyecto4 from './assets/proyecto4.jpg';
import proyecto5 from './assets/proyecto5.jpg';

import tema1 from './assets/blue.png';
import tema2 from './assets/blueviolet.png';
import tema3 from './assets/magenta.png';
import tema4 from './assets/orange.png';
import tema5 from './assets/red.png';
import tema6 from './assets/yellow.png';
import tema7 from './assets/yellowgreen.png';



export const links =[
    {
        name: 'Home',
        icon: <FaHome className= 'nav-icon'/>, 
        path: '/',
    },
    {
        name: 'About',
        icon:<FaUser className= 'nav-icon'/>,
        path:'/about',
    },
    {
        name: 'Portfolio',
        icon: <FaFolderOpen className= 'nav-icon'/>, 
        path: '/portfolio',
    },
    {
        name: 'Contacto',
        icon:<FaEnvelopeOpen className= 'nav-icon'/>,
        path:'/contacto',
    },
];

export const infoPersonal= [
    {
        title: 'Nombre: ',
        description: 'Francisco',
    },
    {
        title: 'Apellido: ',
        description: 'Maldonado',
    },
    {
        title: 'Edad: ',
        description: '22 años',
    },
    {
        title: 'Nacionalidad: ',
        description: 'Español',
    },
    {
        title: 'Freelance: ',
        description: 'Disponible',
    },
    {
        title: 'Dirección: ',
        description: 'Málaga',
    },
    {
        title: 'Teléfono: ',
        description: '+34692170738',
    },
    {
        title: 'Correo: ',
        description: 'maldonadogarciafran@gmail.com',
    },
    {
        title: 'idiomas: ',
        description: 'Español, Inglés',
    },
    {
        title: 'Github: ',
        description: 'fran101sco',
    },
];

export const getErrorsFixedCount = () => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 50);
      if (count > 9999) {
        clearInterval(interval);
        return "∞";
      }
      return count;
    }, 50);
    return "∞"; // Devuelve un valor inicial mientras se actualiza
  };
  
export const stats=[
    {
        no: '20+',
        title: 'Proyectos <br /> Completados',
    },
    {
        no: '500+',
        title: 'Horas invertidas a la programación',
    },
    {
        no: getErrorsFixedCount(),
        title: 'Errores solucionados',
    },
    {
        no: '5+',
        title: 'Participación en <br /> JAMS',
    },
];

export const skill= [
    {
        id:1,
        img: htmlImg,
        title: 'HTML',
        level: 'Avanzado',
        category: 'developer',
        
    },
    {
        id:2,
        img:cssImg,
        title: 'CSS',
        level: 'Avanzado',
        category: 'developer',
        
    },
    {
        id:3,
        img:jsImg,
        title: 'Javascript',
        level: 'Intermedio',
        category: 'developer',
        
    },
    {
        id:4,
        img:reactImg,
        title: 'React',
        level: 'Intermedio',
        category: 'developer',
        
    },{
        id:5,
        img:tailwindImg,
        title: 'Tailwind',
        level: 'Básico',
        category: 'developer',
        
    },{
        id:6,
        img:gimpImg,
        title: 'Gimp',
        level: 'Avanzado',
        category: 'designer',
        
    },{
        id:7,
        img:figmaImg,
        title: 'Figma',
        level: 'Intermedio',
        category: 'designer',
        
    },
];

export const resume=[
    {
        id:1,
        category: 'experience',
        icon: <RiBriefcase4Fill />,
        year: 'Actualmente',
        title: 'En busqueda de experiencia',
        desc: ' ',
    },
    {
        id:2,
        category: 'education',
        icon: <RiGraduationCapFill />,
        year: '2023-Actualidad',
        title: 'Desarrollador de aplicaiones web <span> Master D. </span>',
        desc: ' ',
    },

];

export const portfolio =[
    {
        id: 1,
        img: proyecto1,
        title: 'Proyecto 1',
        description: 'si mi loco lo que tu quiera',
        skills: [htmlImg,cssImg],
        link: '',
    },
    {
        id: 2,
        img: proyecto2,
        title: 'Proyecto 2',
        description: 'si mi loco lo que tu quiera',
        skills: [htmlImg,cssImg],
        link: '',
    },
    {
        id: 3,
        img: proyecto3,
        title: 'Proyecto 3',
        description: 'si mi loco lo que tu quiera',
        skills: [htmlImg,cssImg],
        link: '',
    },
    {
        id: 4,
        img: proyecto4,
        title: 'Proyecto 4',
        description: 'si mi loco lo que tu quiera',
        skills: [htmlImg,cssImg],
        link: '',
    },
    {
        id: 5,
        img: proyecto5,
        title: 'Proyecto 5',
        description: 'si mi loco lo que tu quiera',
        skills: [htmlImg,cssImg],
        link: '',
    }

]

export const themes=[
    {
        img:tema1,
        hue: '225'
    },
    {
        img:tema2,
        hue: '271'
    },
    {
        img:tema3,
        hue: '339'
    },
    {
        img:tema4,
        hue: '19'
    },
    {
        img:tema5,
        hue: '4'
    },
    {
        img:tema6,
        hue: '42'
    },
    {
        img:tema7,
        hue: '80'
    }
]