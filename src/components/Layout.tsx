import Title from "./Title";

//TypeScript
interface LayoutProps {
  //props I wait to receive:
  //prop: type
  title?: string; //if there's ? after prop, means that's an OPTIONAL prop
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
        flex flex-col w-2/3
        bg-white text-gray-800
        rounded-md
        shadow-md`}
    >
      <Title>{props.title}</Title>
      <div className={`p-5`}>{props.children}</div>
    </div>
  );
}
