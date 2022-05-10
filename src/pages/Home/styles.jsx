import styled from 'styled-components';
import { FiPlay } from 'react-icons/fi';

export const MainContainer = styled.div`
    display: flex;

    img {
        margin-left: 10rem;
    }
`;

export const TextContainer = styled.div`
    /* border: 2px solid red; */
    padding: 5rem 15rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;


    h2 {
        font-size: 1.7rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    h1 {
        font-size: 6rem;
        font-weight: 900;
        text-transform: uppercase;
        line-height: 7rem;
    }

    p {
        font-size: 1.3rem;
        font-weight: 400;
    }

    .buttons-container {
        display: flex;
        gap: 3rem;
        margin-top: 2rem;

        button {
            width: 300px;
            height: 58px;

            font-size: 1.2rem;
            font-weight: 500;
            color: white;
            text-transform: uppercase;
            transform: skew(-20deg, 0deg);
            -webkit-transform: skew(-20deg, 0deg);
            -moz-transform: skew(-20deg, 0deg);
            -o-transform: skew(-20deg, 0deg);
        }

        .btn-fill {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            background-color: #658E76;
            border: none;
        }

        .btn-border {
            border: 3px solid #658E76;
            background: transparent;
        }
    }
`;

export const Play = styled(FiPlay)`
    
`;

