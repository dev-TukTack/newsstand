import React from 'react';
import * as Styled from "./NewsCards.style";

const NewsCards = () => {
	return (
		<Styled.Cards>
			<Styled.CardInfo>
				<Styled.Publisher>MBC </Styled.Publisher>
				<Styled.RegistDate>09.26 16:16 편집</Styled.RegistDate>
				<Styled.Close> Ⅹ </Styled.Close>
			</Styled.CardInfo>

			<Styled.NewsInfo>
				<Styled.Thumbnail>
					<Styled.ThumbnailImg src="https://s.pstatic.net/static/newsstand/2021/0502/article_img/new_main/9009/215456_001.jpg"/>
					<Styled.ThumbnailText>'기관·외인 여전히 유리'...'최소 2가지 개선해야'</Styled.ThumbnailText>
				</Styled.Thumbnail>

				<Styled.NewsList>
					<div >"이건희 삼성전자 지분, 왜 이재용에 몰아주지 않았을까"</div>
					<div>"이건희 삼성전자 지분, 왜 이재용에 몰아주지 않았을까"</div>
					<div>"이건희 삼성전자 지분, 왜 이재용에 몰아주지 않았을까"</div>
					<div>"이건희 삼성전자 지분, 왜 이재용에 몰아주지 않았을까"</div>
				</Styled.NewsList>
			</Styled.NewsInfo>

		</Styled.Cards>
	);
};

export default NewsCards;