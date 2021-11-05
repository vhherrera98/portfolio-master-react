import { Link } from "react-router-dom"
import Laptop from '../Images/laptop.png'

const Blog = ({ responsive }) => {
    return (
        <div style={responsive ? {} : { width: '364px', height: '93%' }} className={`${responsive ? 'lg:w-900 w-md70' : 'sm:w-md80'} mx-auto overflow-hidden my-20 py-20 pl-20 grid grid-cols-2 gap-20 bg-white rounded-12`}>
            <div>
                <h5 className="font-500 text-16 text-gray-900 mb-12">Blog</h5>
                <h1 style={{ lineHeight: '29px' }} className="lg:h-auto h-261 lg:w-md40 w-md70 font-500 text-24 text-gray-333">How to organize your CSS</h1>
            </div>
            <div className={`${responsive ? 'lg:row-span-2 lg:col-span-1 relative right-0' : 'relative'} row-span-1`}>
                <img style={{ right: '0' }} className={`${responsive ? 'lg:w-396 lg:h-321 absolute' : 'mt-30'} w-500 h-267 object-cover md:top-20`} src={Laptop} alt="" />
            </div>
            <div className={`${responsive ? 'lg:row-span-2 lg:col-span-1 col-span-2' : 'col-span-2'} row-span-1`}>
                <p className={`${responsive ? ' mb-50' : 'mb-16'} font-500 text-16 text-gray-300`}>
                    In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
                    <br /> <br />
                    Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                </p>
                <Link to='/' className="text-blue-100 font-500 text-16">dev.to</Link>
            </div>
        </div>
    )
}

export default Blog