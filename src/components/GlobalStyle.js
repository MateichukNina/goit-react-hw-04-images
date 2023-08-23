import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	margin: 0;
	color: #000;
  }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }


  .ImageGalleryItem-image:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }

  
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
   z-index: 1200; 
  }
  
  .Modal {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
    background-color: #fff;
    
  }
ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
}

// img {
//     display: block;
//     max-width: 100%;
//     height: auto;
// }


.Modal img {
   width: 100%;
  height: 100%;
   object-fit: contain;
 }  

`;