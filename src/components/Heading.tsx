'use client';
import { Button } from '@material-tailwind/react';
export function Heading(props: { children: React.ReactNode }) {
  return (
    <>
      <Button>Test</Button>
      <h2 className="text-brand-headerSale mb-2 mt-3 text-lg uppercase text-gray-400">
        {props.children}
      </h2>
    </>
  );
}
