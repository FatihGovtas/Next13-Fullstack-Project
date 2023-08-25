import { IconType } from "react-icons";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form"

export type CategoriesItemProps = {
    name: string;
    icon: IconType;
    selected: boolean;
}

export interface UserMenuItemProps {
    name: string;
    onClick: () => void
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    btnLabel: string;
    title: string;
    bodyElement?: React.ReactElement;
    footerElement?: React.ReactElement;
}

export interface ButtonProps {
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    btnLabel: string;
    outline?: boolean;
    icon?: IconType;
}

export interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    required: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

export type Inputs = {
    example: string;
    exampleRequired: string;
};

export interface CategorySelectProps {
    name: string;
    icon: IconType;
    selected: boolean;
    onClick: (category:string) => void;
}

export interface CountrySelectProps {
    value?: string | any;
    onChange: (value: any) => void;
}

export interface CounterSelectProps {
    title: string;
    description: string;
    value: number;
    onChange: (value: number) => void;
}