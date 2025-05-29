const CategoryButton = ({ title }: { title: string }) => {
  return (
    <button className="py-3 px-6 border hover:bg-[#749B3F] transition-colors duration-300 hover:text-white cursor-pointer border-[#A6A6A6] text-[#A6A6A6] rounded-lg capitalize">
      {title}
    </button>
  );
};

export default CategoryButton;
