interface Props {
  label: string;
  items: string[];
}
const FooterList = ({ label, items }: Props) => {
  return (
    <div>
      <span className="font-semibold">{label}</span>
      <ul>
        {items.map((item) => (
          <li className="list-none my-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
