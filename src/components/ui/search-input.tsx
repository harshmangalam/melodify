import {
  type QwikIntrinsicElements,
  component$,
  useSignal,
} from "@builder.io/qwik";
import { CloseIcon, SearchInputIcon } from "~/icons";

type HTMLInputProps = QwikIntrinsicElements["input"];
type CustomProps = {};
type SearchInputProps = CustomProps & HTMLInputProps;
export const SearchInput = component$((props: SearchInputProps) => {
  const { ...inputProps } = props;
  const input = useSignal("");
  const inputRef = useSignal<HTMLInputElement>();
  return (
    <div class="relative h-12">
      <div class="absolute left-4 top-1/2 -translate-y-1/2">
        <SearchInputIcon />
      </div>
      <input
        ref={inputRef}
        class="bg-[#242424] text-white h-full w-full   text-sm font-normal rounded-full px-11 focus:outline-white focus:outline-1"
        {...inputProps}
        bind:value={input}
      />
      <div class="absolute right-4 top-1/2 -translate-y-1/2">
        {input.value.length > 0 && (
          <button
            type="button"
            onClick$={async (e) => {
              await e.stopPropagation();
              input.value = "";
              inputRef.value?.focus();
            }}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
});
