import ProductSection from "@/components/ProductSection";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductSection />
      </Suspense>
    </div>
  );
};

export default page;
