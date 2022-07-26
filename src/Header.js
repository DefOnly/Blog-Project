import { FaNewspaper, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
        <p>{title}</p>
        {width < 768 ? <FaMobileAlt /> 
            : width < 992 ? <FaTabletAlt />
              : <FaNewspaper /> }
    </header>
  )
}

export default Header