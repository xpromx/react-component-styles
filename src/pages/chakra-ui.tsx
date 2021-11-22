import type { NextPage } from "next";
import { Button, ButtonSize, ButtonVariants } from "../components/Button-CU";
import { ChakraProvider } from "@chakra-ui/react";

const variants: ButtonVariants[] = ["primary", "secondary", "default"];
const sizes: ButtonSize[] = ["sm", "md", "lg"];

const Page: NextPage = () => {
  return (
    <ChakraProvider>
      <div className="p-10">
        <h1 className="text-4xl text-black w-full mb-10">Chakra-UI</h1>
        <div className="flex items-center flex-wrap gap-4">
          {variants.map((variant) => {
            return (
              <div key={variant} className="w-full mb-10">
                <h2 className="text-2xl uppercase mb-4">{variant}</h2>
                {sizes.map((size) => {
                  return (
                    <div key={size}>
                      <h3 className="text-lg uppercase my-4">{size}</h3>
                      <div className="flex items-center flex-wrap gap-4 w-full">
                        <Button variant={variant} size={size}>
                          Click Me!
                        </Button>
                        <Button variant={variant} size={size} disabled>
                          Click Me!
                        </Button>
                        <Button variant={variant} size={size} outline>
                          Click Me!
                        </Button>
                        <Button variant={variant} size={size} outline disabled>
                          Click Me!
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Page;
