import React from 'react'
import './portfolio.css'
import Img1 from '../../Assets/portfolio1.jpg';
import Img2 from '../../Assets/portfolio2.jpg';
import Img3 from '../../Assets/portfolio3.jpg';
import Img4 from '../../Assets/portfolio4.jpg';
import Img5 from '../../Assets/portfolio5.png';
import Img6 from '../../Assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: Img1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
    },
    {
        id: 2,
        image: Img2,
        title: 'Charts, Templates & Infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16580766-Orion-Ui-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id: 3,
        image: Img3,
        title: 'Figma Dashboard UI kit for data design web apps',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17290917-Eclips-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id: 4,
        image: Img4,
        title: 'Maintaining tasks & Tracking progress',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
    },
    {
        id: 5,
        image: Img5,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
    },
    {
        id: 6,
        image: Img6,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
    },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        { data.map(({id,image,title,github,demo}) => {
            return(
                <article className="portfolio-item">
                    <div className="portfolio-item-img">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
            )
        })}
      </div>
    </section>
  )
}

export default Portfolio
