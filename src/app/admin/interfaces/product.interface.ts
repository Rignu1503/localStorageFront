export interface Product{
  content:          ContentProduct[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface ContentProduct {
  id:           number;
  name:         string;
  urlImage:     string;
  description:  string;
  price:        number;
  barcode:      string;
  stockCurrent: number;
  stockMinimun: number;
  category:     Category;
}

export interface Category {
  id:   number;
  name: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
