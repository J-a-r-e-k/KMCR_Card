import Style from '../InjuryAssessment.module.scss';

export const Buttocks = ({
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
      <g clip-path="url(#f9bb4a4620)">
        <g
          className={currentActiveElement === 'buttocks' ? Style.active : ''}
          clip-path="url(#36c1f413dc)"
        >
          <path
            fill="#ffffff"
            d="M 193.097656 327.886719 L 261.796875 327.886719 L 261.796875 360.578125 L 193.097656 360.578125 Z M 193.097656 327.886719 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('buttocks');
            }}
          />
        </g>
      </g>
      <g
      //    clip-path="url(#135a717519)"
      >
        <g clip-path="url(#a5b20dc211)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 193.098654, 327.887819)"
            fill="none"
            stroke-linejoin="miter"
            d="M 45.779924 43.576663 L 91.555971 -0.00146675 L -0.00133085 -0.00146675 Z M 45.779924 43.576663 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="293"
          y="320"
          width="30"
          height="60"
          pointerEvents="none"
        >
          <div className={`${Style.svgInjuryText} `}>
            {value ? (
              <p className={Style.referenceInjuryBorder}>{value}</p>
            ) : (
              ''
            )}
          </div>
        </foreignObject>
        <path
          d="M 230 340 L 293 345 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
    </>
  );
};
