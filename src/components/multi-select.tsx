"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown, X } from "lucide-react";

// Menggunakan Generics untuk membuat komponen lebih fleksibel
interface Option<T> {
  value: T;
  label: string;
}

interface MultiSelectProps<T> {
  options: Option<T>[];
  selectedValues: T[];
  setSelectedValues: (values: T[]) => void;
  placeholder?: string;
}

// Gunakan React.FC dengan generic agar TypeScript mengenali tipenya
const MultiSelect = <T extends string | number>({
  options,
  selectedValues,
  setSelectedValues,
  placeholder,
}: MultiSelectProps<T>) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const toggleSelection = (value: T) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const removeSelected = (value: T) => {
    setSelectedValues(selectedValues.filter((item) => item !== value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="flex justify-between px-2 pb-2 items-center h-full min-w-[200px]"
          variant="outline"
        >
          <div className="flex gap-1 flex-wrap">
            {selectedValues.length > 0 ? (
              selectedValues.map((val) => (
                <Badge
                  key={String(val)} // Menggunakan String(val) agar key selalu string
                  variant={"outline"}
                  className="flex items-center gap-1 px-2 py-1 rounded-md"
                >
                  {options.find((opt) => opt.value === val)?.label}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSelected(val);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.stopPropagation();
                        removeSelected(val);
                      }
                    }}
                    className="ml-1 text-foreground cursor-pointer"
                  >
                    <X className="h-2 w-2" />
                  </div>
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">
                {placeholder || "Select options..."}
              </span>
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput
            placeholder="Search..."
            value={inputValue}
            onValueChange={setInputValue}
          />
          <CommandList>
            {filteredOptions.length === 0 ? (
              <CommandEmpty>No options found.</CommandEmpty>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <CommandItem
                    key={String(option.value)} // Menggunakan String(option.value)
                    onSelect={() => toggleSelection(option.value)}
                  >
                    <div className="flex items-center">
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          isSelected ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {option.label}
                    </div>
                  </CommandItem>
                );
              })
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
