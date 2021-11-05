import React, { useState, useEffect } from 'react'

const Projects = ({ project, titleComponent }) => {

    const [projects, setProjects] = useState(project)
    const [countProject, setCountProjects] = useState(false)

    useEffect(() => {
        const number = projects === undefined ? false : projects.length
        setCountProjects(number)
    }, [projects])

    return (
        <div className="lg:w-900 mx-auto my-20 bg-white rounded-12 p-20 w-md70">
            <h1 className="font-600">{titleComponent} {!countProject ? '(0)' : `(${countProject})`}</h1>
            <div className={`${countProject ? 'mt-20' : ''} flex lg:flex-row md:flex-row sm:flex-row flex-col`}>
                {
                    countProject
                        ?
                        projects.map(({ id, title }) => {
                            return (
                                <button key={id} className="focus:border-blue-100 focus:bg-blue-100 focus:text-white lg:mb-0 md:mb-0 sm:mb-0 mb-12 text-14 font-500 py-5 px-18 mr-16 rounded-12 text-gray-333 border bg-white hover:border-blue-100 hover:text-blue-100">{title}</button>
                            )
                        })
                        :
                        ''
                }
            </div>
        </div>
    )
}

export default Projects