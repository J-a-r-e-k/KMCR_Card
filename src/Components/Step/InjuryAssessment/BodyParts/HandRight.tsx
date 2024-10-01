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
            onClick={(e) => {
              active(e, 'rightFrontArm');
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
            onClick={(e) => {
              active(e, 'forearmRF');
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
            onClick={(e) => {
              active(e, 'handRF');
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
