export type ColumnType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
  className?: string;
  param?: {
    key: K;
  };
};

export type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnType<T, K>>;
  className?: string;
};
