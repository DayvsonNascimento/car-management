export type Event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export interface DefaulInputProps {
  label: string;
  value: string | number | string[] | undefined;
  errorMessage: string;
  onChange: (event: Event) => void;
  onFocus?: () => void;
}
