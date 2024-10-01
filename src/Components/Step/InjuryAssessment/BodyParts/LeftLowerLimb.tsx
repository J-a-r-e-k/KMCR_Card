import Style from '../InjuryAssessment.module.scss';

export const LeftFrontShin = ({
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
      <g clip-path="url(#bfce5fdb26)">
        <g clip-path="url(#a5e191a53e)">
          <g
            className={currentActiveElement === 'shinLF' ? Style.active : ''}
            clip-path="url(#ee64183833)"
          >
            <path
              fill="#ffffff"
              d="M 197.503906 184.957031 L 257.808594 175.183594 L 315.546875 531.347656 L 255.242188 541.125 Z M 197.503906 184.957031 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={(e) => {
                active(e, 'shinLF');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#0265f13a84)">
        <g clip-path="url(#c2bb83e1cf)">
          <g clip-path="url(#72a2b67871)">
            <g clip-path="url(#46a859642a)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 197.504524, 184.960075)"
                fill="none"
                stroke-linejoin="miter"
                d="M 40.727526 -0.0022666 L 81.451053 183.752405 L 65.895495 481.07391 L 15.55381 481.075261 L -0.0000177049 183.754636 Z M 40.727526 -0.0022666 "
                stroke="#000000"
                stroke-width="8"
                stroke-opacity="1"
                stroke-miterlimit="4"
              />
            </g>
          </g>
        </g>
        <foreignObject
          x="250"
          y="450"
          width="50"
          height="60"
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

export const LeftFrontThigh = ({
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
      <g clip-path="url(#f982b4314a)">
        <g clip-path="url(#b1d8b4b6a4)">
          <g
            className={currentActiveElement === 'thighLF' ? Style.active : ''}
            clip-path="url(#41372f6f1c)"
          >
            <path
              fill="#ffffff"
              d="M 187.136719 164.605469 L 260.550781 152.707031 L 305.695312 431.164062 L 232.28125 443.066406 Z M 187.136719 164.605469 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={(e) => {
                active(e, 'thighLF');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#ab168b20f8)">
        <g clip-path="url(#22fef1893d)">
          <g clip-path="url(#372ca21f6e)">
            <g clip-path="url(#69071e9d12)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 187.139054, 164.611727)"
                fill="none"
                stroke-linejoin="miter"
                d="M 49.578776 -0.00157455 L 99.156193 143.621514 L 80.220025 376.002639 L 18.935419 376.002828 L -0.00136082 143.61831 Z M 49.578776 -0.00157455 "
                stroke="#000000"
                stroke-width="8"
                stroke-opacity="1"
                stroke-miterlimit="4"
              />
            </g>
          </g>
        </g>
        <foreignObject
          x="239"
          y="350"
          width="45"
          height="60"
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
