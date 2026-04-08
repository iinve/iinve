"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placementConfig = {
  bottom: {
    wrapper: "items-end justify-center",
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
    panelClass: "w-full rounded-t-2xl max-h-[90vh]",
  },
  top: {
    wrapper: "items-start justify-center",
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    panelClass: "w-full rounded-b-2xl max-h-[90vh]",
  },
  right: {
    wrapper: "items-stretch justify-end",
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    panelClass: "h-full w-[min(420px,100vw)] rounded-l-2xl",
  },
  left: {
    wrapper: "items-stretch justify-start",
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    panelClass: "h-full w-[min(420px,100vw)] rounded-r-2xl",
  },
};

const ProDrawer = ({
  isOpen,
  size = "md",
  onClose,
  children,
  title,
  description,
  footer,
  placement = "bottom",
  className = "",
  isDismissable = true,
  showHandle = true,
  showCloseTrigger = true,
}) => {
  const config = placementConfig[placement];
  const panelRef = useRef(null);

  const sizeClass =
    size === "full"
      ? placement === "bottom" || placement === "top"
        ? "h-screen max-h-screen rounded-none"
        : "h-screen w-screen max-w-none rounded-none"
      : "";

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen && isDismissable) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, isDismissable, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex"
          style={{ pointerEvents: "auto" }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={isDismissable ? onClose : undefined}
          />

          {/* Panel */}
          <div className={`relative w-full h-full flex ${config.wrapper}`}>
            <motion.div
              ref={panelRef}
              className={`
                relative flex flex-col
                bg-[#0f0f0f] border-t border-white/10
                overflow-hidden
                ${config.panelClass}
                 ${sizeClass}
                ${className}
              `}
              initial={config.initial}
              animate={config.animate}
              exit={config.exit}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle */}
              {showHandle && placement === "bottom" && (
                <div className="flex justify-center pt-3 pb-1 shrink-0">
                  <div className="w-10 h-1 rounded-full bg-white/20" />
                </div>
              )}

              {/* Close trigger */}
              {showCloseTrigger && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 1l12 12M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}

              {/* Header */}
              {(title || description) && (
                <div className="px-6 pt-4 pb-2 shrink-0">
                  {title && (
                    <h2 className="text-white text-xl font-semibold text-center">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="text-zinc-400 text-sm text-center mt-1">
                      {description}
                    </p>
                  )}
                </div>
              )}

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

              {/* Footer */}
              {footer && (
                <div className="px-6 py-4 border-t border-white/10 flex items-center justify-end gap-3 shrink-0">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProDrawer;
