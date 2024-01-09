import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: String;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  textStyles?: String;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface LoginButtonProps {
  title: string;
  containerStyles?: String;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  textStyles?: String;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturers: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model:string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
