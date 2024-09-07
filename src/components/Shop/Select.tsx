import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface ReusableSelectProps {
  options: Option[];
  placeholder?: string;
  label?: string;
  width?: string;
  onChange?: (value: string) => void;
}

export function ReusableSelect({
  options,
  placeholder = "Select an option",
  label = "Options",

  onChange,
}: ReusableSelectProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={`w-[200px] text-black dark:text-white`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
