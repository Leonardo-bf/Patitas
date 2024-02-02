import { Screen,Div12, StyledImage5, Div13, Cat2, StyledImage6, Button5, TextButton3 } from "./style";
import {Link} from 'react-router-dom';

const Logo = require("../../assets/logogrande.png");
const Dog = require("../../assets/Dog paw-cuate 2.png"); 

export default function Checked(){
    return(
        <Screen>
            <Div12><StyledImage5 src={Logo}/></Div12>
            <Div13>
                <Cat2>
                    <StyledImage6 src={Dog}/>
                    <Button5><TextButton3><Link to = "/Perfil" style ={{ textDecoration: 'none', color: '#E6E8E9'}}>E-mail confirmado</Link></TextButton3></Button5>
                </Cat2>
            </Div13>
        </Screen>
    );
}