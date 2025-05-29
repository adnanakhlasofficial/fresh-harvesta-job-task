const CategoryButton = ({ title }: { title: string }) => {
  return (
    <button className="py-3 px-6 bg-[#749B3F] text-white rounded-lg capitalize">
      {title}
    </button>
  );
};

export default CategoryButton;
