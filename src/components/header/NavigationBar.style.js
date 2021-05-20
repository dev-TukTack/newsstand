import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	margin: 10px;
	padding: 5px 10px;
`;
const Item = styled.div`
	flex: 1
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
	float: right;
`;
const right = styled.div`
	float: right;
`;


export { Container, Category, ListType, right, Item};