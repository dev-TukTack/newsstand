import React from 'react';
import { Container, Category, ListType, right, Item } from "./NavigationBar.style";

const NavigationBar = () => {
	return (
		<Container>
			<Item>
				<Category>뉴스스탠드</Category>
				<Category className="gray"> > 뉴스스탠드</Category>
				<Category>MY 뉴스</Category>
			</Item>

			<right>
				<ListType >카드형</ListType>
				<ListType>리스트형</ListType>

				<ListType > {"<"} </ListType>
				<ListType> {">"} </ListType>
			</right>

		</Container>
	);
};

export default NavigationBar;