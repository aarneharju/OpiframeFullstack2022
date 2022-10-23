import { useNavigate } from 'react-router-dom';

const About = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>This is a router example app</h2>
            <button onClick={() => navigate('/secret')}>Got to secret page</button>
        </div>
    )
}

export default About;