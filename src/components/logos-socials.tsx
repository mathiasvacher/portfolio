import linkedinLogo from '../assets/img/linkedin.svg';

function LogoSocials() {

    return (
        <div className="logos-socials">
            <a href="https://www.linkedin.com/in/mathias-vacher/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn Logo"/>
            </a>
        </div>
    )
}

export default LogoSocials