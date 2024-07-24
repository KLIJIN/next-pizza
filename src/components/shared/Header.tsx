interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return <div className={className}>Header </div>;
};

export default Header;
