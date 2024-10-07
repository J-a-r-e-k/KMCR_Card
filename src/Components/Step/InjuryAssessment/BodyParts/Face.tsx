import Style from '../InjuryAssessment.module.scss';

export const Face = ({
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
      <g clip-path="url(#c45697694c)">
        <g
          className={currentActiveElement === 'face' ? Style.active : ''}
          clip-path="url(#3f7defe887)"
        >
          <path
            fill="#ffffff"
            d="M 183.253906 2.957031 L 273.25 2.957031 L 273.25 92.953125 L 183.253906 92.953125 Z M 183.253906 2.957031 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'face');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#7a6cdac304)">
        <g clip-path="url(#426735efc3)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 183.254772, 2.956624)"
            fill="none"
            stroke-linejoin="miter"
            d="M 59.99364 0.000542859 C 26.858222 0.000542859 -0.00115381 26.859919 -0.00115381 59.990129 C -0.00115381 93.125547 26.858222 119.984923 59.99364 119.984923 C 93.12385 119.984923 119.983226 93.125547 119.983226 59.990129 C 119.983226 26.859919 93.12385 0.000542859 59.99364 0.000542859 Z M 59.99364 0.000542859 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="185"
          y="0"
          width="85"
          height="30"
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

export const Mouth = ({
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
      <g clip-path="url(#fdd5a5b94f)">
        <g
          className={currentActiveElement === 'mouth' ? Style.active : ''}
          clip-path="url(#1f88497d54)"
        >
          <path
            fill="#ffffff"
            d="M 208.503906 66.929688 L 247.316406 66.929688 L 247.316406 82.648438 L 208.503906 82.648438 Z M 208.503906 66.929688 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'mouth');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#9305f4b69b)"
      >
        <g clip-path="url(#7afc1ed4c0)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 208.511432, 66.928383)"
            fill="none"
            stroke-linejoin="miter"
            d="M 37.333717 0.00173967 C 45.266009 0.00173967 51.698301 4.68924 51.698301 10.475698 C 51.698301 16.262157 45.266009 20.954866 37.333717 20.954866 L 14.364966 20.954866 C 6.432674 20.954866 0.000382162 16.262157 0.000382162 10.475698 C 0.000382162 4.68924 6.432674 0.00173967 14.364966 0.00173967 Z M 37.333717 0.00173967 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="270"
          y="55"
          width="50"
          height="30"
          pointerEvents="none"
        >
          <div className={`${Style.svgInjuryText} ${Style.referenceInjury}`}>
            {value ? <p>{value}</p> : ''}
          </div>
        </foreignObject>
        <path
          d="M 235 75 L 270 85 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
    </>
  );
};

export const Nose = ({
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
      <g clip-path="url(#b54ba73077)">
        <g
          className={currentActiveElement === 'nose' ? Style.active : ''}
          clip-path="url(#b7e620bd0b)"
        >
          <path
            fill="#ffffff"
            d="M 214.257812 33.519531 L 242.246094 33.519531 L 242.246094 62.382812 L 214.257812 62.382812 Z M 214.257812 33.519531 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'nose');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#cd6f0095b0)"
      >
        <g clip-path="url(#48dea9573d)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 214.258717, 33.52062)"
            fill="none"
            stroke-linejoin="miter"
            d="M 18.655044 -0.00145211 L 37.311294 38.482922 L -0.00120558 38.482922 Z M 18.655044 -0.00145211 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="130"
          y="45"
          width="50"
          height="30"
          pointerEvents="none"
        >
          <div
            className={`${Style.svgInjuryText} ${Style.referenceInjury} ${Style.referenceInjuryLeft}`}
          >
            {value ? <p>{value}</p> : ''}
          </div>
        </foreignObject>
        <path
          d="M 225 55 L 180 75 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
    </>
  );
};
