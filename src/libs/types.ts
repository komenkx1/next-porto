type Portofolio = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: Category;
  tags: Tag[];
};

type Category = {
  title: string;
  isFutured?: boolean;
};

type Tag = {
  title: string;
};

type Menu = {
  title: string;
  link: string;
  isActive: boolean;
};

type User = {
  id: number;
  name: string;
  is_active: boolean;
  description: string;
  title: string;
  profileImage: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  // jargon?: Jargon[];
  // portofolio?: Portofolio[];
  // certificate?: Certificate[];
};
