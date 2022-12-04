import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<nav>
			<NavLink to="." end>
				Go to Home
			</NavLink>
			<NavLink to="Contacts">Go to Contacts</NavLink>
			<NavLink to="Courses">Go to Courses</NavLink>
			<NavLink to="About">Go to About</NavLink>
		</nav>
	);
};

export default Menu;
