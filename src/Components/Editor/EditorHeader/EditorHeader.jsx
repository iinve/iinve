"use client";
import { Logo } from "@/components/Logo/Logo";
import ActionButton from "@/ProUI/ActionButton/ActionButton";
import { ProUser } from "@/ProUI/Common/Common";
import { SHEETS, useToggleVisibility } from "@/utils/sheetUtils";
import useWindowDimensions from "@/utils/useWindowDimensions";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
// import { useRouter } from "next/navigation";
import ProIcon from "@/ProUI/Icons/icons";
import { signOut, useSession } from "next-auth/react";
import { useEditor } from "../useEditor";

const EditorHeader = () => {
  // const router = useRouter()
  const { isProcessing } = useEditor();
  const { toggleSheetVisibility } = useToggleVisibility();
  const { data: userSession } = useSession()

  const { width } = useWindowDimensions();
  const handleChangeTemplate = () => {
    toggleSheetVisibility(SHEETS.CHANGE_TEMPLATE, true);
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
    localStorage.removeItem('custom_username');
  }
  return <div className='flex md:justify-between justify-center bg-[#111] fixed top-0 w-full right-0 md:px-20 px-6 py-6 z-50 shadow-md border-b border-[#333]'>
    {width > 768 && <Logo width={120} height={120} />}
    <div className='flex items-center'>
      <ActionButton className='mr-4' onClick={handleChangeTemplate} disabled={isProcessing}>Select new Viiew</ActionButton>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button variant="light">
            <ProUser
              url={userSession?.user.profile_image}
              name={userSession?.user.username}
              description={userSession?.user.email}
              className="ml-4"
            />
            <ProIcon name={'FaAngleDown'} size={18} color="#fff" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User actions"
          className="max-w-[300px]"
          selectionMode="single"
        >
          <DropdownItem key="signout" className="text-danger" color="danger" onPress={handleSignOut}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>

}

export default EditorHeader