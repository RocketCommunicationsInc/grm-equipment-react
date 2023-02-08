import { setClassName } from '../../../util/util';
import './PanelSubContainer.scss';

export const PanelSubContainer = (props) => {
  const { children, className, heading } = props;

  return (
    <div className={setClassName('Panel-sub-container', className)}>
      {heading && <h3>{heading}</h3>}
      <div className='Panel-sub-container__body'>{children}</div>
    </div>
  );
};
