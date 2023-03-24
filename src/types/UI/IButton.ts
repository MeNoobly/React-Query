export interface IButtonProps {
    text: string;
    onClick?: (event: React.MouseEvent) => void;
    disabled?: boolean;
    type?: "submit";
}