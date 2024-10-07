import Style from '../InjuryAssessment.module.scss';

export const BackLeft = ({
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
      <g clip-path="url(#c271ff90dd)">
        <g
          className={currentActiveElement === 'backL' ? Style.active : ''}
          clip-path="url(#7b38ee4782)"
        >
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 140.231214, 121.960474)"
            fill="#ffffff"
            stroke-linejoin="miter"
            d="M 59.999009 234.130836 L 117.332344 234.130836 L 117.327138 0.000618005 L -0.000993989 0.000618005 Z M 59.999009 234.130836 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
            onClick={() => {
              active('backL');
            }}
          />
        </g>
        <foreignObject
          x="165"
          y="152"
          width="50"
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

export const BackRight = ({
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
      <g clip-path="url(#f0f1abc63e)">
        <g
          className={currentActiveElement === 'backR' ? Style.active : ''}
          clip-path="url(#ff8a3b6101)"
        >
          <path
            fill="#ffffff"
            d="M 139.96875 121.957031 L 315.34375 121.957031 L 315.34375 288.238281 L 139.96875 288.238281 Z M 139.96875 121.957031 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('backR');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#bab8bc4a86)">
        <g clip-path="url(#6ece57af0f)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 139.968143, 121.959032)"
            fill="none"
            stroke-linejoin="miter"
            d="M 58.526853 221.700467 L 175.58415 221.700467 L 234.110194 0.0025412 L 0.000809263 0.0025412 Z M 58.526853 221.700467 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="240"
          y="152"
          width="50"
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

export const BackRightLower = ({
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
      <g
        className={currentActiveElement === 'backLowerR' ? Style.active : ''}
        clip-path="url(#77e495c9b3)"
      >
        <path
          fill="#ffffff"
          d="M 172.296875 247.085938 L 281.191406 247.085938 L 281.191406 299.386719 L 172.296875 299.386719 Z M 172.296875 247.085938 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('backLowerR');
          }}
        />
      </g>
      <g clip-path="url(#c12b12bd72)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 172.297272, 247.086749)"
          fill="none"
          stroke-linejoin="miter"
          d="M -0.000529432 -0.00108154 L 145.093227 -0.00108154 L 145.093227 69.733296 L -0.000529432 69.733296 Z M -0.000529432 -0.00108154 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="230"
          y="250"
          width="55"
          height="40"
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

export const BackLeftLower = ({
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
      <g
        className={currentActiveElement === 'backLowerL' ? Style.active : ''}

        // clip-path="url(#77e495c9b3)"
      >
        <path
          fill="#ffffff"
          d="M 172.296875 247.085938 L 225.191406 247.085938 L 225.191406 299.386719 L 172.296875 299.386719 Z M 172.296875 247.085938 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('backLowerL');
          }}
        />
      </g>
      <g clip-path="url(#c12b12bd72)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 172.297272, 247.086749)"
          fill="none"
          stroke-linejoin="miter"
          d="M -0.000529432 -0.00108154 L 70.093227 -0.00108154 L 70.093227 69.733296 L -0.000529432 69.733296 Z M -0.000529432 -0.00108154 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="170"
          y="250"
          width="55"
          height="40"
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
