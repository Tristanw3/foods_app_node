import styled from 'styled-components';

export const MenuCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.background};
	height: 400px;
	flex-basis:50%;
	flex-grow:1;
	box-sizing: border-box;

	&:hover {
		background: hotpink;
	}

	@media (max-width: 1000px) {
		// width: 100%;
	}
`;

export const MenuText = styled.div`
	display: block;
	color: #222;
`;
