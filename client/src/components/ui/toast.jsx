import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ToastProvider({
  ...props
}) {
  return <ToastPrimitives.Provider data-slot="toast-provider" {...props} />;
}

function ToastViewport({
  className,
  ...props
}) {
  return (
    <ToastPrimitives.Viewport
      data-slot="toast-viewport"
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props} />
  );
}

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Toast({
  className,
  variant,
  ...props
}) {
  return (
    <ToastPrimitives.Root
      data-slot="toast"
      className={cn(toastVariants({ variant }), className)}
      {...props} />
  );
}

function ToastAction({
  className,
  ...props
}) {
  return (
    <ToastPrimitives.Action
      data-slot="toast-action"
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props} />
  );
}

function ToastClose({
  className,
  ...props
}) {
  return (
    <ToastPrimitives.Close
      data-slot="toast-close"
      className={cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      toast-close=""
      {...props}>
      <XIcon className="h-4 w-4" />
    </ToastPrimitives.Close>
  );
}

function ToastTitle({
  className,
  ...props
}) {
  return (
    <ToastPrimitives.Title
      data-slot="toast-title"
      className={cn("text-sm font-semibold [&+div]:text-xs", className)}
      {...props} />
  );
}

function ToastDescription({
  className,
  ...props
}) {
  return (
    <ToastPrimitives.Description
      data-slot="toast-description"
      className={cn("text-sm opacity-90", className)}
      {...props} />
  );
}

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  toastVariants,
}