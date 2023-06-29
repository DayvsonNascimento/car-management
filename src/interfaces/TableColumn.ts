export interface TableColumn {
  headerName: string;
  field: string;
  editable?: boolean;
  inputType?: string;
  options?: string[];
  cellRender: (value: any) => string;
}
