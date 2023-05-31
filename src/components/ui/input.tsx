import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { ErrorIcon } from "~/icons";

type HTMLInputProps = QwikIntrinsicElements["input"];
type CustomProps = {
  label?: string;
  error?: string | string[];
};
type InputProps = CustomProps & HTMLInputProps;
export const Input = component$((props: InputProps) => {
  const { id, label, error, ...inputProps } = props;
  return (
    <div class="flex flex-col space-y-2">
      {label && (
        <label for={id} class="text-sm font-bold">
          {label}
        </label>
      )}
      <input
        id={id}
        {...inputProps}
        class="shadow-white rounded bg-base form-input"
      />
      {error && (
        <p class="flex items-center gap-2 text-negative">
          <ErrorIcon />
          <span class="text-sm ">{error}</span>
        </p>
      )}
    </div>
  );
});
