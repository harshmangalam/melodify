import {
  type QwikIntrinsicElements,
  component$,
  useSignal,
  type QRL,
  $,
  type QwikMouseEvent,
} from "@builder.io/qwik";
import { CloseIcon, SearchInputIcon } from "~/icons";

type HTMLInputProps = QwikIntrinsicElements["input"];
type CustomProps = {
  searchValue: string;
  onSearchClear$: QRL<() => void>;
};
type SearchInputProps = CustomProps & HTMLInputProps;
export const SearchInput = component$((props: SearchInputProps) => {
  const { searchValue, onSearchClear$, ...inputProps } = props;
  const inputRef = useSignal<HTMLInputElement>();
  const handleClearSearch = $(async (e: QwikMouseEvent) => {
    await e.stopPropagation();
    onSearchClear$();
    inputRef.value?.focus();
  });
  return (
    <div class="relative h-12">
      <div class="absolute left-4 top-1/2 -translate-y-1/2">
        <SearchInputIcon />
      </div>
      <input
        ref={inputRef}
        class="bg-[#242424] text-white h-full w-full   text-sm font-normal rounded-full px-11 focus:outline-white focus:outline-1"
        {...inputProps}
      />
      <div class="absolute right-4 top-1/2 -translate-y-1/2">
        {searchValue.length > 0 && (
          <button type="button" onClick$={handleClearSearch}>
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
});
