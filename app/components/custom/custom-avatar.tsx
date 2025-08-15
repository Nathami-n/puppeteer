import type { Icon } from "@solar-icons/react/lib/types";
import type * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

interface CustomAvatarProps {
  imgUrl?: string;
  icon?: Icon;
  avatarClassName?: string;
  imageClassName?: string;
  iconClassName?: string;
}

export const CustomAvatar: React.FC<CustomAvatarProps> = ({
  imgUrl,
  icon,
  avatarClassName,
  imageClassName,
  iconClassName,
}) => {
  const MyIcon = icon;
  return (
    <Avatar className={avatarClassName}>
      {imgUrl ? (
        <AvatarImage src={imgUrl} alt="avatar" className={imageClassName} />
      ) : (
        <AvatarFallback className="bg-primary/20">
          {MyIcon ? (
            <MyIcon className={iconClassName} weight="LineDuotone" />
          ) : (
            "?"
          )}
        </AvatarFallback>
      )}
    </Avatar>
  );
};
