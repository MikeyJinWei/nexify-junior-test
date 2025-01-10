import { Slider } from "../slider";

type Props = {
  defaultValue: number;
  id: string;
};

const ColumnSlider = ({ defaultValue, id }: Props) => {
  return (
    <Slider
      key={id}
      defaultValue={[defaultValue]}
      max={300000}
      step={1}
      disabled={true}
      className="SliderThumb"
    />
  );
};
export default ColumnSlider;
