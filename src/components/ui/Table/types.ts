export type ColumnType = {
  key: string;
  header: string;
  width?: number;
  className?: string;
  param?: {
    key: string;
  };
};

export type TableProps = {
  data: Array<any>;
  columns: Array<ColumnType>;
  className?: string;
};
