import Style from './Interview.module.scss';

const Interview = () => {
  return (
    <>
      <h2 className={Style.title}>I - WYWIAD</h2>
      <div className={Style.wrapText}>
        <textarea className={Style.text} />
      </div>
    </>
  );
};

export default Interview;
