export const LeftEye = ({
  active,
  currentActiveElement,
  value,
}: {
  currentActiveElement?: string;
  active: (part: string) => void;
  value: string;
}) => {
  return (
    <g
    //  clip-path="url(#0876ffedd5)"
    >
      <g
        className={currentActiveElement === 'leftEye' ? Style.active : ''}
        clip-path="url(#478d0847fb)"
      >
        <path
          fill="#ffffff"
          d="M 203.039062 23.582031 L 221.503906 23.582031 L 221.503906 42.046875 L 203.039062 42.046875 Z M 203.039062 23.582031 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={(e) => {
            active(e, 'leftEye');
          }}
    
        />
      </g>
      <foreignObject x="243" y="-1" width="60" height="30" pointerEvents="none">
        <div className={`${Style.svgInjuryText} ${Style.referenceInjury}`}>
          <p>{value}</p>
        </div>
      </foreignObject>
      <path
        d="M 213 35 L 242 28 "
        stroke={value ? 'black' : ''}
        stroke-width="1"
        fill="none"
      />
    </g>
  );
};

export const RightEye = () => {};
