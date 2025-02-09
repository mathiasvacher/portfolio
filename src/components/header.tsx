import HeaderNav from './headernav.tsx';
function Header() {

  return (
    <header>

        <div className='header-wrapper'>

            <div className="header-container desktop">
                <div className="nom">
                    <a href="/portfolio/">
                        <h1>Mathias Vacher</h1>
                    </a>
                </div>

                <HeaderNav />       
            </div>

            <div className="header-container mobile">
                <div className="nom">
                    <a href="/portfolio/">
                        <h1>Mathias Vacher</h1>
                    </a>
                </div>

                <div className="menu-icon">
                    <input className="menu-icon__cheeckbox" type="checkbox" />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
            
        </div>
    
        

        
        
    </header>

  )
}

export default Header
