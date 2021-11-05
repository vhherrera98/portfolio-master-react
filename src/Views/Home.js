import RecipeBlog from '../Components/RecipeBlog'
import Blog from '../Components/Blog'
import User from '../Components/User'
import ProgressBar from '../Components/ProgressBar'
import Experiencie from '../Components/Experiencie'
import Hobbies from '../Components/Hobbies'
import Projects from '../Components/Projects'
// import Gaming from '../Images/gaming.jpg'
// import Cooking from '../Images/cooking.jpg'
// import Biking from '../Images/biking.jpg'
import React from 'react'
// import Nivea from '../Images/nivea.png'
import Stack from '../Images/stack.png'
import Adidas from '../Images/adidas.png'

const skillsFront = [
    { title: 'React', percent: '80' },
    { title: 'JavaScript', percent: '100' },
    { title: 'CSS', percent: '60' },
    { title: 'Vue', percent: '70' },
    { title: 'Redux', percent: '50' },
    { title: 'React Native', percent: '80' }
]


const exp = [
    {
        image: Adidas,
        date: 'Feb 2017 - Current',
        title: 'Front-end developer',
        description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    },
    {
        image: Stack,
        date: 'Aug 2016 - Feb 2018',
        title: 'Full-stack developer',
        description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    }
    // },
    // {
    //     image: Nivea,
    //     date: 'Jun 2015 - Aug 2016',
    //     title: 'Junior front-end developer',
    //     description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    // }
]

const projects = [
    { id: 1, title: 'React' },
    { id: 2, title: 'Vue' },
    { id: 3, title: 'Responsive' }
]

const Home = () => {
    return (
        <div id="home" className="pt-50 container mx-auto">
            <div className="grid grid-cols-1 mb-20">
                <User
                    responsive={true}
                />
            </div>
            <div className="lg:w-900 mx-auto grid lg:grid-cols-2 grid-cols-1">
                <div className="grid grid-cols-1">
                    <ProgressBar
                        title="FRONT END"
                        skills={skillsFront}
                    />
                    <Hobbies />
                </div>
                <div className="grid grid-cols-1">
                    <Blog />
                    <Experiencie
                        exp={exp}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1">
                <Projects
                    titleComponent="Projects"
                    project={projects}
                />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <RecipeBlog />
                <RecipeBlog />
                <RecipeBlog />
            </div>
        </div>
    )
}

export default Home