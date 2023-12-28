
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
  
  