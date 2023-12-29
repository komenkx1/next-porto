type Portofolio = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: Category;
  tags: Tag[];
};

type Category = {
  name: string;
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

type Jargon = {
  id: number;
  user_id: number;
  primary_text: string;
  secondary_text: string;
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
  jargon?: Jargon;
  // portofolio?: Portofolio[];
  // certificate?: Certificate[];
};
