import styled from "styled-components"



export const Navbar = styled.nav`
display: flex;
box-shadow: rgba(0,0,0, .15) 0px -2px 10px 0px;
justify-content: space-between;
align-items: center;
padding: .5em 2em;


.brand {
    font-size: 1.2em;
}


.brand span {
    font-weight: 800;
    text-transform: uppercase;
    color: #e32d40;
}

.brand p {
    font-family: sans-serif;
    font-weight: 800;
    color: #e32d40;
}


@media screen and (max-width: 992px) { 
  
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
}


@media screen and (max-width: 535px) { 
max-width: 100%;   
display: flex;
justify-content: space-evenly;  
align-items: center;
}


`


export const LinkList = styled.ul`
    display: flex; 
   list-style: none;
   margin-right: 1em;


   li a {
    padding: .4em .6em;
    color: #e32d40;
    font-weight: 700;
} 

.active {
    background-color: #bb0f0f;
    color: #fff;
}

button {
    color: #e32d40; 
    font-weight: 500;
}



@media screen and (max-width: 535px) { 
display: wrap; 
flex-wrap: wrap;
justify-content: center;
margin-right: 0.8em;
letter-spacing: 0.1em;
margin-bottom: 1em;


li a {
        padding: .2em 3em;
    }  


}

`
    


