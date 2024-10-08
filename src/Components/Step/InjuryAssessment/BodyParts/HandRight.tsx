import Style from '../InjuryAssessment.module.scss';

export const ArmFrontRight = ({
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
      //   clip-path="url(#f81d8f8d78)"
      >
        <g
          className={
            currentActiveElement === 'rightFrontArm' ? Style.active : ''
          }
          //   clip-path="url(#cee6ae103d)"
        >
          <path
            fill="#ffffff"
            d="M 138.230469 144.257812 L 172.296875 155.046875 L 145.191406 240.613281 L 111.125 229.820312 Z M 138.230469 144.257812 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'rightFrontArm');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#5ab9abb2a3)">
        <g clip-path="url(#5f8c973f4f)">
          <g clip-path="url(#c3329df140)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 138.228861, 144.260726)"
              fill="none"
              stroke-linejoin="miter"
              d="M 0.00244372 0.0006146 L 47.642912 -0.000740802 L 47.64288 119.658782 L 0.00241118 119.660137 Z M 0.00244372 0.0006146 "
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

export const ForearmFrontRight = ({
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
      <g clip-path="url(#87ffa61dec)">
        <g
          className={currentActiveElement === 'forearmRF' ? Style.active : ''}
          clip-path="url(#fbe01f7a50)"
        >
          <path
            fill="#ffffff"
            d="M 111.332031 229.160156 L 145.398438 239.953125 L 117.621094 327.648438 L 83.554688 316.855469 Z M 111.332031 229.160156 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'forearmRF');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#4382a5d1f5)">
        <g clip-path="url(#a74f500e30)">
          <g clip-path="url(#70d99921ff)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 111.332969, 229.162349)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.000502289 0.00255508 L 47.639966 0.00119968 L 47.640716 122.577933 L -0.00132544 122.574323 Z M -0.000502289 0.00255508 "
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

export const HandFrontRight = ({
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
      <g clip-path="url(#f0eae10290)">
        <g
          className={currentActiveElement === 'handRF' ? Style.active : ''}
          clip-path="url(#e6ca78c450)"
        >
          <path
            fill="#ffffff"
            d="M 83.640625 316.582031 L 117.707031 327.371094 L 103.671875 371.6875 L 69.605469 360.894531 Z M 83.640625 316.582031 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'handRF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#aa1e67aada)"
      >
        <g clip-path="url(#2a01777b34)">
          <g clip-path="url(#90d001aa6b)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 83.641557, 316.581306)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.000892392 0.00129636 L 47.639576 -0.0000590461 L 47.638612 61.982584 L -0.0018564 61.98394 Z M -0.000892392 0.00129636 "
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

export const ShoulderFrontRight = ({
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
      <g clip-path="url(#d5a4c652da)">
        <g
          className={currentActiveElement === 'shoulderRF' ? Style.active : ''}
          clip-path="url(#f0dd43d795)"
        >
          <path
            fill="#ffffff"
            d="M 131.304688 117.980469 L 172.335938 117.980469 L 172.335938 159.011719 L 131.304688 159.011719 Z M 131.304688 117.980469 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'shoulderRF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#3155fe1c50)"
      >
        <g clip-path="url(#bf24b94474)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 131.306407, 117.981658)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.351876 -0.00158589 C 12.247708 -0.00158589 -0.00229216 12.243206 -0.00229216 27.352582 C -0.00229216 42.456749 12.247708 54.701541 27.351876 54.701541 C 42.456043 54.701541 54.700835 42.456749 54.700835 27.352582 C 54.700835 12.243206 42.456043 -0.00158589 27.351876 -0.00158589 Z M 27.351876 -0.00158589 "
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

export const ElbowFrontRight = ({
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
      <g clip-path="url(#750023de58)">
        <g
          className={currentActiveElement === 'elbowRF' ? Style.active : ''}
          clip-path="url(#44c6c83096)"
        >
          <path
            fill="#ffffff"
            d="M 106.519531 213.890625 L 147.546875 213.890625 L 147.546875 254.921875 L 106.519531 254.921875 Z M 106.519531 213.890625 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'elbowRF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#0202d8ce53)"
      >
        <g clip-path="url(#7f4ce60ebf)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 106.518204, 213.891736)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.350729 -0.0014809 C 12.246561 -0.0014809 0.00176903 12.243311 0.00176903 27.352687 C 0.00176903 42.456854 12.246561 54.701646 27.350729 54.701646 C 42.454896 54.701646 54.704896 42.456854 54.704896 27.352687 C 54.704896 12.243311 42.454896 -0.0014809 27.350729 -0.0014809 Z M 27.350729 -0.0014809 "
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

export const WristFrontRight = ({
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
      <g clip-path="url(#ffdda970b3)">
        <g
          className={currentActiveElement === 'wristRF' ? Style.active : ''}
          clip-path="url(#10e5b7016d)"
        >
          <path
            fill="#ffffff"
            d="M 78.582031 302.917969 L 119.609375 302.917969 L 119.609375 343.949219 L 78.582031 343.949219 Z M 78.582031 302.917969 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active( 'wristRF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#135f7ba77d)"
      >
        <g clip-path="url(#ec7a622e10)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 78.58121, 302.918971)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.350055 -0.00133643 C 12.245888 -0.00133643 0.00109544 12.243456 0.00109544 27.352831 C 0.00109544 42.456999 12.245888 54.701791 27.350055 54.701791 C 42.459431 54.701791 54.704223 42.456999 54.704223 27.352831 C 54.704223 12.243456 42.459431 -0.00133643 27.350055 -0.00133643 Z M 27.350055 -0.00133643 "
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
