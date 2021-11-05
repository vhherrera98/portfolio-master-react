import { Link } from 'react-router-dom'
import footer from '../styles/footer'

const Footer = () => (
    <footer style={footer.container}>
        <p style={footer.parrafo}>
            Created by <Link style={footer.enlace} target="_blank" href="https://github.com/vhherrera98">vhherrera98</Link> - devChallenges.io
        </p>
    </footer>
)

export default Footer