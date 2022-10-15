function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className='modal'>
      <p>삭제하시겠습니까?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>
        취소하기
      </button>
      <button className='btn' onClick={confirmHandler}>
        삭제하기
      </button>
    </div>
  );
}
export default Modal;
