"use client";

import Select from "react-select";
import Countries from "world-countries";
import { CountrySelectProps } from "@/types";

export const getCountries = Countries?.map((countries) => {
  return {
    name: countries.name.common,
    flag: countries.flag,
    lating: countries.latlng,
  };
});

const options: any = getCountries.map((country) => ({
  value: country.name,
  label: country.name,
  flag: country.flag,
}));

const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  return (
    <div>
      <Select
        placeholder="Ülke Seç"
        isClearable
        value={value}
        onChange={(value) => onChange(value)}
        options={options}
        isSearchable
        formatOptionLabel={(val: any) => {
          return (
            <div className="flex items-center gap-2">
              {val.flag} - {val.value}
            </div>
          );
        }}
      />
    </div>
  );
};

export default CountrySelect;
