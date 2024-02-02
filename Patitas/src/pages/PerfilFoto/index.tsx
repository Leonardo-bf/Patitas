import { Back, BCenter, BDiv1, BodyDiv, BottomDiv, Button, BVolta, ImgBot, ImgCenter, Screen, TextButton, TopDiv, Txt, Txt2 } from "./style";
import {Link} from 'react-router-dom';
const Volta = require("../../assets/Group 4.png")
const Nuvem = require("../../assets/et_upload.png");
const NavBar = require("../../assets/Navbar.png");

export default function PerfilFoto(){
    return(
        <Screen>
            <TopDiv>
                <BVolta>
                    <Link to = "/Perfil" style ={{ textDecoration: 'none', color: '#E6E8E9'}}>
                        <BDiv1>
                            <Back src={Volta}/>
                            <Txt>Voltar</Txt>
                        </BDiv1>
                    </Link>
                </BVolta>
            </TopDiv>
            <BodyDiv>
                <BCenter>
                    <Txt2>Alterar foto de perfil</Txt2>
                </BCenter>
                <ImgCenter src = {Nuvem}/>
                <Button><TextButton>Baixar Foto</TextButton></Button>
            </BodyDiv>
            <BottomDiv>
                <ImgBot src={NavBar}/>
            </BottomDiv>
        </Screen>
    );
    

}