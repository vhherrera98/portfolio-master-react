import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='h-60 flex items-center bg-blue-100 text-white'>
            <div className="container mx-auto flex justify-between">
                <h1 className='font-700'>Portfolio</h1>
                <div className="nav-links">
                    <Link to='/'>View 1</Link>
                    <Link to='/view1' className="ml-20">View 2</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation