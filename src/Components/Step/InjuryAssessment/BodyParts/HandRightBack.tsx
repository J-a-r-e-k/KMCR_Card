import Style from '../InjuryAssessment.module.scss';

export const ArmBackRight = ({
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
      <g clip-path="url(#26998d900c)">
        <g
          className={
            currentActiveElement === 'rightBackArm' ? Style.active : ''
          }
          clip-path="url(#6a7e672019)"
        >
          <path
            fill="#ffffff"
            d="M 281.125 154.792969 L 315.359375 144.539062 L 341.148438 230.65625 L 306.914062 240.910156 Z M 281.125 154.792969 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('rightBackArm');
            }}
          />
        </g>
      </g>
      <g
      //   clip-path="url(#56b1f142c0)"
      >
        <g clip-path="url(#9ba8a0c169)">
          <g clip-path="url(#1de166b800)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 281.126736, 154.796497)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.0023621 -0.000181799 L 47.640526 0.000782372 L 47.639718 119.828867 L 0.00181932 119.829397 Z M -0.0023621 -0.000181799 "
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

export const ForearmBackRight = ({
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
      <g clip-path="url(#97c7b4a275)">
        <g
          className={currentActiveElement === 'forearmRB' ? Style.active : ''}
          clip-path="url(#294e39d4d7)"
        >
          <path
            fill="#ffffff"
            d="M 306.550781 239.695312 L 340.785156 229.445312 L 367.214844 317.703125 L 332.980469 327.953125 Z M 306.550781 239.695312 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('forearmRB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#7cc9823bf5)">
        <g clip-path="url(#f3b1a39fc2)">
          <g clip-path="url(#122c394188)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 306.55276, 239.697564)"
              fill="none"
              stroke-linejoin="miter"
              d="M 0.00182917 0.00285067 L 47.639728 0.00232069 L 47.640848 122.728827 L 0.00145437 122.734346 Z M 0.00182917 0.00285067 "
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
export const HandBackRight = ({
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
      <g clip-path="url(#74911651fa)">
        <g
          className={currentActiveElement === 'handRB' ? Style.active : ''}
          clip-path="url(#641023325e)"
        >
          <path
            fill="#ffffff"
            d="M 332.730469 327.117188 L 366.964844 316.863281 L 380.378906 361.660156 L 346.144531 371.914062 Z M 332.730469 327.117188 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('handRB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#a7f231b83e)">
        <g clip-path="url(#3fbb80189d)">
          <g clip-path="url(#855953f784)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 332.730893, 327.117311)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.000495003 -0.000319908 L 47.642393 0.000644263 L 47.642235 62.437462 L -0.000653407 62.436497 Z M -0.000495003 -0.000319908 "
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

export const ShoulderBackRight = ({
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
      <g clip-path="url(#388bef3ef7)">
        <g
          className={currentActiveElement === 'shoulderRB' ? Style.active : ''}
          clip-path="url(#8cd2845ba3)"
        >
          <path
            fill="#ffffff"
            d="M 285.167969 118.265625 L 326.195312 118.265625 L 326.195312 159.296875 L 285.167969 159.296875 Z M 285.167969 118.265625 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('shoulderRB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#91dd502a57)">
        <g clip-path="url(#8dd8c0ac68)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 285.168065, 118.266519)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.35404 -0.00119194 C 12.244664 -0.00119194 -0.000128144 12.2436 -0.000128144 27.352976 C -0.000128144 42.457143 12.244664 54.701935 27.35404 54.701935 C 42.458207 54.701935 54.702999 42.457143 54.702999 27.352976 C 54.702999 12.2436 42.458207 -0.00119194 27.35404 -0.00119194 Z M 27.35404 -0.00119194 "
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

export const ElbowBackRight = ({
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
      <g clip-path="url(#27117a3d4a)">
        <g
          className={currentActiveElement === 'elbowRB' ? Style.active : ''}
          clip-path="url(#aa061cfd76)"
        >
          <path
            fill="#ffffff"
            d="M 305.683594 214.175781 L 346.710938 214.175781 L 346.710938 255.207031 L 305.683594 255.207031 Z M 305.683594 214.175781 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('elbowRB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#7d86241536)">
        <g clip-path="url(#e9979fe9b1)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 305.682585, 214.176572)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.350305 -0.00105495 C 12.246137 -0.00105495 0.00134529 12.243737 0.00134529 27.353113 C 0.00134529 42.45728 12.246137 54.702072 27.350305 54.702072 C 42.45968 54.702072 54.704473 42.45728 54.704473 27.353113 C 54.704473 12.243737 42.45968 -0.00105495 27.350305 -0.00105495 Z M 27.350305 -0.00105495 "
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

export const WristBackRight = ({
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
      <g clip-path="url(#f5c6c7023f)">
        <g
          className={currentActiveElement === 'wristRB' ? Style.active : ''}
          clip-path="url(#888443916d)"
        >
          <path
            fill="#ffffff"
            d="M 332.730469 303.394531 L 373.757812 303.394531 L 373.757812 344.421875 L 332.730469 344.421875 Z M 332.730469 303.394531 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('wristRB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#d7817d85ce)">
        <g clip-path="url(#2941552574)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 332.73019, 303.394051)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.349331 0.00064026 C 12.245164 0.00064026 0.000371629 12.245432 0.000371629 27.3496 C 0.000371629 42.458975 12.245164 54.703768 27.349331 54.703768 C 42.458707 54.703768 54.703499 42.458975 54.703499 27.3496 C 54.703499 12.245432 42.458707 0.00064026 27.349331 0.00064026 Z M 27.349331 0.00064026 "
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
