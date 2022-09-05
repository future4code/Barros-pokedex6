import styled from "styled-components";

export const NavBarStyle = styled.div `
* {
    margin:0px;
};
nav {
    height:100px;
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items:center;


};
 img{
    width:160px;
 }

`
export const SearchBarStyle = styled.div`
display: flex;
margin:0px auto;
padding: 0 20px;
align-items:center;
div{
    background-color:white;
    margin-right:20px;
};
input{
    padding: 10px;
    box-shadow:0px 2px 2px (0,0,0,0.25);
    border-radius:3px;
    border: none;
};
button{
    background-color: #0e6f9f;
    border: none;
    border-radius: 10px;
    height:44px;
    color: white;
    padding: 10px 12px;
}
`
export const PokedexStyle = styled.div`
div{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:10px
};
.pokedex-grid{
    display:grid;
    gap:10px;
    grid-template-columns: repeat(3,1fr);
};
`