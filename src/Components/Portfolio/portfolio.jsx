import React from 'react'
import './portfolio.css'
import Img1 from '../../Assets/portfolio1.jpg';
import Img2 from '../../Assets/portfolio2.jpg';
import Img3 from '../../Assets/portfolio3.jpg';
import Img4 from '../../Assets/portfolio4.jpg';
import Img5 from '../../Assets/portfolio5.png';
import Img6 from '../../Assets/chat.png';

const data = [
    {
        id: 1,
        image: Img1,
        title: 'NxtTrendz E-Commerce Application',
        github: 'https://github.com',
        demo: 'https://gknxttrendz.ccbp.tech'
    },
    {
        id: 2,
        image: Img6,
        title: 'Real-Time Chat Application',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/21332880-Chat-Mobile-App'
    },
    {
        id: 3,
        image: Img2,
        title: 'Simple Stop-watch Application',
        github: 'https://github.com',
        demo: 'https://gkstopwatch.ccbp.tech'
    },
    {
        id: 4,
        image: Img3,
        title: 'Wiki Search Application',
        github: 'https://github.com',
        demo: 'https://kishoresaiwiki.ccbp.tech'
    },
    {
        id: 5,
        image: Img4,
        title: 'Todo Application',
        github: 'https://github.com',
        demo: 'https://kishoresaitodo.ccbp.tech'
    },
    {
        id: 6,
        image: Img5,
        title: 'Simple Cash Withdrawal Demo',
        github: 'https://github.com',
        demo: 'https://gkcashwithdraw.ccbp.tech'
    }
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
                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </article>
            )
        })}
      </div>
    </section>
  )
}

export default Portfolio
