import { AvatarProps } from "./helpers";
import { AvatarContainer } from "./styles";

function Avatar({
  label = "John Doe",
  $imageUrl,
  $backgroundColor,
  $textColor,
  $borderColor,
}: AvatarProps) {
  return (
    <AvatarContainer
      title={label ? label : "Avatar"}
      $imageUrl={$imageUrl}
      $backgroundColor={$backgroundColor}
      $textColor={$textColor}
      $borderColor={$borderColor}
    >
      {!$imageUrl && label.toUpperCase().slice(0, 2)}
    </AvatarContainer>
  );
}

export default Avatar;
