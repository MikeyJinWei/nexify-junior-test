import { Input } from "../input";

type Props = {
  defaultValue: string;
};

const ColumnInput = ({ defaultValue }: Props) => {
  return <Input type="text" defaultValue={defaultValue} disabled={true} />;
};
export default ColumnInput;
