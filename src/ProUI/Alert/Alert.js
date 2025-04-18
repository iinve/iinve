import { Alert } from "@heroui/react";

const ProAlert = ({color, description, endContent, title, variant, ...rest}) => {
  return <Alert
  color={color}
  description={description}
  endContent={endContent}
  title={title}
  variant={variant}
  {...rest}
/>
}

export default ProAlert