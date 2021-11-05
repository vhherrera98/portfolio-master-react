import photo from '../Images/photo.jpg'

const User = (props) => {
    return (
        <div style={props.responsive ? { height: '100%' } : { height: '750px' }} className={`${props.responsive ? 'lg:w-900 lg:flex-row mx-auto sm:w-351' : 'w-364'} flex-col bg-white p-25 flex items-center mx-auto my-16 rounded-12 shadow-lg`}>
            <img src={photo} className="w-260 h-260 object-cover object-center rounded-12" alt="" />
            <div className="px-30 lg:h-260">
                <div className={`${props.responsive ? 'flex lg:flex-row flex-col justify-between w-full' : 'mt-20'} `}>
                    <div className={`${props.responsive ? '' : 'mb-20'} lg:mt-0 mt-20`}>
                        <h3 className='text-gray-200 font-600 text-18'>Victor Herrera</h3>
                        <h5 className='font-500 text-gray-300 text-14'>Student</h5>
                    </div>
                    <div className="lg:mt-0 mt-20">
                        <h3 className='text-gray-200 font-500 text-14 flex items-center'>
                            <span class="material-icons mr-8">
                                email
                            </span>
                            vhherrera98@gmail.com
                        </h3>
                        <h5 className='text-gray-200 font-500 text-14 flex items-center'>
                            <span class="material-icons mr-8">
                                call
                            </span>
                            (+591) 76336972
                        </h5>
                    </div>
                </div>
                <div className='mt-25 font-500 text-16 text-gray-300'>
                    <p className="my-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nemo ullam consequuntur, omnis impedit temporibus cum ducimus quam rem? Molestias iusto maiores velit tempora adipisci!
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et!
                    </p>
                </div>
            </div>
        </div >
    )
}

export default User