import { Input } from "../input";

type Props = {
  defaultValue: string;
  id: string;
};

const ColumnInput = ({ defaultValue, id }: Props) => {
  return <Input type="text" key={id} defaultValue={defaultValue} />;
};
export default ColumnInput;
