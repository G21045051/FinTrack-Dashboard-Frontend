import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: rgba(34, 34, 96, .6);
        --primary-color3: rgba(34, 34, 96, .4);
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        overflow-x: hidden;
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
        line-height: 1.2;
    }

    @media screen and (max-width: 768px) {
        body {
            font-size: clamp(0.9rem, 1.5vw, 1.2rem);
        }

        h1 {
            font-size: 1.8rem;
        }
        h2 {
            font-size: 1.6rem;
        }
    }
`; 