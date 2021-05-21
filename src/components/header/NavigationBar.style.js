import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin: 10px;
	padding: 5px 10px;
`;

const Item = styled.div`
	${props => {
		return `
			flex: ${props.flexNum};
			flex-direction: ${props.direction === "reverse" ? "row-reverse" : "row"};
		`
	}}
	
	display: flex;
`;

const Category = styled.div`
	font-size: 18px;
	margin-right: 10px;
	font-weight: bold;
	
	&.gray {
		color: #868686;
	}
`;

const ListType = styled.div`
`;

const MoveButton = styled.div`
`;

const right = styled.div`
	float: right;
`;


export { Container, Category, ListType, right, Item, MoveButton};