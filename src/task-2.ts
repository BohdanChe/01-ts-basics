interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product:Product { id: number; title: string; description:string} = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
  };
  
  console.log(`Product: ${JSON.stringify(product)}`);
  