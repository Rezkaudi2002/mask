interface IPageProps {
  params: Promise<{
    category: string;
  }>;
}

const page = async ({ params }: IPageProps) => {
  const {category } = await params

  const categoryDecoded = decodeURIComponent(category);
  return <div>{categoryDecoded}</div>;
};

export default page;
