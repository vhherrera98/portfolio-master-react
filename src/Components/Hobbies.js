import Gaming from '../Images/gaming.jpg'
import Cooking from '../Images/cooking.jpg'
import Biking from '../Images/biking.jpg'

const exp = [
    {
        image: Gaming,
        title: 'Gaming',
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        image: Cooking,
        title: 'Cooking',
        description: 'Quisque feugiat malesuada molestie.'
    },
    {
        image: Biking,
        title: 'Biking',
        description: 'Quisque feugiat malesuada molestie.'
    }
]

const Hobbies = ({ responsive }) => {
    return (
        <div className={`${responsive ? 'lg:w-900' : 'md:w-364'} mx-auto my-20 bg-white rounded-12 p-20 w-md70`}>
            <h1 className="font-500 text-gray-200 text-24 mb-12">Hoobies</h1>
            <div className={`grid ${responsive ? 'lg:grid-cols-3 md:grid-cols-1' : 'grid-cols-1'} gap-20 pb-20`}>
                {
                    exp.map((x, i) => {
                        return (
                            <div key={i} className="lg:mb-0 mb-20">
                                <img className="lg:h-139 h-119 w-full object-cover rounded-12" src={x.image} alt="" />
                                <div className="flex flex-col mt-18">
                                    <h3 className='mb-6 my-0 font-600 text-16 text-gray-333'>{x.title}</h3>
                                    <p className='font-500 text-16 text-gray-300'>{x.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Hobbies