import { InputDiv, InputText } from "./styled";

type Info = {
  textPlaceholder: string;
  imageUrl: string; // Adicionado um novo parâmetro para a URL da imagem
};

const InputTexts = ({ textPlaceholder, imageUrl }: Info) => {
  return (
    <InputDiv>
      <img src={imageUrl} alt="Icon" style={{ marginTop: "0px", width: "25px", height: "25px" }} />
      <InputText type="text" placeholder={textPlaceholder} /> 
    </InputDiv>
  );
};

export default InputTexts;
