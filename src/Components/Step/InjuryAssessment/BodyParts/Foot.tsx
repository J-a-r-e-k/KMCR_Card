import Style from '../InjuryAssessment.module.scss';

export const FootRF = ({
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
        className={currentActiveElement === 'footRF' ? Style.active : ''}
        clip-path="url(#ae06512fbe)"
      >
        <path
          fill="#ffffff"
          d="M 93.664062 527.953125 L 188.03125 527.953125 L 188.03125 561.09375 L 93.664062 561.09375 Z M 93.664062 527.953125 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('footRF');
          }}
        />
      </g>
      <g clip-path="url(#e1948c4e75)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 93.678198, 527.954301)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00198623 -0.00156863 L 125.72595 -0.00156863 L 125.72595 44.170308 L 0.00198623 44.170308 Z M 0.00198623 -0.00156863 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="98"
          y="532"
          width="55"
          height="25"
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

export const FootLF = ({
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
        className={currentActiveElement === 'footLF' ? Style.active : ''}
        clip-path="url(#cb28160f05)"
      >
        <path
          fill="#ffffff"
          d="M 267.285156 527.953125 L 363.855469 527.953125 L 363.855469 561.09375 L 267.285156 561.09375 Z M 267.285156 527.953125 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('footLF');
          }}
        />
      </g>
      <g clip-path="url(#5a083b5c86)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 267.29864, 527.954301)"
          fill="none"
          stroke-linejoin="miter"
          d="M -0.00235336 -0.00156863 L 128.653902 -0.00156863 L 128.653902 44.170308 L -0.00235336 44.170308 Z M -0.00235336 -0.00156863 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="305"
          y="532"
          width="55"
          height="25"
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

export const FootRB = ({
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
        className={currentActiveElement === 'footRB' ? Style.active : ''}
        clip-path="url(#06cf20b9d4)"
      >
        <path
          fill="#ffffff"
          d="M 267.285156 528.238281 L 363.855469 528.238281 L 363.855469 561.378906 L 267.285156 561.378906 Z M 267.285156 528.238281 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('footRB');
          }}
        />
      </g>
      <g clip-path="url(#4c29621883)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 267.29864, 528.239181)"
          fill="none"
          stroke-linejoin="miter"
          d="M -0.00235336 -0.00120028 L 128.653902 -0.00120028 L 128.653902 44.170677 L -0.00235336 44.170677 Z M -0.00235336 -0.00120028 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="305"
          y="532"
          width="55"
          height="25"
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

export const FootLB = ({
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
        className={currentActiveElement === 'footLB' ? Style.active : ''}
        clip-path="url(#f7a0fc9af1)"
      >
        <path
          fill="#ffffff"
          d="M 93.664062 528.238281 L 188.03125 528.238281 L 188.03125 561.378906 L 93.664062 561.378906 Z M 93.664062 528.238281 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('footLB');
          }}
        />
      </g>
      <g clip-path="url(#5866057bd1)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 93.678198, 528.239181)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00198623 -0.00120028 L 125.72595 -0.00120028 L 125.72595 44.170677 L 0.00198623 44.170677 Z M 0.00198623 -0.00120028 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="98"
          y="532"
          width="55"
          height="25"
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
