export interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean; // Adicione a propriedade disabled aqui
}