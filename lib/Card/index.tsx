import { CardProps } from "./helpers";

function Card({ children, $backgroundColor }: CardProps) {
  return <div>{children}</div>;
}

export default Card;
