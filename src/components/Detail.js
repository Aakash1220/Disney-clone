import React, {useEffect , useState} from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from "../firebase"
function Detail() {
    const { id } = useParams();
    
    const [ movie, setMovies]=  useState()
    useEffect(() => {
    
       db.collection("movies")
       .doc(id)
       .get()
       .then((doc)=>{
           if(doc.exists){
                setMovies(doc.data());
           }else{
               
           }

       }
       )
    }, [])
    
    return (
        <Container>
            {movie && (
                <>
                <Background>
        <img src={movie.backgroundImg} />
        </Background>
        <ImgTitle>
        <img src={movie.titleImg} />
        </ImgTitle>
        <Control>
            <PlayButton>
                <img src="\Images\images\play-icon-black.png" />
                <span>PLAY</span>
            </PlayButton>
            <Trailer>
            <img src="\Images\images\play-icon-white.png" />
                <span>TRAILER</span>
            </Trailer>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <span>
                    <img src="\Images\images\group-icon.png" />
                </span>
            </GroupWatchButton>
        </Control>
        <SubTitle>
        {movie.subTitle}
        </SubTitle>
        <Description>
        {movie.description}
        </Description>
                </>
            )}
        
    </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;

`
const Background = styled.div`
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
        position:fixed;
        opacity:0.8;
        
        img{
            height:100%;
            wifth:100%;
            object-fit:cover;
        }
`
const ImgTitle = styled.div`
height:30vh;
min-height:170px;
width:35vh;
min-width:20px;
margin-top:60px;
        img{
           height:100%;
           width:100%;
           object-fit:contain; 

        }
`
const Control = styled.div`
        display:flex;
        align-items:center;
        
`
const PlayButton = styled.button`
        cursor:pointer;
        display:flex;
        padding: 0px 24px;
        font-size:15px;
        letter-spacing:1.8px;
        background-color:rbg(249,249,249);
        border-radius:4px;
        border:none;
        margin-right:22px;
        display:flex;
        align-items:center;
        height:56px;

        &:hover{
            background-color:rgb(198,198,198);
        }
`
const Trailer = styled(PlayButton)`
        background-color:rgba(0,0,0,0.3);
        border: 1px solid white;
        color:white;
        
`
const AddButton = styled.button`
        cursor:pointer;
        margin-right:16px;
        display:flex;
        justify-content:center;
        align-items:center;
        height:44px;
        width:40px;
        border:white;
        background-color:rgb(0,0,0,0.6);
        color:white;
        border:2px solid white;
        border-radius:50%;
        span{
            color:white;
            font-size:30px;

        }
`
const GroupWatchButton = styled(AddButton)`
        background-color:black;
`
const SubTitle = styled.div`
        font-size:15px;
        margin-top:26px;
        height:20px;
`
const Description = styled.div`
font-size:20px;
        margin-top:16px;
        height:20px;
        line-height:1.4;
        max-width:760px;
`
