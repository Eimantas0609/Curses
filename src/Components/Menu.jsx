import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
    <Link to='/'>Go to Home</Link>    
   <Link to='/Contacts'>Go to Contacts</Link>
   <Link to='/Works'>Go to Works</Link>
   <Link to='/About'>Go to About</Link>
    </nav>    
  )
}

export default Menu