import Style from '../InjuryAssessment.module.scss';

export const ArmBackLeft = ({
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
      <g clip-path="url(#10d306f873)">
        <g
          className={currentActiveElement === 'leftBackArm' ? Style.active : ''}
          clip-path="url(#5728b62d3f)"
        >
          <path
            fill="#ffffff"
            d="M 138.230469 144.542969 L 172.296875 155.332031 L 145.191406 240.898438 L 111.125 230.105469 Z M 138.230469 144.542969 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('leftBackArm');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#17078d49f0)">
        <g clip-path="url(#cb0d255898)">
          <g clip-path="url(#1b7750cacf)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 138.228861, 144.545551)"
              fill="none"
              stroke-linejoin="miter"
              d="M 0.00257718 0.00103592 L 47.643046 -0.000319485 L 47.643013 119.659203 L 0.00254464 119.660558 Z M 0.00257718 0.00103592 "
              stroke="#000000"
              stroke-width="8"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </g>
        </g>
        <foreignObject
          x="115"
          y="165"
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

export const ForearmBackLeft = ({
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
      <g clip-path="url(#30139dddae)">
        <g
          className={currentActiveElement === 'forearmLB' ? Style.active : ''}
          clip-path="url(#e4c97590b1)"
        >
          <path
            fill="#ffffff"
            d="M 111.332031 229.445312 L 145.398438 240.238281 L 117.621094 327.933594 L 83.554688 317.140625 Z M 111.332031 229.445312 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('forearmLB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#2bb1686d77)">
        <g clip-path="url(#c852116fa6)">
          <g clip-path="url(#2e995efffc)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 111.332969, 229.447232)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.00196486 -0.00206199 L 47.640077 0.00154778 L 47.639253 122.573316 L -0.00121517 122.574671 Z M -0.00196486 -0.00206199 "
              stroke="#000000"
              stroke-width="8"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </g>
        </g>
        <foreignObject
          x="95"
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
export const HandBackLeft = ({
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
      <g clip-path="url(#b223723ab8)">
        <g
          className={currentActiveElement === 'handLB' ? Style.active : ''}
          clip-path="url(#b91d05acdf)"
        >
          <path
            fill="#ffffff"
            d="M 83.640625 316.867188 L 117.707031 327.65625 L 103.671875 371.972656 L 69.605469 361.179688 Z M 83.640625 316.867188 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('handLB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#51592d6cc6)">
        <g clip-path="url(#719d5953df)">
          <g clip-path="url(#9447ad0d17)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 83.641557, 316.866129)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.000757963 0.00172072 L 47.639711 0.000365321 L 47.638747 61.983009 L -0.00172197 61.984364 Z M -0.000757963 0.00172072 "
              stroke="#000000"
              stroke-width="8"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </g>
        </g>
        <foreignObject
          x="65"
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

export const ShoulderBackLeft = ({
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
      <g clip-path="url(#71595b8b9a)">
        <g
          className={currentActiveElement === 'shoulderLB' ? Style.active : ''}
          clip-path="url(#27559423f0)"
        >
          <path
            fill="#ffffff"
            d="M 131.304688 118.265625 L 172.335938 118.265625 L 172.335938 159.296875 L 131.304688 159.296875 Z M 131.304688 118.265625 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('shoulderLB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#8497cd58ef)">
        <g clip-path="url(#faf38f62a3)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 131.306407, 118.266519)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.351876 -0.00119194 C 12.247708 -0.00119194 -0.00229216 12.2436 -0.00229216 27.352976 C -0.00229216 42.457143 12.247708 54.701935 27.351876 54.701935 C 42.456043 54.701935 54.700835 42.457143 54.700835 27.352976 C 54.700835 12.2436 42.456043 -0.00119194 27.351876 -0.00119194 Z M 27.351876 -0.00119194 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="125"
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

export const ElbowBackLeft = ({
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
      <g clip-path="url(#7339cfd3ad)">
        <g
          className={currentActiveElement === 'elbowLB' ? Style.active : ''}
          clip-path="url(#0ecdaee281)"
        >
          <path
            fill="#ffffff"
            d="M 106.519531 214.175781 L 147.546875 214.175781 L 147.546875 255.207031 L 106.519531 255.207031 Z M 106.519531 214.175781 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('elbowLB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#3b1c227f82)">
        <g clip-path="url(#8016b6702e)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 106.518204, 214.176572)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.350729 -0.00105495 C 12.246561 -0.00105495 0.00176903 12.243737 0.00176903 27.353113 C 0.00176903 42.45728 12.246561 54.702072 27.350729 54.702072 C 42.454896 54.702072 54.704896 42.45728 54.704896 27.353113 C 54.704896 12.243737 42.454896 -0.00105495 27.350729 -0.00105495 Z M 27.350729 -0.00105495 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="102"
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

export const WristBackLeft = ({
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
      <g clip-path="url(#be197c3a24)">
        <g
          className={currentActiveElement === 'wristLB' ? Style.active : ''}
          clip-path="url(#c33a62af27)"
        >
          <path
            fill="#ffffff"
            d="M 78.582031 303.203125 L 119.609375 303.203125 L 119.609375 344.234375 L 78.582031 344.234375 Z M 78.582031 303.203125 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('wristLB');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#d9af3d6dbe)">
        <g clip-path="url(#6297ff8117)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 78.58121, 303.203796)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.350055 -0.000894484 C 12.245888 -0.000894484 0.00109544 12.243898 0.00109544 27.353273 C 0.00109544 42.457441 12.245888 54.702233 27.350055 54.702233 C 42.459431 54.702233 54.704223 42.457441 54.704223 27.353273 C 54.704223 12.243898 42.459431 -0.000894484 27.350055 -0.000894484 Z M 27.350055 -0.000894484 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="73"
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
