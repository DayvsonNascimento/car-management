export interface TableColumn {
  headerName: string;
  field: string;
  editable?: boolean;
  inputType?: string;
  options?: string[];
  parser?: (value: string) => number | undefined;
  cellRender: (value: any) => string;
}
