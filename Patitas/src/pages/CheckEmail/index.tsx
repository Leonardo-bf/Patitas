import { Button4, Cat1, Div10, Div11, Screen, StyledImage3, StyledImage4, TextButton2 } from "./style";
import {Link} from 'react-router-dom';
const Logo = require("../../assets/logogrande.png");
const Gato = require("../../assets/Cat astronaut-cuate (1) 2.png"); 

export default function CheckEmail(){
    return(
        <Screen>
            <Div10><StyledImage3 src={Logo}/></Div10>
            <Div11>
                <Cat1>
                    <StyledImage4 src={Gato}/>
                </Cat1>
                <Button4><TextButton2><Link to = "/Checked" style ={{ textDecoration: 'none', color: '#E6E8E9'}}>Confirme seu E-mail</Link></TextButton2></Button4>
            </Div11>
        </Screen>
    );
}