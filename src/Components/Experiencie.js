import React, { useState, useEffect } from 'react'

const Experiencie = ({ responsive, exp }) => {

    const [exps, setExps] = useState(exp)
    const [countProject, setCountProjects] = useState(false)

    useEffect(() => {
        const number = exps === undefined ? false : exps.length
        setCountProjects(number)
        console.log(exp)
    }, [exps])

    return (
        <div className={`${responsive ? 'lg:w-900' : 'md:w-364'} mx-auto my-20 bg-white rounded-12 p-20 w-md70`}>
            <h1 className="font-500 text-gray-200 text-24">Experiencie</h1>
            <div className={`${responsive ? 'lg:grid-cols-3 md:grid-cols-1' : 'grid-cols-1'} grid gap-20 pb-20`}>
                {
                    countProject
                        ?
                        exps.map((x, i) => {
                            return (
                                <div className="flex flex-start" key={i}>
                                    <img className="object-cover rounded-12" style={{ height: '84px', width: '84px' }} src={x.image} alt="" />
                                    <div className="flex flex-col mt-18 pl-20">
                                        <h5 className='font-500 text-14 text-gray-300'>{x.date}</h5>
                                        <h3 className='lg:h-50 md:h-auto my-12 font-600 text-16 text-gray-333'>{x.title}</h3>
                                        <p className='font-500 text-16 text-gray-300'>{x.description}</p>
                                    </div>
                                </div>
                            )
                        })
                        :
                        ''
                }
            </div>
        </div>
    )
}

export default Experiencie