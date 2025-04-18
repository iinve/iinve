import { CardBody, CardFooter } from "@heroui/react"
import { Card } from "rsuite"

export function ProCard({onPress,isPressable,shadow,children, ...rest}){
  return <Card isPressable={isPressable} shadow={shadow} onPress={onPress} {...rest}>{children}</Card>
}
export function ProCardBody({className,children, ...rest}){
  return <CardBody className={className} {...rest}>{children}</CardBody>
}
export function ProCardFooter({className,children}){
  return <CardFooter className={className}>{children}</CardFooter>
}

