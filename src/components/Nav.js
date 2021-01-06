import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/gametar.svg";

const Nav = () => {
	return (
		<div>
			<StyledNav>
				<Logo>
					<img src={logo} alt="logo" />
				</Logo>
				<div className="search">
					<input type="text" />
					<button> Search</button>
				</div>
			</StyledNav>
		</div>
	);
};

const StyledNav = styled(motion.div)`
	// padding: 3rem 5rem;
	border-radius: 3px;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		outline: none;
		box-shadow: 0px 0px 7px rgba(48, 71, 94, 0.51);
	}
	.search {
		margin-top: -9rem;
		border-radius: 6px 0px 0px 6px;
	}
	button {
		font-size: 1.5rem;
		border-radius: 0px 0px 6px 0px;
		box-shadow: 0px 0px 7px rgba(238, 149, 149, 1.3);

		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #e64440;
		color: whitesmoke;
	}
	button:hover {
		background: #f05454;
	}
`;

const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	cursor: pointer;
`;
export default Nav;
