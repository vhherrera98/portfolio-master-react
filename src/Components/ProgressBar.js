import React, { Component } from 'react';

class ProgressBar extends Component {
    state = {
        skills: []
    }

    componentDidMount() {
        this.setState({
            skills: this.props.skills
        })
    }

    componentDidCatch() {
        this.setState({
            skills: this.props.skills
        })
    }

    render() {
        // const { cant } = this.props

        return (
            <div style={styles} className={`${this.props.responsive ? 'lg:w-900 md:w-364' : 'w-364'} block mx-auto w-364 my-20 bg-white rounded-12 p-20`}>
                <h5 className="text-gray-200 font-700 text-18 pb-10">{this.props.title}</h5>
                <div className={`grid ${this.props.responsive ? 'lg:grid-cols-2 md:grid-cols-1' : 'grid-cols-1'}`}>
                    {
                        this.state.skills.map((sk, i) => {
                            return (
                                <div className="flex items-center justify-between my-5" key={i}>
                                    <p className={`${this.props.responsive ? 'ml-20' : ''}  font-500 text-14 text-gray-200`}>{sk.title}</p>
                                    <div className={`${this.props.responsive ? 'lg:w-348 md:w-md70' : ''} h-10 w-md60 bg-gray-800 rounded-12`}>
                                        <div
                                            style={{ width: `${sk.percent}%` }}
                                            className={`rounded-12 h-full ${sk.percent < 1} bg-blue-100`}>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        );

    }
}

const styles = {
    minHeight: '120px',
    height: 'auto'
}

export default ProgressBar