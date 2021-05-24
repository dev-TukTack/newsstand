import React from 'react';
import { SideBarMenu, Company } from "../contents/SideBar.style";

const SideBar = () => {
	return (
		<SideBarMenu>
			<Company>SBS</Company>
			<Company>MBN</Company>
			<Company>스포츠서울</Company>
		</SideBarMenu>
	);
};

export default SideBar;