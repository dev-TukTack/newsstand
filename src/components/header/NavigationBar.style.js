import styled from 'styled-components';

const Container = styled.div`
	border-bottom: 1px solid #eaeef3;
	display: flex;
	flex-direction: row;
	padding: 10px 15px;
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
	
	&.gray { color: #868686; }
`;

const ListType = styled.div`
	margin-right: 10px;
`;

const MoveButton = styled.div`
	padding: 0 10px;
`;

const right = styled.div`
	float: right;
`;


export { Container, Category, ListType, right, Item, MoveButton};