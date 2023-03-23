import styled from "styled-components";

export const PostDetail = styled.div`
    margin-bottom: 2em;


    img {
        max-width: 800px;
        margin: 0 auto;
    }

    h2 {
        margin-bottom: .4em;
    }


    p {
        font-family: sans-serif;
    }

    .tags {
        margin-bottom: 1.2em;
        display: flex;
    }

    .tags p {
        margin-right: .5em;
    }

    .tags span {
    font-weight: bold;
    }

    .createdBy {
        font-style: italic;
        font-size: 1em;
        margin-bottom: 1em;
    }


    @media screen and(max-width: 992px) {
     img {
        max-width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .createdBy {
        font-style: italic;
        color: #444;
        font-size: 1em;
        margin-bottom: 1em;
    }
  h2 {
        margin-bottom: .4em;
    }

    .tags p {
        margin-right: .5em;
        display: flex;
    }


    @media screen and(max-width: 600px) {
     img {
        max-width: 95%;
        /* margin: 0 auto; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

     h2 {
        margin-bottom: 1em;
        text-align: center;
    }

    .createdBy {
        width: 100%;
    }

    

     span {
        font-weight: bold;
    }



    @media screen and(max-width: 450px) {
       img {
        max-width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
    }

      .post_detail {
        text-align: center;
    }

      .tags {
        margin-bottom: 2em;
        display: flex;
        justify-content: center;
    }
  
       h2 {
        margin-bottom: .4em;
    }
  
      .createdBy {
        width: 100%;
    }
}
}
}
`




