import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section className="flex justify-between items-center py-4 container mx-auto">
        <div>
          <h1 className="text-xl font-semibold">
            <Link href="/">Fresh Harvest</Link>
          </h1>
        </div>
        <div>
          <ul className="flex gap-8 text-[#212337] font-medium">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-8 text-[#212337] font-medium">
            <li>
              <Link href="#">Favourites</Link>
            </li>
            <li>
              <Link href="#">Cart</Link>
            </li>
            <li>
              <Link href="#">Sign in</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
