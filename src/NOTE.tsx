className={
    currentActiveElement === 'face' ? Style.active : ''
  }



  onClick={(e) => {
    active(e, 'face');
  }}


  <text
                    className={Style.svgInjuryText}
                    x="193"
                    y="105"
                    fill="black"
                    fontSize="20"
                    textAnchor="middle"
                  >
                    {appContext.injuryAssessment.neck}
                  </text>


<foreignObject x="45" y="255" width="70" height="40"   pointerEvents="none">
                      <div className={Style.svgInjuryText}>
                        <p>{value}</p>
                      </div>
                    </foreignObject>

<path
d="M 195 50 L 242 54 "
stroke='black'
// stroke={appContext.injuryAssessment.nose ? 'black' : ''}
stroke-width="1"
fill="none"
/>


className={`${Style.svgInjuryText} ${Style.referenceInjury}`}

    {/* <LeftEye value={appContext.injuryAssessment.leftEye} active={active} currentActiveElement={currentActiveElement} /> */}