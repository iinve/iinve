import {
  addToast,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import ProIcon from "ProUI/Icons/icons";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

const ThemeSelector = ({
  colors,
  setAllColors,
  selectedTheme,
  selectedHighlightedColor,
  selectedContentColor,
  selectedThemeColor,
  handleChooseThemeColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("##FF0000");

  const handleOpenMoreColorModal = () => {
    setIsOpen(!isOpen);
  };
  const handleAddColor = () => {
    if (!colors?.some((c) => c.hex === color)) {
      colors.push({ hex: color });
      handleOpenMoreColorModal();
    } else {
      addToast({
        title: "Oops!",
        description: `This color is already added!`,
        type: "",
        color: "warning",
        variant: "flat",
      });
    }
  };

  return (
    <>
      <div
        className={`p-8 border border-dashed border-[#333] rounded-2xl mb-6 w-full`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg">Theme Color</h2>
            {!colors?.length && (
              <p className="text-[#333]">
                Please upload logo for selecting theme color.
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {colors
              ?.filter((item) => item.hex !== selectedContentColor?.hex)
              .map((color, idx) => (
                <div
                  key={`color_${idx}`}
                  className={`border-2 ${
                    color?.hex === selectedTheme?.theme_color
                      ? "border-blue-600"
                      : "border-gray-300"
                  } p-1 rounded-2xl`}
                >
                  <span
                    key={color.hex}
                    className={`w-[50px] h-[50px] block rounded-xl`}
                    style={{ backgroundColor: color?.hex }}
                    onClick={() => handleChooseThemeColor(color, "theme")}
                  ></span>
                </div>
              ))}
          </div>
        </div>

        {/* content color selection */}

        <div className="">
          {colors?.length > 0 && (
            <div className="flex items-center justify-between mt-10">
              <div>
                <h2>Text Color</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {colors
                  ?.filter((item) => item.hex !== selectedThemeColor?.hex)
                  .map((color, idx) => (
                    <div
                      key={`color_${idx}`}
                      className={`border-2 ${
                        color?.hex === selectedTheme?.content_color
                          ? "border-blue-600"
                          : "border-gray-300"
                      } p-1 rounded-2xl`}
                    >
                      <span
                        key={color.hex}
                        className={`w-[50px] h-[50px] block rounded-xl`}
                        style={{ backgroundColor: color?.hex }}
                        onClick={() => handleChooseThemeColor(color, "content")}
                      ></span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* highlighted color */}
          {colors?.length > 0 && (
            <div className="flex items-center justify-between mt-10">
              <div>
                <h2>Highlight Color</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {colors
                  ?.filter((item) => item.hex !== selectedThemeColor?.hex)
                  .map((color, idx) => (
                    <div
                      key={`color_${idx}`}
                      className={`border-2 ${
                        color?.hex === selectedTheme?.highlight_color
                          ? "border-blue-600"
                          : "border-gray-300"
                      } p-1 rounded-2xl`}
                    >
                      <span
                        key={color.hex}
                        className={`w-[50px] h-[50px] block rounded-xl`}
                        style={{ backgroundColor: color?.hex }}
                        onClick={() =>
                          handleChooseThemeColor(color, "highlight")
                        }
                      ></span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        {colors && (
          <Button
            variant="flat"
            onPress={handleOpenMoreColorModal}
            className="mt-8 border-gray-300 h-fit w-fit border border-2 border-gray-400 rounded-3xl flex items-center justify-center py-2 px-4 mx-auto"
          >
            <ProIcon name={"GoPlus"} size={20} color="#333" />
            Add color
          </Button>
        )}
      </div>
      <Modal isOpen={isOpen} size="md" onClose={handleOpenMoreColorModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                Add favorite color
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-center">
                  <HexColorPicker color={color} onChange={setColor} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleAddColor}>
                  Add color
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThemeSelector;
