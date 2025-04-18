import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@heroui/react';


export const SheetHeader = ({children}) => {
  return <DrawerHeader className="flex flex-col gap-1 pt-10">{children}</DrawerHeader>
}
export const SheetBody = ({children}) => {
  return <DrawerBody>{children}</DrawerBody>
}
export const SheetFooter = ({children}) => {
  return <DrawerFooter>{children}</DrawerFooter>
}
export const Sheet = (props) => {
  const { isOpen, onClose,children, placement, onOpenChange, hideCloseButton, size, ...rest } = props;
  return (
    <Drawer isOpen={isOpen} placement={placement} onOpenChange={onOpenChange} className='!bg-[#141414]' hideCloseButton={hideCloseButton} size={size} onClose={onClose} isDismissable {...rest}>
        <DrawerContent>
          {() => children}
        </DrawerContent>
      </Drawer>
  )
}
