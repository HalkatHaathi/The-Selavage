import { getCategories } from "@/lib/sanity/queries";
import HeaderClient from "@/components/HeaderClient";

export default async function Header() {
  const categories = await getCategories();
  const navLinks = [
    { href: "/", label: "Home" },
    ...categories.map((c) => ({ href: `/${c.slug}`, label: c.name })),
    { href: "/about", label: "About" },
  ];

  return <HeaderClient navLinks={navLinks} />;
}
