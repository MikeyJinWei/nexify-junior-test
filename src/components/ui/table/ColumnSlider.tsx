import { Slider } from "../slider";

type Props = {
  defaultValue: number;
};

const ColumnSlider = ({ defaultValue }: Props) => {
  return (
    <Slider
      defaultValue={[defaultValue]}
      max={1000000}
      step={1}
      disabled={true}
      className="SliderThumb"
    />
  );
};
export default ColumnSlider;
