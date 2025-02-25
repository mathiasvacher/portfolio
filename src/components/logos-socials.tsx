import linkedinLogo from '../assets/img/linkedin.svg';
import githubLogo from '../assets/img/github.svg';

function LogoSocials() {

    return (
        <div className="logos-socials">
            <a href="https://www.linkedin.com/in/mathias-vacher/" target="_blank" rel="noopener noreferrer" >
                <img src={linkedinLogo} alt="LinkedIn Logo" className='linkedin'/>
            </a>

            <a href="https://github.com/mathiasvacher/" target="_blank" rel="noopener noreferrer" >
                <img src={githubLogo} alt="GitHub Logo" className='github'/>
            </a>
        </div>
    )
}

export default LogoSocials