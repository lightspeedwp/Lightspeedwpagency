/**
 * Dialog Component (Proxy)
 * 
 * Proxies to Modal Block Component (blocks/feedback/Modal).
 * Maps simple Dialog props to Modal compound components.
 */

import { Button } from '../blocks/design/Buttons';
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription, 
  ModalFooter 
} from '../blocks/feedback/Modal';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean; // Handled by ModalContent by default
  closeOnOverlayClick?: boolean; // Radix default
  closeOnEscape?: boolean; // Radix default
  confirmButton?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'destructive' | 'outline' | 'ghost' | 'link';
    loading?: boolean;
  };
  cancelButton?: {
    label: string;
    onClick?: () => void;
  };
  footer?: React.ReactNode;
  preventScroll?: boolean; // Radix default
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  confirmButton,
  cancelButton,
  footer,
}: DialogProps) {
  // Map size to max-width styles if needed, though CSS handles responsive defaults.
  // For simplicity, we'll let CSS handle max-width or add specific classes if Modal supports variants.
  
  return (
    <Modal open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <ModalContent className={`wp-block-modal--size-${size}`}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {description && <ModalDescription>{description}</ModalDescription>}
        </ModalHeader>

        <div className="wp-block-modal__body">
          {children}
        </div>

        {(footer || confirmButton || cancelButton) && (
          <ModalFooter>
            {footer ? (
              footer
            ) : (
              <>
                {cancelButton && (
                  <Button
                    onClick={() => {
                      cancelButton.onClick?.();
                      onClose();
                    }}
                    variant="outline"
                  >
                    {cancelButton.label}
                  </Button>
                )}

                {confirmButton && (
                  <Button
                    onClick={confirmButton.onClick}
                    variant={confirmButton.variant || 'default'}
                    disabled={confirmButton.loading}
                  >
                    {confirmButton.loading ? 'Loading...' : confirmButton.label}
                  </Button>
                )}
              </>
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  loading?: boolean;
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
  loading = false,
}: ConfirmDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={message}
      size="sm"
      confirmButton={{
        label: confirmLabel,
        onClick: onConfirm,
        variant: destructive ? 'destructive' : 'default',
        loading,
      }}
      cancelButton={{
        label: cancelLabel,
        onClick: onClose,
      }}
    />
  );
}

export interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonLabel?: string;
}

export function AlertDialog({
  isOpen,
  onClose,
  title,
  message,
  buttonLabel = 'OK',
}: AlertDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={message}
      size="sm"
      confirmButton={{
        label: buttonLabel,
        onClick: onClose,
      }}
    />
  );
}
