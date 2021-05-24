import React from 'react';
import { Container, Category, ListType, right, Item, MoveButton } from "./NavigationBar.style";

const NavigationBar = () => {
	return (
		<Container>
			<Item flexNum="3">
				<Category>뉴스스탠드</Category>
				<Category className="gray"> > 뉴스스탠드</Category>
				<Category>MY 뉴스</Category>
			</Item>

			<Item flexNum="2">
				<ListType >카드형</ListType>
				<ListType>리스트형</ListType>
			</Item>

			<Item flexNum="1" direction="reverse">
				<MoveButton > {">"} </MoveButton>
				<MoveButton > {"<"} </MoveButton>
			</Item>

		</Container>
	);
};

export default NavigationBar;