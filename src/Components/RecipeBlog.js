import { Link } from 'react-router-dom'
import Recipe from '../Images/recipe.png'

const RecipeBlog = ({ responsive }) => {
    return (
        <div className={`${responsive ? 'lg:w-900 lg:flex-row sm:w-351' : 'lg:w-290 w-351'} flex flex-col p-25 mx-auto bg-white rounded-12 shadow-lg my-20`}>
            <img className="lg:w-267 lg:h-267 rounded-12 object-cover object-center mx-auto" src={Recipe} alt="" />
            <div className='lg:px-20 lg:pt-0 px-0 pt-20'>
                <div className={`${responsive ? '' : 'mt-20'} flex`}>
                    <span className="mr-12 font-500 text-gray-200 text-14">#HTML</span>
                    <span className="mr-12 font-500 text-gray-200 text-14">#CSS</span>
                    <span className=" font-500 text-gray-200 text-14">#responsive</span>
                </div>
                <h1 className="font-500 text-24 text-gray-333 my-12">Recipe Blog</h1>
                <p className="font-500 text-16 text-gray-300">
                    In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                </p>
                <div className={`${responsive ? 'lg:mt-55' : ''} flex mt-20`}>
                    <Link to="/" className="bg-blue-100 px-20 py-6 text-white rounded-12 font-500 text-14">Demo</Link>
                    <Link to="/" className="ml-12 border border-solid border-blue-100 px-20 py-6 text-blue-100 rounded-12 font-500 text-14">Code</Link>
                </div>
            </div>
        </div >
    )
}

export default RecipeBlog