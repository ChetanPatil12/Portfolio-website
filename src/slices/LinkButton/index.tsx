import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LinkButton`.
 */
export type LinkButtonProps = SliceComponentProps<Content.LinkButtonSlice>;

/**
 * Component for "LinkButton" Slices.
 */
const LinkButton = ({ slice }: LinkButtonProps): JSX.Element => {
  return (
<span className="inline-block">
  <Button className="mr-6" linkField={slice.primary.link} label={slice.primary.label}/>
</span>
  );
};

export default LinkButton;
