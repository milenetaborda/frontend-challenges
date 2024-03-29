import chevron from "@/assets/icons/chevron-bottom.svg";
import { ComponentProps } from "react";
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from "./styles";

type SelectProps = ComponentProps<typeof FilterInput> & {
  label: string;
  name: string;
  options: {
    value: string | number;
    label: string;
  }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ label, name, options, onChange }: SelectProps) {
  return (
    <Filter>
      <FilterLabel htmlFor={name}>{label}</FilterLabel>
      <FilterWrapper>
        <FilterInput name={name} id={name} onChange={onChange}>
          <FilterInputOption value="" disabled selected>
            Selecione
          </FilterInputOption>
          {options.map((option) => {
            return (
              <FilterInputOption key={option.value} value={option.value}>
                {option.label}
              </FilterInputOption>
            );
          })}
        </FilterInput>
        <img src={chevron} alt="" />
      </FilterWrapper>
    </Filter>
  );
}
