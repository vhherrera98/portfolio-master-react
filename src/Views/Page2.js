// import Blog from "../Components/Blog"
import ProgressBar from "../Components/ProgressBar"
import User from "../Components/User"
import Experiencie from "../Components/Experiencie"
import Nivea from '../Images/nivea.png'
import Stack from '../Images/stack.png'
import Adidas from '../Images/adidas.png'
import Hobbies from "../Components/Hobbies"
import Projects from "../Components/Projects"
import RecipeBlog from "../Components/RecipeBlog"
import Blog from "../Components/Blog"

const propiedad = [
    {
        title: 'React',
        percent: '80'
    },
    {
        title: 'Vue',
        percent: '50'
    },
    {
        title: 'JavaScript',
        percent: '90'
    },
    {
        title: 'CSS',
        percent: '100'
    },
    {
        title: 'HTML',
        percent: '100'
    },
]

const programas = [
    {
        title: 'VS Code',
        percent: '80'
    },
    {
        title: 'Figma',
        percent: '60'
    }
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
    },
    {
        image: Nivea,
        date: 'Jun 2015 - Aug 2016',
        title: 'Junior front-end developer',
        description: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
    }
]

const Page2 = () => {
    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="col-span-1">
                    <div className="flex flex-col">
                        <User />
                        <Experiencie
                            exp={exp}
                        />
                        <Hobbies />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className="flex flex-col">
                            <ProgressBar
                                skills={propiedad}
                                title="FRONT END"
                            />
                        </div>
                        <div className="flex flex-col">
                            <ProgressBar
                                title="DESIGN"
                                skills={programas}
                            />
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <Projects
                                titleComponent="Projects"
                            />
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <RecipeBlog
                                responsive={true}
                            />
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <RecipeBlog
                                responsive={true}
                            />
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <RecipeBlog
                                responsive={true}
                            />
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <Projects
                                titleComponent="Blog"
                                project={[
                                    { id: 1, title: 'How to organize your CSS' }
                                ]}
                            />
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <Blog
                                responsive={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page2