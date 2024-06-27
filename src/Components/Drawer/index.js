import React from "react";
import { Drawer } from "vaul";
import Style from "./Drawer.module.scss";
import { IoMdClose } from "react-icons/io";
import { Button, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react";
import { useDrawer } from "./useDrawer";

const DrawerSheet = ({ button }) => {
  const { handleComments, formData, handleSubmit } = useDrawer();
  return (
    <Drawer.Root shouldScaleBackground={true} className=" h-20">
      <Drawer.Trigger asChild>{button}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          className={`${Style.overlay} fixed inset-0 bg-black/40 `}
        />
        <Drawer.Content
          className={`${Style.content} bg-zinc-100 flex flex-col w-full rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0`}
        >
          <div className={Style.container}>
            <div className={Style.head}>
              <span>
                <IoMdClose />
              </span>
            </div>
            <div className={`${Style.contentBox} px-96`}>
              <h4>Join to guest list</h4>
              <form action="">
                <Input
                  type="text"
                  name="name"
                  label="Name"
                  value={formData?.name}
                  onChange={handleComments}
                  className={` ${Style.input} mb-2`}
                />
                <Input
                  type="text"
                  name="place"
                  label="Place"
                  value={formData.place}
                  onChange={handleComments}
                  className={` ${Style.input} mb-2`}
                />
                <Textarea
                  label="Wishes"
                  name="wishes"
                  value={formData.wishes}
                  onChange={handleComments}
                  placeholder="Enter your wishes"
                  className={` ${Style.input} w-full`}
                />
                <div className={Style.suggestion}>
                  <RadioGroup
                    label="or select wishes"
                    orientation="horizontal"
                    color="secondary"
                  >
                    <Radio value="best wishes!" className={Style.suggest_item}>
                      Best Wishes!
                    </Radio>
                    <Radio
                      value="forever bliss!"
                      className={Style.suggest_item}
                    >
                      Forever Bliss!
                    </Radio>
                    <Radio
                      value="Cheers to Love!"
                      className={Style.suggest_item}
                    >
                      Cheers to Love!
                    </Radio>
                  </RadioGroup>
                </div>
                <Button
                  className={`${Style.button} w-full mt-2`}
                  onClick={handleSubmit}
                >
                  Button
                </Button>
              </form>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerSheet;
