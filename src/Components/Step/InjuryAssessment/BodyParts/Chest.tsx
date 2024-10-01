import Style from '../InjuryAssessment.module.scss';

export const ChestLeft = ({
  active,
  currentActiveElement,
  value,
}: {
  currentActiveElement?: string;
  active: (part: string) => void;
  value: string;
}) => {
  return (
    <>
      <g clip-path="url(#e775bc95da)">
        <g
          className={currentActiveElement === 'chestL' ? Style.active : ''}
          clip-path="url(#3ea1e1829f)"
        >
          <path
            fill="#ffffff"
            d="M 139.96875 121.671875 L 315.703125 121.671875 L 315.703125 293.382812 L 139.96875 293.382812 Z M 139.96875 121.671875 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'chestL');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#3a0977f9f4)">
        <g clip-path="url(#c3f17c9ff4)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 139.968143, 121.672875)"
            fill="none"
            stroke-linejoin="miter"
            d="M 58.526853 228.936177 L 175.58415 228.936177 L 234.110194 -0.00133308 L 0.000809263 -0.00133308 Z M 58.526853 228.936177 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="220"
          y="165"
          width="55"
          height="50"
          pointerEvents="none"
        >
          <div className={Style.svgInjuryText}>
            <p>{value}</p>
          </div>
        </foreignObject>
      </g>
    </>
  );
};

export const ChestRigjt = ({
  active,
  currentActiveElement,
  value,
}: {
  currentActiveElement?: string;
  active: (part: string) => void;
  value: string;
}) => {
  return (
    <>
      <g clip-path="url(#d50e808053)">
        <g
          className={currentActiveElement === 'chestR' ? Style.active : ''}
          clip-path="url(#b3557ba3ab)"
        >
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 140.231214, 121.675628)"
            fill="#ffffff"
            stroke-linejoin="miter"
            d="M 59.999009 234.130423 L 117.332344 264.130423 L 117.327138 0.000204855 L -0.000993989 0.000204855 Z M 59.999009 234.130423 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
            onClick={(e) => {
              active(e, 'chestR');
            }}
          />
        </g>
        <foreignObject
          x="165"
          y="165"
          width="55"
          height="50"
          pointerEvents="none"
        >
          <div className={Style.svgInjuryText}>
            <p>{value}</p>
          </div>
        </foreignObject>
      </g>
    </>
  );
};
