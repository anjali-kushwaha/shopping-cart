import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';


const CartModal = forwardRef(function Modal(
  { title, actions },
  ref
) {
  const modalRootRef = useRef(document.createElement('div')); // Create a div for the portal mount point
  const dialog = useRef();

  useEffect(() => {
    const modalRoot = modalRootRef.current;
    document.body.appendChild(modalRoot); // Append the portal mount point to the document body

    return () => {
      document.body.removeChild(modalRoot); // Clean up the portal mount point when the component unmounts
    };
  }, []);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart/>
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    modalRootRef.current // Use the created div as the mount point for the portal
  );
});

export default CartModal;
