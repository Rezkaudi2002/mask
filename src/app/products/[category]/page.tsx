interface IPageProps {
  params: {
    category: string;
  };
}

const page = ({ params }: IPageProps) => {
  const category = decodeURIComponent(params.category);
  return <div>{category}</div>;
};

export default page;
