import Style from '../InjuryAssessment.module.scss';
export const LeftBackShin = ({
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
      <g clip-path="url(#0a0bc0dae3)">
        <g clip-path="url(#edfd278c91)">
          <g
            className={currentActiveElement === 'shinLB' ? Style.active : ''}
            clip-path="url(#f5a72c6769)"
          >
            <path
              fill="#ffffff"
              d="M 196.179688 175.46875 L 256.523438 184.984375 L 200.3125 541.394531 L 139.96875 531.878906 Z M 196.179688 175.46875 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={() => {
                active('shinLB');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#347e6dc209)">
        <g clip-path="url(#557f668edf)">
          <g clip-path="url(#fb754d320c)">
            <g clip-path="url(#c0a9c694b0)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 196.180129, 175.468973)"
                fill="none"
                stroke-linejoin="miter"
                d="M 40.725646 -0.00141965 L 81.454879 183.751086 L 65.898371 481.070829 L 15.555215 481.07556 L 0.00233033 183.753521 Z M 40.725646 -0.00141965 "
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

export const LeftBackThigh = ({
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
      <g clip-path="url(#76a51c9feb)">
        <g clip-path="url(#698e556de3)">
          <g
            className={currentActiveElement === 'thighLB' ? Style.active : ''}
            clip-path="url(#c7951c1fc4)"
          >
            <path
              fill="#ffffff"
              d="M 186.460938 184.046875 L 262.085938 195.972656 L 223.183594 442.632812 L 147.558594 430.707031 Z M 186.460938 184.046875 "
              fill-opacity="1"
              fill-rule="nonzero"
              onClick={() => {
                active('thighLB');
              }}
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#20a7f359a5)">
        <g clip-path="url(#83429ad880)">
          <g clip-path="url(#f297614157)">
            <g clip-path="url(#2fb654a7d5)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 186.460305, 184.061731)"
                fill="none"
                stroke-linejoin="miter"
                d="M 51.030002 -0.00129656 L 102.063435 127.194846 L 82.571931 333.005022 L 19.494272 333.004074 L -0.000539318 127.194868 Z M 51.030002 -0.00129656 "
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

export const KneeBackLeft = ({
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
      <g clip-path="url(#44b692b698)">
        <g
          className={currentActiveElement === 'kneeLB' ? Style.active : ''}
          clip-path="url(#925c9bc6cf)"
        >
          <path
            fill="#ffffff"
            d="M 164.578125 411.578125 L 205.609375 411.578125 L 205.609375 452.605469 L 164.578125 452.605469 Z M 164.578125 411.578125 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('kneeLB');
            }}
          />
        </g>
      </g>
      <g
      //  clip-path="url(#97056328c5)"
      >
        <g clip-path="url(#ecd3cca582)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 164.578776, 411.57797)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.353299 0.000206081 C 12.243924 0.000206081 -0.000868537 12.244998 -0.000868537 27.349166 C -0.000868537 42.458541 12.243924 54.703333 27.353299 54.703333 C 42.457467 54.703333 54.702259 42.458541 54.702259 27.349166 C 54.702259 12.244998 42.457467 0.000206081 27.353299 0.000206081 Z M 27.353299 0.000206081 "
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

export const AnkleBackLeft = ({
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
      <g clip-path="url(#dd0a3258dc)">
        <g
          className={currentActiveElement === 'ankleLB' ? Style.active : ''}
          clip-path="url(#3190e81780)"
        >
          <path
            fill="#ffffff"
            d="M 148.730469 507.722656 L 189.757812 507.722656 L 189.757812 548.753906 L 148.730469 548.753906 Z M 148.730469 507.722656 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('ankleLB');
            }}
          />
        </g>
      </g>
      <g
      //  clip-path="url(#cd884d3bcc)"
      >
        <g clip-path="url(#a5711eb2ec)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 148.729741, 507.724558)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.34993 -0.00253612 C 12.245762 -0.00253612 0.000970228 12.247464 0.000970228 27.351632 C 0.000970228 42.455799 12.245762 54.700591 27.34993 54.700591 C 42.459305 54.700591 54.704098 42.455799 54.704098 27.351632 C 54.704098 12.247464 42.459305 -0.00253612 27.34993 -0.00253612 Z M 27.34993 -0.00253612 "
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
