import { useState } from 'react';

export function useModal() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const handleOpenModal = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setVisibleModal(true);
  };

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  return {
    visibleModal,
    handleOpenModal,
    handleCloseModal,
  };
}
