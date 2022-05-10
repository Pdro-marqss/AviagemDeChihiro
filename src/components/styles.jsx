import styled from 'styled-components';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';


export const Container = styled.div`
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 15rem;


    img {
        width: 12rem;
    }

    .social {
        display: flex;
        gap: 2.5rem;
    }
`;


export const Facebook = styled(FiFacebook)`
    font-size: 2.5rem;
`;
export const Instagram = styled(FiInstagram)`
    font-size: 2.5rem;
`;
export const Twitter = styled(FiTwitter)`
    font-size: 2.5rem;
`;
export const Youtube = styled(FiYoutube)`
    font-size: 2.5rem;
`;

