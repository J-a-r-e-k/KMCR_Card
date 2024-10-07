import Style from '../InjuryAssessment.module.scss';

export const RightBackShin = ({
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
      <g clip-path="url(#447ee3fa41)">
        <g clip-path="url(#9ade081514)">
          <g
            className={currentActiveElement === 'shinRB' ? Style.active : ''}
            clip-path="url(#dfc9a83958)"
          >
            <path
              fill="#ffffff"
              d="M 197.503906 185.242188 L 257.808594 175.46875 L 315.546875 531.632812 L 255.242188 541.410156 Z M 197.503906 185.242188 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={() => {
                active('shinRB');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#d628107e39)">
        <g clip-path="url(#26224afee0)">
          <g clip-path="url(#707db0fe9f)">
            <g clip-path="url(#975b2c1c2d)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 197.504524, 185.244929)"
                fill="none"
                stroke-linejoin="miter"
                d="M 40.727461 -0.00186825 L 81.450988 183.752803 L 65.895431 481.074308 L 15.554579 481.070518 L -0.0000822831 183.755035 Z M 40.727461 -0.00186825 "
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

export const RightBackThigh = ({
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
      <g clip-path="url(#51075e62ce)">
        <g clip-path="url(#83d1956872)">
          <g
            className={currentActiveElement === 'thighRB' ? Style.active : ''}
            clip-path="url(#555f2fbd99)"
          >
            <path
              fill="#ffffff"
              d="M 189.757812 182.222656 L 264.449219 170.113281 L 306.542969 429.773438 L 231.855469 441.882812 Z M 189.757812 182.222656 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={() => {
                active('thighRB');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#c992d7b920)">
        <g clip-path="url(#6a3a8bbafb)">
          <g clip-path="url(#f10419032c)">
            <g clip-path="url(#fcf7339f0f)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 189.760919, 182.231364)"
                fill="none"
                stroke-linejoin="miter"
                d="M 50.437137 0.00236076 L 100.87602 133.98279 L 81.607874 350.771304 L 19.263213 350.768485 L -0.00174271 133.98036 Z M 50.437137 0.00236076 "
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

export const KneeBackRight = ({
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
      <g clip-path="url(#e8dd380571)">
        <g
          className={currentActiveElement === 'kneeRB' ? Style.active : ''}
          clip-path="url(#d8af1225f3)"
        >
          <path
            fill="#ffffff"
            d="M 249.917969 411.578125 L 290.949219 411.578125 L 290.949219 452.605469 L 249.917969 452.605469 Z M 249.917969 411.578125 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('kneeRB');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#c218c84113)"
      >
        <g clip-path="url(#b98e07c1a1)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 249.91912, 411.57797)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.352633 0.000206081 C 12.243257 0.000206081 -0.00153495 12.244998 -0.00153495 27.349166 C -0.00153495 42.458541 12.243257 54.703333 27.352633 54.703333 C 42.4568 54.703333 54.701592 42.458541 54.701592 27.349166 C 54.701592 12.244998 42.4568 0.000206081 27.352633 0.000206081 Z M 27.352633 0.000206081 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="240"
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

export const AnkleBackRight = ({
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
      <g clip-path="url(#0377a71c2f)">
        <g
          className={currentActiveElement === 'ankleRB' ? Style.active : ''}
          clip-path="url(#a2a1287d2b)"
        >
          <path
            fill="#ffffff"
            d="M 265.523438 507.355469 L 306.550781 507.355469 L 306.550781 548.386719 L 265.523438 548.386719 Z M 265.523438 507.355469 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('ankleRB');
            }}
          />
        </g>
      </g>
      <g
      //  clip-path="url(#e368d0a606)"
      >
        <g clip-path="url(#f423172b02)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 265.522107, 507.35707)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.350733 -0.00213547 C 12.246566 -0.00213547 0.00177361 12.247865 0.00177361 27.352032 C 0.00177361 42.4562 12.246566 54.700992 27.350733 54.700992 C 42.4549 54.700992 54.704901 42.4562 54.704901 27.352032 C 54.704901 12.247865 42.4549 -0.00213547 27.350733 -0.00213547 Z M 27.350733 -0.00213547 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="257"
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
