import InputTexts from "../../components/InputText";
import { TextS, TextL, TextButton, StyledImage1, StyledImage, Button1, Button2, Div1, Div2, Div3, Div4, Screen } from "./style";
import {Link} from 'react-router-dom';

const Logo = require("../../assets/Logo.png");
const Mask = require("../../assets/Mask group.png");

export default function Login(){
    return(
        <Screen>
            <Div1>
                <StyledImage  src= {Logo}/>
                <StyledImage1 src= {Mask}/>
            </Div1>
            <Div2>
                <Div3>
                    <TextL>Login</TextL>
                    <InputTexts textPlaceholder={"Digite seu..."} imageUrl={require("../../assets/u_home-alt.png")}/>
                </Div3>
                <Div3>
                    <TextL>Senha</TextL>
                    <InputTexts textPlaceholder={"Digite seu..."} imageUrl={require("../../assets/a_home-alt.png")}/>
                </Div3>
                <TextS>Esqueci minha senha</TextS>
            </Div2>
            <Div4>
                <Button1><TextButton><Link to = "/Perfil" style ={{ textDecoration: 'none', color: '#E6E8E9'}}>Entrar</Link></TextButton></Button1>
                <Button2><TextButton><Link to = "/Register" style ={{ textDecoration: 'none', color: '#E6E8E9'}}>Cadastrar</Link></TextButton></Button2>
            </Div4>

        </Screen>
            
    );
}