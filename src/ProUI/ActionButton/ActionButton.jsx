'use client'

import { Button } from "@heroui/react";

const ActionButton = ({ children, isLoading, ...props }) => {
    return <Button isLoading={isLoading} radius="full" className="transition-all" {...props} style={{transition:".3s ease"}}>{!isLoading && children}</Button>
}
export default ActionButton;