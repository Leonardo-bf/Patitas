import { Screen, TopDiv, ImgDiv, BodyDiv, Back, ImgPerfil, Bperfil, BText, SText, IconButton, BDiv, Txt, BVolta, BDiv1, Txt2, CDiv } from "./style";
import {Link} from 'react-router-dom';
const Volta = require("../../assets/Group 4.png")
const Foto = require("../../assets/fotoperfil.png")
const Seta = require("../../assets/Vector.png")


export default function Perfil(){
    return(
        <Screen>
            <TopDiv>
                <BVolta>
                    <Link to = "/" style ={{ textDecoration: 'none', color: '#E6E8E9'}}>
                        <BDiv1>
                            <Back src={Volta}/>
                            <Txt>Voltar</Txt>
                        </BDiv1>
                    </Link>
                </BVolta>
                
            </TopDiv>
            <ImgDiv>
                <ImgPerfil src={Foto}/>
            </ImgDiv>
            <BodyDiv>
                <Txt2>Configurações de Perfil</Txt2>
                <Bperfil>
                    <Link to = "/PerfilFoto" style ={{ textDecoration: 'none', color: 'black'}}>
                        <BDiv>
                            <BText>Alterar foto de usuário</BText>
                            <IconButton src={Seta}/>
                        </BDiv>
                    </Link>
                </Bperfil>
                <Bperfil>
                    <BDiv>
                        <BText>Alterar nome de usuário</BText>
                        <CDiv>
                            <SText>Rayssa</SText>
                            <IconButton src={Seta}/>
                        </CDiv>
                    </BDiv>
                </Bperfil>
                <Bperfil>
                    <Link to = "/CheckEmail" style ={{ textDecoration: 'none', color: 'black'}}>
                        <BDiv>
                            <BText>Email</BText>
                            <CDiv>
                                <SText>rayssa@gmail.com</SText>
                                <IconButton src={Seta}/>
                            </CDiv>
                            
                        </BDiv>
                    </Link>
                </Bperfil>
                <Bperfil>
                    <BDiv>
                        <BText>Trocar de Senha</BText>
                        <CDiv>
                            <SText>***********</SText>
                            <IconButton src={Seta}/>
                        </CDiv>
                    </BDiv>
                </Bperfil>
                <Bperfil>
                    <BDiv>
                        <BText>Meus endereços</BText>
                        <CDiv>
                            <SText>R. Dionísio, 72 - RJ</SText>
                            <IconButton src={Seta}/>
                        </CDiv>
                    </BDiv>
                </Bperfil>
                <Bperfil>
                    <BDiv>
                        <BText>Cartões de crédito</BText>
                        <CDiv>
                            <SText>Mastercard-***</SText>
                            <IconButton src={Seta}/>
                        </CDiv>
                    </BDiv>
                </Bperfil>
                <Bperfil>
                    <BDiv>
                        <BText>Alterar informações do Pet</BText>
                        <IconButton src={Seta}/>
                    </BDiv>
                </Bperfil>
                <Bperfil>
                    <BDiv>
                        <BText>Excluir conta</BText>
                        <IconButton src={Seta}/>
                    </BDiv>
                </Bperfil>
            </BodyDiv>
        </Screen>
    );
}