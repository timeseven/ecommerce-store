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
