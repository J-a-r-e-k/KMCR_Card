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
      {' '}
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
              onClick={(e) => {
                active(e, 'shinRF');
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
              onClick={(e) => {
                active(e, 'thighRF');
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
