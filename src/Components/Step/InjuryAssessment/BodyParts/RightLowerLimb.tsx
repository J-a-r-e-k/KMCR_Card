import Style from '../InjuryAssessment.module.scss';

export const RightFrontShin = ({
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
      // clip-path="url(#b4bea59032)"
      >
        <g
        // clip-path="url(#d5d1d63a9e)"
        >
          <g
            className={currentActiveElement === 'shinRF' ? Style.active : ''}
            clip-path="url(#8b1ad3e719)"
          >
            <path
              fill="#ffffff"
              d="M 196.179688 175.183594 L 256.523438 184.699219 L 200.3125 541.109375 L 139.96875 531.59375 Z M 196.179688 175.183594 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={() => {
                active('shinRF');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#98621a9918)">
        <g clip-path="url(#d07b016ffd)">
          <g clip-path="url(#8034a05ec1)">
            <g clip-path="url(#cb93c3502c)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 196.180129, 175.184134)"
                fill="none"
                stroke-linejoin="miter"
                d="M 40.72558 -0.00183724 L 81.454814 183.750668 L 65.898305 481.070412 L 15.555149 481.075143 L 0.00226447 183.753103 Z M 40.72558 -0.00183724 "
                stroke="#000000"
                stroke-width="8"
                stroke-opacity="1"
                stroke-miterlimit="4"
              />
            </g>
          </g>
        </g>
        <foreignObject
          x="155"
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
export const RightFrontThigh = ({
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
      <g clip-path="url(#0d9886e8bc)">
        <g clip-path="url(#fb31baaba6)">
          <g
            className={currentActiveElement === 'thighRF' ? Style.active : ''}
            clip-path="url(#327d6c18ba)"
          >
            <path
              fill="#ffffff"
              d="M 188.261719 179.117188 L 262.722656 190.863281 L 222.949219 443.042969 L 148.484375 431.296875 Z M 188.261719 179.117188 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={() => {
                active('thighRF');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#acdb15755d)">
        <g clip-path="url(#cebb806837)">
          <g clip-path="url(#40e8e049af)">
            <g clip-path="url(#656f64e9bb)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 188.258488, 179.1278)"
                fill="none"
                stroke-linejoin="miter"
                d="M 50.248268 0.00118394 L 100.497898 129.98368 L 81.30618 340.302214 L 19.193535 340.30197 L 0.0000416217 129.984508 Z M 50.248268 0.00118394 "
                stroke="#000000"
                stroke-width="8"
                stroke-opacity="1"
                stroke-miterlimit="4"
              />
            </g>
          </g>
        </g>
        <foreignObject
          x="170"
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
export const KneeFrontRight = ({
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
      <g clip-path="url(#1fc430e116)">
        <g
          className={currentActiveElement === 'kneeRF' ? Style.active : ''}
          clip-path="url(#60b60bdb35)"
        >
          <path
            fill="#ffffff"
            d="M 167.472656 411.863281 L 208.503906 411.863281 L 208.503906 452.890625 L 167.472656 452.890625 Z M 167.472656 411.863281 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('kneeRF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#db35a512f8)"
      >
        <g clip-path="url(#7b234f2c6f)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 167.474511, 411.862802)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.351695 0.00063843 C 12.247528 0.00063843 -0.00247257 12.245431 -0.00247257 27.349598 C -0.00247257 42.458974 12.247528 54.703766 27.351695 54.703766 C 42.455863 54.703766 54.700655 42.458974 54.700655 27.349598 C 54.700655 12.245431 42.455863 0.00063843 27.351695 0.00063843 Z M 27.351695 0.00063843 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="160"
          y="417"
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
export const AnkleFrontRight = ({
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
      <g clip-path="url(#dfa9fe64ad)">
        <g
          className={currentActiveElement === 'ankleRF' ? Style.active : ''}
          clip-path="url(#3aa5364e49)"
        >
          <path
            fill="#ffffff"
            d="M 148.730469 507.441406 L 189.757812 507.441406 L 189.757812 548.46875 L 148.730469 548.46875 Z M 148.730469 507.441406 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('ankleRF');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#50ae86f351)"
      >
        <g clip-path="url(#286e6b8010)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 148.729741, 507.43975)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.34993 0.00220787 C 12.245762 0.00220787 0.000970228 12.247 0.000970228 27.351167 C 0.000970228 42.455335 12.245762 54.705335 27.34993 54.705335 C 42.459305 54.705335 54.704098 42.455335 54.704098 27.351167 C 54.704098 12.247 42.459305 0.00220787 27.34993 0.00220787 Z M 27.34993 0.00220787 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="145"
          y="512"
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
