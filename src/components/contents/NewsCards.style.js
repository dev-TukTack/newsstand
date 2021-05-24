import styled from 'styled-components';

const Cards = styled.div`
	padding: 15px;
`;

const CardInfo = styled.div`
`;

const NewsInfo = styled.div`
	display: flex;
	flex-direction: row;
`;

const Publisher = styled.span`
	margin-right: 10px;
	font-weight: bold;
`;

const RegistDate = styled.span`
	margin-right: 10px;
	color: #949494;
`;

const Close = styled.span`
	margin-right: 10px;
	font-weight: bold;
	color: #949494;
`;

const Thumbnail = styled.div`
	margin-bottom: -70px;
`;

const ThumbnailImg = styled.img`
	width: 25vh;
	height: 18vh;
	padding: 10px 0;
	object-fit:contain;
`;

const ThumbnailText = styled.div`
	width: calc(25vh - 10px);
	padding: 5px;
	position: relative;
	top: -70px;
	color: #fff;
	background-color: rgba(0,0,0,.4);
`;

const NewsList = styled.div`
	padding: 10px;
	
	& .
`;

export { Cards, CardInfo, Publisher, RegistDate, Close, NewsInfo, Thumbnail, ThumbnailImg, ThumbnailText, NewsList }