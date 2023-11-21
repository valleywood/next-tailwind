export function Label(props: { children: React.ReactNode; }) {
  return (
    <h3 className="col-span-2 font-medium leading-none text-gray-300">
      {props.children}
    </h3>
  );
}
