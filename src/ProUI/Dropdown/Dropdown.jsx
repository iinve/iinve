import { DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { Dropdown } from "rsuite";
import { ProUser } from "../Common/Common";


export function ProDropdownTrigger({ children }) {
  return <Dropdown>
    <DropdownTrigger>
    {children}
  </DropdownTrigger>
  </Dropdown>
}

export function ProDropdownMenu() {
  return <Dropdown>
  <DropdownMenu aria-label="Static Actions">
    <DropdownItem key="new"><ProUser name={'Joe Doe'} description={'joe@example.com'} className='ml-4' /></DropdownItem>
    <DropdownItem key="delete" className="text-danger" color="danger">
      Sign Out
    </DropdownItem>
  </DropdownMenu>
  </Dropdown>
}
export function ProDropdown({ children }) {
  return <Dropdown>
    {children}
  </Dropdown>;
}
