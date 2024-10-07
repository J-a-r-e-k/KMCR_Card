import Style from '../InjuryAssessment.module.scss';

export const HipsFrontRight = ({
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
      <g clip-path="url(#d752fd1893)">
        <g
          className={currentActiveElement === 'hipRF' ? Style.active : ''}
          clip-path="url(#f83b9f17a3)"
        >
          <path
            fill="#ffffff"
            d="M 164.578125 282.59375 L 205.609375 282.59375 L 205.609375 323.625 L 164.578125 323.625 Z M 164.578125 282.59375 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('hipRF');
            }}
          />
        </g>
      </g>
      <g
      //   clip-path="url(#223d863659)"
      >
        <g clip-path="url(#b33fedd655)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 164.578776, 282.594706)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.353299 -0.00127512 C 12.243924 -0.00127512 -0.000868537 12.243517 -0.000868537 27.352893 C -0.000868537 42.45706 12.243924 54.701852 27.353299 54.701852 C 42.457467 54.701852 54.702259 42.45706 54.702259 27.352893 C 54.702259 12.243517 42.457467 -0.00127512 27.353299 -0.00127512 Z M 27.353299 -0.00127512 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="155"
          y="288"
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

export const HipsFrontLeft = ({
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
      <g clip-path="url(#f345faf5e1)">
        <g
          className={currentActiveElement === 'hipLF' ? Style.active : ''}
          clip-path="url(#faed0a7b98)"
        >
          <path
            fill="#ffffff"
            d="M 249.917969 282.40625 L 290.949219 282.40625 L 290.949219 323.433594 L 249.917969 323.433594 Z M 249.917969 282.40625 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('hipLF');
            }}
          />
        </g>
      </g>
      <g
      //   clip-path="url(#eddb1595a3)"
      >
        <g clip-path="url(#c1a3837952)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 249.91912, 282.404451)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.352633 0.00239847 C 12.243257 0.00239847 -0.00153495 12.247191 -0.00153495 27.351358 C -0.00153495 42.455525 12.243257 54.705526 27.352633 54.705526 C 42.4568 54.705526 54.701592 42.455525 54.701592 27.351358 C 54.701592 12.247191 42.4568 0.00239847 27.352633 0.00239847 Z M 27.352633 0.00239847 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="248"
          y="288"
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

export const HipsBackRight = ({
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
      <g clip-path="url(#bf8035cfd6)">
        <g
          className={currentActiveElement === 'hipRB' ? Style.active : ''}
          clip-path="url(#754b55623e)"
        >
          <path
            fill="#ffffff"
            d="M 249.917969 282.6875 L 290.949219 282.6875 L 290.949219 323.71875 L 249.917969 323.71875 Z M 249.917969 282.6875 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('hipRB');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#3c80588bc6)"
      >
        <g clip-path="url(#3b37aa4572)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 249.91912, 282.689305)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.352633 -0.00240632 C 12.243257 -0.00240632 -0.00153495 12.247594 -0.00153495 27.351762 C -0.00153495 42.455929 12.243257 54.700721 27.352633 54.700721 C 42.4568 54.700721 54.701592 42.455929 54.701592 27.351762 C 54.701592 12.247594 42.4568 -0.00240632 27.352633 -0.00240632 Z M 27.352633 -0.00240632 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="248"
          y="288"
          width="45"
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

export const HipsBackLeft = ({
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
      <g clip-path="url(#7eeba5b1f1)">
        <g
          className={currentActiveElement === 'hipLB' ? Style.active : ''}
          clip-path="url(#30c62ea764)"
        >
          <path
            fill="#ffffff"
            d="M 164.578125 282.878906 L 205.609375 282.878906 L 205.609375 323.910156 L 164.578125 323.910156 Z M 164.578125 282.878906 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('hipLB');
            }}
          />
        </g>
      </g>
      <g
      //  clip-path="url(#b40c05f885)"
      >
        <g clip-path="url(#04bdf87a78)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 164.578776, 282.879558)"
            fill="none"
            stroke-linejoin="miter"
            d="M 27.353299 -0.000868374 C 12.243924 -0.000868374 -0.000868537 12.243924 -0.000868537 27.353299 C -0.000868537 42.457467 12.243924 54.702259 27.353299 54.702259 C 42.457467 54.702259 54.702259 42.457467 54.702259 27.353299 C 54.702259 12.243924 42.457467 -0.000868374 27.353299 -0.000868374 Z M 27.353299 -0.000868374 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="155"
          y="288"
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
