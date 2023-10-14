import { MouseEventHandler } from "react";


export interface CustomButtonProps {
    title: string;
    colorStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface HandleDataProps {
    nameFile?: string;
    nameUrl?: string;
}

export interface getDataPops {
    data?: any;
}