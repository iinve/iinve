"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { editorData } from "@/atoms/editorDataAtom";
import { userTemplateData } from "@/atoms/templateDataAtom";
import { getTemplateComponent } from "@/utils/getTemplateComponent";

const EditorPreview = ({ showEditorPreview }) => {
  const iframeRef = useRef(null);
  const [iframeReady, setIframeReady] = useState(false);
  const [iframeRoot, setIframeRoot] = useState(null);
  const [editorLiveData] = useRecoilState(editorData);
  const [selectedTemplate] = useRecoilState(userTemplateData);

  // Get the selected template component
  const component = getTemplateComponent(editorLiveData, selectedTemplate?.template_name, false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) return;

      // Inject Tailwind styles from the parent document
      const parentStyles = [...document.styleSheets]
        .map((sheet) => {
          try {
            return [...sheet.cssRules].map((rule) => rule.cssText).join("\n");
          } catch (e) {
            console.warn("Skipping inaccessible stylesheet:", e);
            return "";
          }
        })
        .join("\n");
      iframeDoc.body.classList.add("tailwind");
      const styleTag = iframeDoc.createElement("style");
      styleTag.textContent = parentStyles;
      iframeDoc.head.appendChild(styleTag);

      // Inject the root div for React component
      const rootDiv = iframeDoc.createElement("div");
      rootDiv.id = "root";
      iframeDoc.body.appendChild(rootDiv);

      // Set iframeRoot after styles are injected
      setIframeRoot(rootDiv);
      setIframeReady(true);
    };

    // Attach event listener
    iframe.addEventListener("load", handleLoad);

    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      className={`fixed transition-all ${
        showEditorPreview
          ? "md:top-[100px] top-0 md:right-4 right-1/2 md:translate-x-0 translate-x-1/2 opacity-100 visible"
          : "top-[-100px] opacity-0 md:right-4 right-1/2 translate-x-1/2 invisible"
      } md:border-8 border-4 border-white rounded-3xl overflow-auto z-50 md:w-[390px] w-[95%]`}
      onClick={(e) => e.preventDefault()}
      onMouseEnter={(e) => e.preventDefault()}
    >
      {/* Iframe for Tailwind-supported preview */}
      <iframe
        ref={iframeRef}
        className="md:w-[390px] w-full md:h-[85vh] h-[100dvh] rounded-2xl shadow-lg"
        sandbox="allow-scripts allow-same-origin"
        srcDoc="<html><head></head><body><div id='root'></div></body></html>"
      ></iframe>

      {/* Inject React component inside iframe when ready */}
      {iframeReady && iframeRoot && createPortal(component, iframeRoot)}
    </div>
  );
};

export default EditorPreview;
