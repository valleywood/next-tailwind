export function Section(props: { children: React.ReactNode; }) {
  return (
    <div className="grid min-h-[40px] grid-cols-3 grid-rows-[40px] items-center gap-x-16 border-t-[1px] border-solid border-gray-700 py-1.5">
      {props.children}
    </div>
  );
}
