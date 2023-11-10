import { MouseEventHandler } from "react";

export interface MainNavProps {
  data: Category[];
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface BillboardProps {
  data: Billboard;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface ProductListProps {
  title: string;
  items: Product[];
}

export interface ProductCardProps {
  data: Product;
}

export interface ProductPageProps {
  params: {
    productId: string;
  };
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export interface CurrencyProps {
  value?: string | number;
}

export interface GalleryProps {
  images: Image[];
}

export interface GalleryTabProps {
  image: Image;
}

export interface InfoProps {
  data: Product;
}

export interface FilterProps {
  data: (Color | Size)[];
  name: string;
  valueKey: string;
}

export interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

export interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}
