import {LoadBtn} from './Button.styled'


export const Button = ({ onClick, children }) => {
  return (
    <>
      <LoadBtn onClick={onClick}>{children}</LoadBtn>
    </>
  );
};