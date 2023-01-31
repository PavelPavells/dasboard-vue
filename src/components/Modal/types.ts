export type ModalProps = {
  className: string;
  isOpen?: boolean;
  onClose?(): void;
  hideCloseButton?: boolean;
  hideMobileCloseButton?: boolean;
  overlay?: boolean;
  slide?: boolean;
  fade?: boolean;
};
