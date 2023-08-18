import { styled } from 'styled-components';

 export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

 export const Form = styled.form`
  box-shadow: 1px 2px 30px 5px #e8f3ffde;
  padding: 20px 80px;
  border-radius: 20px;
`;

 export const Title = styled.h2`
padding-top: 40px;
padding-bottom: 20px;
font-size:36px;
font-weight:bold;
color:#4593FC;
`;

 export const Sub = styled.p`
font-size:14px;
padding-bottom: 20px;
color:rgba(0,0,0,0.7);
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
padding:15px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-top:20px;
  gap: 20px;
`;

export const StyledButton = styled.button`
  background-color: #4593FC;
  color:white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 120px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const StyledInput = styled.input`
  width: 554px; 
  padding: 20px 20px;
  font-size: 16px; 
  border: 1px solid #e8f3ff;
  border-radius: 5px;

  &::placeholder {
    color: #9EC8FF;
  }

  &.error,
  .touched{
    border: 1px solid #ff1064 ;
    box-shadow: 0px 0px 2px #ff1064;
  }
  
`;

export const StyledInputWithCustomStyle = styled(StyledButton)`
    width: 50%;
    margin: 0 auto;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #4593FC;
    color: #4593FC;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const SocialButtons = styled.div`

`;

export const ErrorText = styled.p`
  margin-top: 10px;
  color: #E72D4A;
  font-size: 12px;
`;


export const StyledLabel = styled.label`
  font-weight: bold;
  padding-bottom: 10px;
  color: rgba(0,0,0,0.7);
`;

export const StyledSpan = styled.span`
  padding-top: 10px;
`;

export const DuplicateCheckButton = styled.button`
    width: 20%;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;