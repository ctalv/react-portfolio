// A single Project component that will be used multiple times in the Portfolio section
import portfolioPic from '../assets/images/code-markus-spiske-iar-afB0QQw-unsplash.jpg'
import githubPic from '../assets/images/desktop-joshua-aragon-BMnhuwFYr7w-unsplash.jpg'
import projectOnePic from '../assets/images/project_1.JPG'
import projectTwoPic from '../assets/images/project_2.JPG'



// child of Portfolio page; logic for links and event handling for individual projects
const projects = [
    {
        title: 'Movie Match Maker',
        link: 'https://adamhood15.github.io/movie-match-maker/',
        image: projectOnePic,
        alt: 'Screenshot of Movie Match Maker homepage'
    },
    {
        title: 'The Yum Yum Blog',
        link: 'https://yumyum-blog.herokuapp.com/',
        image: projectTwoPic,
        alt: 'Screenshot of The Yum Yum Blog homepage'
    },
    {
        title: 'GitHub',
        link: 'https://github.com/ctalv',
        image: githubPic,
        alt: 'Matrix movie still; Credit: Markus Spiske via Unsplash'
    },
    {
        title: 'Portfolio Repository',
        link: 'https://github.com/ctalv/react-portfolio',
        image: portfolioPic,
        alt: 'Laptop with monitors displaying code; Credit: Joshua Aragon via Unsplash'
    }
]

export default projects;