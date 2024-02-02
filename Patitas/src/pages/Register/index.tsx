import InputTexts from "../../components/InputText";
import { Button3, Div5, Div6, Div7, Div8, Div9, Screen, StyledImage2, TextButton1 } from "./style";
import {Link} from 'react-router-dom';
const Logo = require("../../assets/Logo.png");


export default function Register(){
    return(
        <Screen>
            <Div5>
                <StyledImage2 src={Logo}/>
            </Div5>
            <Div6>
                <Div7>
                    <InputTexts textPlaceholder={"Nome..."} imageUrl={require("../../assets/person.png")}/>
                </Div7>
                <Div7>
                    <InputTexts textPlaceholder={"CPF..."} imageUrl={require("../../assets/cpf.png")}/>
                </Div7>
                <Div7>
                    <InputTexts textPlaceholder={"E-mail..."} imageUrl={require("../../assets/arroba.png")}/>
                </Div7>
                <Div7>
                    <InputTexts textPlaceholder={"Senha..."} imageUrl={require("../../assets/a_home-alt.png")}/>
                </Div7>
                <Div7>
                    <InputTexts textPlaceholder={"Confirmar Senha..."} imageUrl={require("../../assets/a_home-alt.png")}/>
                </Div7>
                <Div8>
                    <input type="checkbox"/> Concordo com os Termos
                </Div8>
            </Div6>
            <Div9>
                <Button3>
                    <TextButton1><Link to = "/Perfil" style ={{ textDecoration: 'none', color: '#E6E8E9'}}>Entrar</Link></TextButton1>
                </Button3>
            </Div9>
        </Screen>
    );
}