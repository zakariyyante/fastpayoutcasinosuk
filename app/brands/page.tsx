import { brands } from "../data/brands";
import BrandCard from "../components/BrandCard";

export default async function BrandsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const gclid = typeof resolvedSearchParams.gclid === "string" ? resolvedSearchParams.gclid : undefined;

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-black text-white mb-12 uppercase italic tracking-tighter text-center">
        All <span className="text-accent">Top Brands</span>
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {brands.map((brand, index) => (
          <BrandCard key={brand.id} brand={brand} gclid={gclid} index={index} />
        ))}
      </div>
    </div>
  );
}
