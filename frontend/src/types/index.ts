export interface InputProps {
  placeholder?: string;
  type?: string;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (x: any) => void;
  value: string | number;
  errors?: any;
}
export interface LabelProps {
  children: string;
}
