import Style from '../InjuryAssessment.module.scss';

export const ArmFrontLeft = ({
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
      //   clip-path="url(#bc88f4b200)"
      >
        <g
          className={
            currentActiveElement === 'leftFrontArm' ? Style.active : ''
          }
          //   clip-path="url(#cab3eccaeb)"
        >
          <path
            fill="#ffffff"
            d="M 281.125 154.507812 L 315.359375 144.253906 L 341.148438 230.371094 L 306.914062 240.625 Z M 281.125 154.507812 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'leftFrontArm');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#b7b617615b)">
        <g clip-path="url(#cee1262431)">
          <g clip-path="url(#7c0a434242)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 281.126736, 154.511658)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.00224083 -0.00058678 L 47.640648 0.000377392 L 47.63984 119.828462 L 0.0019406 119.828992 Z M -0.00224083 -0.00058678 "
              stroke="#000000"
              stroke-width="8"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </g>
        </g>
        <foreignObject
          x="290"
          y="167"
          width="45"
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

export const ForearmFrontLeft = ({
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
      <g clip-path="url(#5d467140da)">
        <g
          className={currentActiveElement === 'forearmLF' ? Style.active : ''}
          clip-path="url(#5f764673c5)"
        >
          <path
            fill="#ffffff"
            d="M 306.550781 239.410156 L 340.785156 229.160156 L 367.214844 317.417969 L 332.980469 327.667969 Z M 306.550781 239.410156 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'forearmLF');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#3a5688c4cf)">
        <g clip-path="url(#a710516475)">
          <g clip-path="url(#1ab6838e23)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 306.55276, 239.412754)"
              fill="none"
              stroke-linejoin="miter"
              d="M 0.00196146 0.0024089 L 47.63986 0.00187893 L 47.639486 122.733375 L 0.00158666 122.733905 Z M 0.00196146 0.0024089 "
              stroke="#000000"
              stroke-width="8"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </g>
        </g>
        <foreignObject
          x="320"
          y="255"
          width="35"
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

export const HandFrontLeft = ({
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
      <g clip-path="url(#583d14c1e7)">
        <g
          className={currentActiveElement === 'handLF' ? Style.active : ''}
          clip-path="url(#4bab2d3edb)"
        >
          <path
            fill="#ffffff"
            d="M 332.730469 326.832031 L 366.964844 316.578125 L 380.378906 361.378906 L 346.144531 371.628906 Z M 332.730469 326.832031 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'handLF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#e43b4da8ff)"
      >
        <g clip-path="url(#2cf56cde3e)">
          <g clip-path="url(#6271ff1211)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 332.730893, 326.832428)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.000390251 -0.00066971 L 47.642498 0.000294462 L 47.64234 62.437112 L -0.000548654 62.436148 Z M -0.000390251 -0.00066971 "
              stroke="#000000"
              stroke-width="8"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </g>
        </g>
        <foreignObject
          x="334"
          y="335"
          width="50"
          height="35"
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

export const ShoulderFrontLeft = ({
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
      <g clip-path="url(#20f2f65ae5)">
        <g
          className={currentActiveElement === 'shoulderLF' ? Style.active : ''}
          clip-path="url(#1f3759b20e)"
        >
          <path
            fill="#ffffff"
            d="M 285.167969 117.980469 L 326.195312 117.980469 L 326.195312 159.011719 L 285.167969 159.011719 Z M 285.167969 117.980469 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'fashoulderLFce');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#22fc12391b)"
      >
        <g clip-path="url(#fc7ee25f09)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 285.168065, 117.981658)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.35404 -0.00158589 C 12.244664 -0.00158589 -0.000128144 12.243206 -0.000128144 27.352582 C -0.000128144 42.456749 12.244664 54.701541 27.35404 54.701541 C 42.458207 54.701541 54.702999 42.456749 54.702999 27.352582 C 54.702999 12.243206 42.458207 -0.00158589 27.35404 -0.00158589 Z M 27.35404 -0.00158589 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="281"
          y="122"
          width="50"
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

export const ElbowFrontLeft = ({
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
      <g clip-path="url(#437dd90f33)">
        <g
          className={currentActiveElement === 'elbowLF' ? Style.active : ''}
          clip-path="url(#4e5dbe4eaf)"
        >
          <path
            fill="#ffffff"
            d="M 305.683594 213.890625 L 346.710938 213.890625 L 346.710938 254.921875 L 305.683594 254.921875 Z M 305.683594 213.890625 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'elbowLF');
            }}
          />
        </g>
      </g>
      <g
      //  clip-path="url(#9c2295aa5b)"
      >
        <g clip-path="url(#74eecc4750)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 305.682585, 213.891736)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.350305 -0.0014809 C 12.246137 -0.0014809 0.00134529 12.243311 0.00134529 27.352687 C 0.00134529 42.456854 12.246137 54.701646 27.350305 54.701646 C 42.45968 54.701646 54.704473 42.456854 54.704473 27.352687 C 54.704473 12.243311 42.45968 -0.0014809 27.350305 -0.0014809 Z M 27.350305 -0.0014809 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="300"
          y="220"
          width="50"
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

export const WristFrontLeft = ({
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
      <g clip-path="url(#23e7b5d4ef)">
        <g
          className={currentActiveElement === 'wristLF' ? Style.active : ''}
          clip-path="url(#bbfd021e67)"
        >
          <path
            fill="#ffffff"
            d="M 332.730469 303.109375 L 373.757812 303.109375 L 373.757812 344.136719 L 332.730469 344.136719 Z M 332.730469 303.109375 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'wristLF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#19504811c7)"
      >
        <g clip-path="url(#3d2dda54bd)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 332.73019, 303.109226)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.349331 0.00019831 C 12.245164 0.00019831 0.000371629 12.24499 0.000371629 27.349158 C 0.000371629 42.458533 12.245164 54.703326 27.349331 54.703326 C 42.458707 54.703326 54.703499 42.458533 54.703499 27.349158 C 54.703499 12.24499 42.458707 0.00019831 27.349331 0.00019831 Z M 27.349331 0.00019831 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="328"
          y="308"
          width="50"
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
