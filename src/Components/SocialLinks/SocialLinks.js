
import { Button } from "@heroui/react";
import Link from "next/link";
import ProIcon from "ProUI/Icons/icons";
// or FaTwitter if older version

const SocialLinks = ({ socialDetails, color }) => {
  console.log(socialDetails)
  const { instagram = '', facebook = '', x = '' } = socialDetails;

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {instagram && (
        <Button
          as={Link}
          href={instagram}
          target="_blank"
          isIconOnly
          style={{ background: color.highlight_color }}
        >
          <ProIcon name={'FaInstagram'} size={20} color={color.theme_color} />
        </Button>
      )}
      {facebook && (
        <Button
          as={Link}
          href={instagram}
          target="_blank"
          isIconOnly
          style={{ background: color.highlight_color }}
        >
          <ProIcon name={'FaFacebookF'} size={20} color={color.theme_color} />
        </Button>
      )}
      {x && (
        <Button
          as={Link}
          href={instagram}
          target="_blank"
          isIconOnly
          style={{ background: color.highlight_color }}
        >
          <ProIcon name={'RiTwitterXFill'} size={20} color={color.theme_color} />
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
