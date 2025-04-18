'use client'
import { Avatar, Chip, Link, Skeleton, Snippet, Switch, Tooltip, User } from "@heroui/react";
import ColorPicker from "react-best-gradient-color-picker";
import ProIcon from "../Icons/icons";
import Style from './Common.module.scss';

export function Section({ onClose, children, className }) {
  return <section className={`${className} ${Style.section}`}>
    {onClose && <span className={Style.close} onClick={onClose}><ProIcon name={"IoMdClose"} size={12} color="red" /></span>}
    {children}</section>
}

export function ProSnippet({ symbol, text, ...rest }) {
  return <Snippet symbol={symbol} variant="bordered" {...rest}>{text}</Snippet>
}

export function ProLink({ color, to, children }) {
  return <Link isBlock showAnchorIcon color={color} href={to}>{children}</Link>
}

export function ProAvatar({ name, url, color, isBordered, ...rest }) {
  return <Avatar name={name} color={color} src={url} isBordered={isBordered} {...rest} />;
}

export function ProToolTip({ content, children, showArrow, placement }) {
return <Tooltip content={content} showArrow={showArrow} placement={placement}><div>{children}</div></Tooltip>
}

export function ProUser({url, name, description, ...rest}){
  return <User
  avatarProps={{
    src: url,
  }}
  description={description}
  name={name}
  {...rest}
/>
}

export function ProChip(props){
  const {children, ...rest} = props
  return <Chip {...rest}>{children}</Chip>
}

export function ProColorPicker(props){
  const { color, setColor, ...rest } = props;
  return <ColorPicker value={color} onChange={setColor} {...rest} />
}


export function ProSkeleton(props){
  const {height} = props;
  return <Skeleton className="rounded-lg">
  <div className={`h-[${height}px] w-full rounded-lg bg-default-300`} />
</Skeleton>
}

export function ProSwitch(props){
  const {defaultSelected,children, ...rest} = props;
  return <Switch defaultSelected={defaultSelected} {...rest}>{children}</Switch>;
}
