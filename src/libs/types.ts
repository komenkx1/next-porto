type Portofolio = {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  user: User;
  category: Category;
  portofolioTag: Array<any>;
};

type Category = {
  id: number;
  name: string;
  isFutured?: boolean;
};

type Tag = {
  id: number;
  name: string;
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

type Certificate = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  user_id: number;
  user: User;
};

type portofolioParams = {
  title?: string;
  page: number;
  pageSize: number;
  category?: number;
  tags?: Array<Tag>;
};
