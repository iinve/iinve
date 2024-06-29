"use client";
import React, { useState } from "react";
import { Drawer } from "vaul";
import Style from "./Drawer.module.scss";
import { IoMdClose } from "react-icons/io";
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import { useComment } from "../../utils/CoffeePremiumUtils/useComment";

const DrawerSheet = ({ button }) => {
  const {
    handleComments,
    formData,
    handleSubmit,
    selected,
    handleSuggestion,
    loading,
    isNotValid,
    drawerOpen,
    setDrawerOpen,
    setLoading,
  } = useComment();

  return (
    <Drawer.Root
      shouldScaleBackground={true}
      open={drawerOpen}
      onOpenChange={setDrawerOpen}
    >
      <Drawer.Trigger asChild onClick={() => setLoading(false)}>
        {button}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          className={`${Style.overlay} fixed inset-0 bg-black/40 `}
        />
        <Drawer.Content
          className={`${Style.content} bg-zinc-100 flex flex-col w-full rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0`}
        >
          <div className={Style.container}>
            <div className={Style.head}>
              <Drawer.Close asChild>
                <span>
                  <IoMdClose />
                </span>
              </Drawer.Close>
            </div>
            {!loading ? (
              <div className={`${Style.contentBox} px-96 `}>
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
                      value={selected}
                      onValueChange={handleSuggestion}
                    >
                      <Radio
                        value="best wishes!"
                        className={`${Style.suggest_item} max-w-[300px]`}
                      >
                        Best Wishes!
                      </Radio>
                      <Radio
                        value="forever bliss!"
                        className={`${Style.suggest_item} max-w-[300px]`}
                      >
                        Forever Bliss!
                      </Radio>
                      <Radio
                        value="Cheers to Love!"
                        className={`${Style.suggest_item} max-w-[300px]`}
                      >
                        Cheers to Love!
                      </Radio>
                    </RadioGroup>
                  </div>

                  <Button
                    isDisabled={isNotValid}
                    className={`${Style.button} w-full mt-2`}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <Spinner color="default" labelColor="foreground" />
                    ) : (
                      " Submit"
                    )}
                  </Button>
                </form>
              </div>
            ) : (
              <div className={Style.sucess}>
                <iframe
                  src="https://lottie.host/embed/75c44d92-58e2-40a8-aa31-16187fae73a1/gy5ziWAmq2.json"
                  width={window?.innerWidth > 560 ? 300 : 150}
                  height={window?.innerWidth > 560 ? 300 : 150}
                ></iframe>
                <h5>Thank you!</h5>
                <p>Your wishes added to list.</p>
              </div>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerSheet;
