import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as CiIcons from "react-icons/ci";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RiIcons from "react-icons/ri";
import * as RxIcons from "react-icons/rx";
import * as TbIcons from "react-icons/tb";




const iconLibraries = {
  Fa: FaIcons,
  Ai: AiIcons,
  Md: MdIcons,
  Ri: RiIcons,
  Bs: BsIcons,
  Ci: CiIcons,
  Fi: FiIcons,
  Rx: RxIcons,
  Io: IoIcons,
  Go: GoIcons,
  Bi: BiIcons,
  Lu: LuIcons,
  Tb: TbIcons,
  Pi: PiIcons
};

const ProIcon = ({ name, color = "black", size = 48 }) => {
  const prefix = name.slice(0, 2);
  const icons = iconLibraries[prefix];

  if (!icons) {
    console.warn(`Icon prefix "${prefix}" is not supported`);
    return null;
  }

  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in react-icons`);
    return null;
  }

  return <IconComponent color={color} size={size} />;
};

export default ProIcon;
