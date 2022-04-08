import logosvg from '../../svg/logo.svg';

function Header (){

  const descLogo = 'Essa é a logo do blog';

  return(
    <>
    <header className='flex-space-between'>
      <div className="logo">
        <img src={logosvg} alt={descLogo} />
      </div>
      <div className="search">
        <input type="text" className="input-search" name="search" />
      </div>
      <ul className="menu">
        <li><a href="#" className="nav-link">Home</a></li>
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link">Cases</a></li>
      </ul>
    </header>
    </>
  );
}

export default Header;