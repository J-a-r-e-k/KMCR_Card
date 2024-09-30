import Style from './InjuryAssessment.module.scss';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import { InjurySVG, InjurySVGBack, InjurySVGFront } from './InjurySVG';
import { LeftEye } from './BodyParts/Eyes';
// import { useAppContext } from '../../../context/AppContext';
// import { useEffect } from 'react';

// onClick={() => {
//   active('face');
// }}
// />
// <text x="160" y="70" fill="black" fontSize="20">
// {appContext.injuryAssessment.face}
// </text>

const InjuryAssessment = () => {
  const appContext = useAppContext();
  // const appContext = useAppContext();

  // function cos(event) {
  //   // const centerX =
  //   //   event.target.closest('svg').getBoundingClientRect().left +
  //   //   event.target.getBBox().x;
  //   // console.log(event.target.getBBox().width);
  //   // const centerY =
  //   //   event.target.closest('svg').getBoundingClientRect().top +
  //   //   event.target.getBBox().y +
  //   //   event.target.getBBox().height / 2;

  //   const centerX = event.clientX;
  //   const centerY = event.clientY;

  //   const newDiv = document.createElement('div');
  //   newDiv.classList.add(Style.yyy);
  //   newDiv.textContent = 'Środek';
  //   newDiv.style.left = `${centerX}px`; // Ustawienie pozycji X
  //   newDiv.style.top = `${centerY}px`; // Ustawienie pozycji Y

  //   document.body.appendChild(newDiv);
  // }

  const [currentActiveElement, setCurrentAcitveElement] = useState<
    string | undefined
  >(undefined);

  const onRanaButtonClick = (type: string) => {
    if(!currentActiveElement) return;

    // zapiszesz do app Contenxt
    // currentActiveElement -> info o czesci ciala
    // type -> typ rany
    //frontAnkleRF
    // appContext.setInjuryAssessment({
    //   [currentActiveElement /* frontAnkleRF*/]: type
    // })
    console.log(currentActiveElement);

    appContext.setInjuryAssessment({
      ...appContext.injuryAssessment,
      [currentActiveElement]: type,
    });
  };

  function active(event, nameClass: string) {
    console.log(event.target.getBBox());

    if (currentActiveElement === nameClass) {
      setCurrentAcitveElement(undefined);
    } else {
      setCurrentAcitveElement(nameClass);
    }
  }
  return (
    <Formik
      initialValues={appContext.injuryAssessment}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setInjuryAssessment(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <div className={Style.wrap}>
            OBRAŻENIA
            <div className={Style.wrap}>
              <InjurySVG>
                {/* front Neck */}
                <g
                  className={
                    currentActiveElement === 'neck' ? Style.active : ''
                  }
                  // clip-path="url(#b8fd47cac5)"
                >
                  <path
                    fill="#ffffff"
                    d="M 170.3125 73.746094 L 214.894531 73.746094 L 214.894531 122.683594 L 170.3125 122.683594 Z M 170.3125 73.746094 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    onClick={(e) => {
                      active(e, 'neck');
                    }}
                  />
                  <foreignObject
                    x="160"
                    y="90"
                    width="70"
                    height="35"
                    pointerEvents="none"
                  >
                    <div className={Style.svgInjuryText}>
                      <p>{appContext.injuryAssessment.neck}</p>
                    </div>
                  </foreignObject>
                </g>
                <g clip-path="url(#08ea2d795f)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 170.312338, 73.748717)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.000216122 0.00171086 L 59.437719 0.00171086 L 59.437719 65.19963 L 0.000216122 65.19963 Z M 0.000216122 0.00171086 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* face */}
                <g>
                  <g
                    className={
                      currentActiveElement === 'face' ? Style.active : ''
                    }
                    clip-path="url(#cae3ef3bef)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 148.230469 0 L 238.226562 0 L 238.226562 89.996094 L 148.230469 89.996094 Z M 148.230469 0 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'face');
                      }}
                    />
                  </g>
                </g>
                <g>
                  <g clip-path="url(#90ceaea83a)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 148.231636, 0.00002)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.993238 -0.0000266667 C 26.85782 -0.0000266667 -0.00155587 26.859349 -0.00155587 59.994768 C -0.00155587 93.124977 26.85782 119.984353 59.993238 119.984353 C 93.123448 119.984353 119.982824 93.124977 119.982824 59.994768 C 119.982824 26.859349 93.123448 -0.0000266667 59.993238 -0.0000266667 Z M 59.993238 -0.0000266667 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                  <foreignObject
                    x="150"
                    y="0"
                    width="85"
                    height="30"
                    pointerEvents="none"
                  >
                    <div className={Style.svgInjuryText}>
                      <p>{appContext.injuryAssessment.face}</p>
                    </div>
                  </foreignObject>
                </g>
                {/* arm right front (ramie PP)*/}
                <g>
                  <g
                    className={
                      currentActiveElement === 'rightFrontArm'
                        ? Style.active
                        : ''
                    }
                    // clip-path="url(#4dfce323b4)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 103.207031 141.300781 L 137.273438 152.089844 L 110.167969 237.65625 L 76.101562 226.867188 Z M 103.207031 141.300781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'rightFrontArm');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#8ab20bab75)">
                  <g clip-path="url(#b21280f1a1)">
                    <g clip-path="url(#46f955276e)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 103.205732, 141.30413)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00187598 0.000185516 L 47.642345 -0.00116989 L 47.642312 119.658353 L 0.00184344 119.659708 Z M 0.00187598 0.000185516 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                  <foreignObject
                    x="80"
                    y="165"
                    width="45"
                    height="50"
                    pointerEvents="none"
                  >
                    <div className={Style.svgInjuryText}>
                      <p>{appContext.injuryAssessment.rightFrontArm}</p>
                    </div>
                  </foreignObject>
                </g>
                {/* arm left front (ramie LP) */}
                <g
                // clip-path="url(#b90da744b2)"
                >
                  <g
                    className={
                      currentActiveElement === 'leftFrontArm'
                        ? Style.active
                        : ''
                    }
                    // clip-path="url(#4c22ee5d2f)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 246.101562 151.550781 L 280.335938 141.296875 L 306.125 227.414062 L 271.890625 237.667969 Z M 246.101562 151.550781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'leftFrontArm');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#e5c7ce7fb4)">
                  <g clip-path="url(#d6027eb399)">
                    <g clip-path="url(#dd9368aea6)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 246.103612, 151.555062)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00251463 0.000231332 L 47.640414 -0.000298641 L 47.639606 119.827786 L 0.00170664 119.828316 Z M 0.00251463 0.000231332 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                  <foreignObject
                    x="255"
                    y="165"
                    width="55"
                    height="50"
                    pointerEvents="none"
                  >
                    <div className={Style.svgInjuryText}>
                      <p>{appContext.injuryAssessment.leftFrontArm}</p>
                    </div>
                  </foreignObject>
                </g>
                <g clip-path="url(#9bce050508)">
                  <g clip-path="url(#d5730b4be2)">
                    <g clip-path="url(#3ab2b8ed77)">
                      <path
                        fill="#ffffff"
                        d="M 161.15625 172.226562 L 221.503906 181.742188 L 165.289062 538.152344 L 104.945312 528.636719 Z M 161.15625 172.226562 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#248ff454d9)">
                  <g clip-path="url(#e2169bb319)">
                    <g clip-path="url(#0bbdf07c7e)">
                      <g clip-path="url(#97f06a09a4)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 161.156991, 172.227538)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.725096 -0.00234851 L 81.455141 183.755302 L 65.898632 481.075045 L 15.554664 481.074632 L 0.00178004 183.752592 Z M 40.725096 -0.00234851 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#fd98444a4a)">
                  <g clip-path="url(#7ed5cd28fe)">
                    <g clip-path="url(#764416ec4f)">
                      <path
                        fill="#ffffff"
                        d="M 153.238281 176.160156 L 227.699219 187.90625 L 187.925781 440.085938 L 113.460938 428.34375 Z M 153.238281 176.160156 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#c64bd1fdf0)">
                  <g clip-path="url(#1131a9495c)">
                    <g clip-path="url(#a79ba4eecf)">
                      <g clip-path="url(#6d688314dc)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 153.235364, 176.171204)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 50.247765 0.000675657 L 100.497395 129.983172 L 81.305677 340.301706 L 19.193031 340.301462 L -0.000461772 129.984 Z M 50.247765 0.000675657 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#37afaa18ae)">
                  <g clip-path="url(#e63313c2fe)">
                    <g clip-path="url(#f0b788a2fc)">
                      <path
                        fill="#ffffff"
                        d="M 162.480469 182 L 222.785156 172.226562 L 280.523438 528.390625 L 220.222656 538.167969 Z M 162.480469 182 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#15d2033516)">
                  <g clip-path="url(#98af35aa01)">
                    <g clip-path="url(#b9eb89b8d2)">
                      <g clip-path="url(#4f1c382526)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 162.481385, 182.003479)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.726392 0.00223777 L 81.450752 183.751768 L 65.895194 481.073273 L 15.553509 481.074624 L -0.000318529 183.753999 Z M 40.726392 0.00223777 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#560b846fb9)">
                  <g clip-path="url(#99ad4bbed1)">
                    <g clip-path="url(#e9a932500e)">
                      <path
                        fill="#ffffff"
                        d="M 152.113281 161.648438 L 225.53125 149.75 L 270.671875 428.207031 L 197.257812 440.109375 Z M 152.113281 161.648438 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#61a1a2a56b)">
                  <g clip-path="url(#e0539aa1fd)">
                    <g clip-path="url(#1312f26e28)">
                      <g clip-path="url(#ef32879ff2)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 152.115932, 161.655116)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 49.57845 -0.00219603 L 99.155867 143.620893 L 80.219699 376.002017 L 18.935093 376.002206 L -0.00168683 143.617689 Z M 49.57845 -0.00219603 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#cc1b8835e8)">
                  <g clip-path="url(#858fe4f3ec)">
                    <path
                      fill="#ffffff"
                      d="M 104.945312 118.714844 L 280.679688 118.714844 L 280.679688 290.425781 L 104.945312 290.425781 Z M 104.945312 118.714844 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#f6e05fa594)">
                  <g clip-path="url(#fa17f370c0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 104.945021, 118.716269)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 58.526432 228.935609 L 175.583729 228.935609 L 234.109773 -0.00190078 L 0.000388004 -0.00190078 Z M 58.526432 228.935609 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#226bfa3ac4)">
                  <g clip-path="url(#f4dcc9f550)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 106.688389, 119.519811)"
                      fill="#ffffff"
                      stroke-linejoin="miter"
                      d="M 59.998818 234.129845 L 114.332153 234.129845 L 114.326948 -0.000372867 L -0.00118483 -0.000372867 Z M 59.998818 234.129845 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#11f165ef69)">
                  <path
                    fill="#ffffff"
                    d="M 190.085938 247.089844 L 247.699219 247.089844 L 247.699219 299.394531 L 190.085938 299.394531 Z M 190.085938 247.089844 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#fcf067dfe4)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 190.084723, 247.093339)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00161978 0.000547924 L 76.735998 0.000547924 L 76.735998 69.724509 L 0.00161978 69.724509 Z M 0.00161978 0.000547924 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#dea51d423b)">
                  <path
                    fill="#ffffff"
                    d="M 138.816406 247.089844 L 193.148438 247.089844 L 193.148438 299.976562 L 138.816406 299.976562 Z M 138.816406 247.089844 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#2d4587fca1)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 138.819369, 247.090526)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.0012582 -0.00091001 L 72.53772 -0.00091001 L 72.53772 70.499093 L 0.0012582 70.499093 Z M 0.0012582 -0.00091001 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#b589777b89)">
                  <g clip-path="url(#47b5535a52)">
                    <path
                      fill="#ffffff"
                      d="M 158.074219 324.644531 L 226.773438 324.644531 L 226.773438 357.335938 L 158.074219 357.335938 Z M 158.074219 324.644531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#eaee277bb4)">
                  <g clip-path="url(#3f325b158a)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 158.075545, 324.646355)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 45.779487 43.575698 L 91.555533 -0.0024316 L -0.00176811 -0.0024316 Z M 45.779487 43.575698 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#a3c1e521b2)">
                  <path
                    fill="#ffffff"
                    d="M 157.355469 290.996094 L 225.964844 290.996094 L 225.964844 327.664062 L 157.355469 327.664062 Z M 157.355469 290.996094 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#92b613e254)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 157.356673, 290.996609)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00160548 -0.000687246 L 91.545273 -0.000687246 L 91.545273 48.88994 L -0.00160548 48.88994 Z M -0.00160548 -0.000687246 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#d6e6100331)">
                  <path
                    fill="#ffffff"
                    d="M 58.640625 524.996094 L 153.011719 524.996094 L 153.011719 558.136719 L 58.640625 558.136719 Z M 58.640625 524.996094 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#9d48786053)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 58.655062, 524.997646)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00158417 -0.00206913 L 125.725548 -0.00206913 L 125.725548 44.169808 L 0.00158417 44.169808 Z M 0.00158417 -0.00206913 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#f131fd5007)">
                  <path
                    fill="#ffffff"
                    d="M 232.261719 524.996094 L 328.832031 524.996094 L 328.832031 558.136719 L 232.261719 558.136719 Z M 232.261719 524.996094 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#a00bbfb791)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 232.27549, 524.997646)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00247211 -0.00206913 L 128.653519 -0.00206913 L 128.653519 44.169808 L 0.00247211 44.169808 Z M 0.00247211 -0.00206913 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* forearm left front (przedramie LP)*/}
                <g
                // clip-path="url(#f7ae493422)"
                >
                  <g
                    className={
                      currentActiveElement === 'forearmLF' ? Style.active : ''
                    }
                    // clip-path="url(#6c879d06ec)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 271.527344 236.453125 L 305.761719 226.203125 L 332.191406 314.460938 L 297.957031 324.710938 Z M 271.527344 236.453125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'forearmLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#cd3c410771)">
                  <g clip-path="url(#4b75bc71bf)">
                    <g clip-path="url(#450d5a4f43)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 271.529638, 236.456144)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00171893 0.00175034 L 47.639618 0.00122037 L 47.639243 122.732716 L 0.00134413 122.733246 Z M 0.00171893 0.00175034 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                  <foreignObject x="265" y="255" width="70" height="40">
                    <div className={Style.svgInjuryText}>
                      <p>{appContext.injuryAssessment.forearmLF}</p>
                    </div>
                  </foreignObject>
                </g>
                <g clip-path="url(#2ebf5130ca)">
                  <g clip-path="url(#50f395d9dd)">
                    <path
                      fill="#ffffff"
                      d="M 297.707031 323.875 L 331.941406 313.625 L 345.355469 358.421875 L 311.121094 368.671875 Z M 297.707031 323.875 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#013c3bcb6f)">
                  <g clip-path="url(#56ad8c4761)">
                    <g clip-path="url(#0e3f084e52)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 297.707772, 323.875847)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000621764 -0.00136505 L 47.642267 -0.000400882 L 47.642108 62.436417 L -0.000780167 62.435452 Z M -0.000621764 -0.00136505 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* forearm right front (przedramie PP)*/}
                <g

                // clip-path="url(#12d26147a2)"
                >
                  <g
                    className={
                      currentActiveElement === 'forearmRF' ? Style.active : ''
                    }
                    // clip-path="url(#d1b572d01a)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 76.308594 226.203125 L 110.375 236.996094 L 82.597656 324.691406 L 48.53125 313.898438 Z M 76.308594 226.203125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'forearmRF');
                      }}
                    />
                    <foreignObject x="45" y="255" width="70" height="40">
                      <div className={Style.svgInjuryText}>
                        <p>{appContext.injuryAssessment.forearmRF}</p>
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g clip-path="url(#9131dbfe0c)">
                  <g clip-path="url(#187263ae03)">
                    <g clip-path="url(#71022f906e)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 76.309852, 226.205754)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00108528 0.00213082 L 47.639383 0.000775422 L 47.640133 122.577509 L -0.00190844 122.573899 Z M -0.00108528 0.00213082 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#24aab8c5ab)">
                  <g clip-path="url(#08314c07ce)">
                    <path
                      fill="#ffffff"
                      d="M 48.617188 313.625 L 82.683594 324.417969 L 68.648438 368.730469 L 34.582031 357.9375 Z M 48.617188 313.625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#19ef450b84)">
                  <g clip-path="url(#20c183965d)">
                    <g clip-path="url(#0d7788106a)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 48.618423, 313.624694)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00144727 0.000886693 L 47.639021 -0.000468709 L 47.63963 61.98714 L -0.00241127 61.98353 Z M -0.00144727 0.000886693 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#3ff014ff11)">
                  <g clip-path="url(#8d73d547a1)">
                    <path
                      fill="#ffffff"
                      d="M 251.011719 115.023438 L 292.042969 115.023438 L 292.042969 156.054688 L 251.011719 156.054688 Z M 251.011719 115.023438 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#a4a1ffb415)">
                  <g clip-path="url(#72d949a4e0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 251.013534, 115.025055)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351747 -0.00215679 C 12.24758 -0.00215679 -0.00242095 12.247844 -0.00242095 27.352011 C -0.00242095 42.456178 12.24758 54.700971 27.351747 54.700971 C 42.455914 54.700971 54.700706 42.456178 54.700706 27.352011 C 54.700706 12.247844 42.455914 -0.00215679 27.351747 -0.00215679 Z M 27.351747 -0.00215679 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#3329ad089c)">
                  <g clip-path="url(#34476da3cb)">
                    <path
                      fill="#ffffff"
                      d="M 250.144531 115.023438 L 291.175781 115.023438 L 291.175781 156.054688 L 250.144531 156.054688 Z M 250.144531 115.023438 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#8bf0a93e39)">
                  <g clip-path="url(#2fdd785bd7)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 250.144912, 115.025055)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35366 -0.00215679 C 12.244284 -0.00215679 -0.000507803 12.247844 -0.000507803 27.352011 C -0.000507803 42.456178 12.244284 54.700971 27.35366 54.700971 C 42.457827 54.700971 54.70262 42.456178 54.70262 27.352011 C 54.70262 12.247844 42.457827 -0.00215679 27.35366 -0.00215679 Z M 27.35366 -0.00215679 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#7f4b3d0082)">
                  <g clip-path="url(#38b6d35719)">
                    <path
                      fill="#ffffff"
                      d="M 270.660156 210.933594 L 311.6875 210.933594 L 311.6875 251.964844 L 270.660156 251.964844 Z M 270.660156 210.933594 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#76192ab2a0)">
                  <g clip-path="url(#aa42b7435e)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 270.659432, 210.935137)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349925 -0.0020582 C 12.245758 -0.0020582 0.000965631 12.247942 0.000965631 27.35211 C 0.000965631 42.456277 12.245758 54.701069 27.349925 54.701069 C 42.459301 54.701069 54.704093 42.456277 54.704093 27.35211 C 54.704093 12.247942 42.459301 -0.0020582 27.349925 -0.0020582 Z M 27.349925 -0.0020582 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#433574f149)">
                  <g clip-path="url(#4d8bdf38c9)">
                    <path
                      fill="#ffffff"
                      d="M 297.707031 300.152344 L 338.734375 300.152344 L 338.734375 341.183594 L 297.707031 341.183594 Z M 297.707031 300.152344 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#0e8564b5d0)">
                  <g clip-path="url(#ae3083d40d)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 297.707037, 300.152614)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35416 -0.000359791 C 12.244784 -0.000359791 -0.00000803044 12.244432 -0.00000803044 27.353808 C -0.00000803044 42.457975 12.244784 54.702768 27.35416 54.702768 C 42.458327 54.702768 54.703119 42.457975 54.703119 27.353808 C 54.703119 12.244432 42.458327 -0.000359791 27.35416 -0.000359791 Z M 27.35416 -0.000359791 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#b6616e6e41)">
                  <g clip-path="url(#1f4a1f611c)">
                    <path
                      fill="#ffffff"
                      d="M 71.496094 210.933594 L 112.523438 210.933594 L 112.523438 251.964844 L 71.496094 251.964844 Z M 71.496094 210.933594 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#792e8ab0a5)">
                  <g clip-path="url(#a509a55b91)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 71.495073, 210.935137)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35032 -0.0020582 C 12.246153 -0.0020582 0.00136057 12.247942 0.00136057 27.35211 C 0.00136057 42.456277 12.246153 54.701069 27.35032 54.701069 C 42.459696 54.701069 54.704488 42.456277 54.704488 27.35211 C 54.704488 12.247942 42.459696 -0.0020582 27.35032 -0.0020582 Z M 27.35032 -0.0020582 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#74b37954de)">
                  <g clip-path="url(#9a2a8c3c9e)">
                    <path
                      fill="#ffffff"
                      d="M 43.558594 299.960938 L 84.585938 299.960938 L 84.585938 340.992188 L 43.558594 340.992188 Z M 43.558594 299.960938 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#ee41fbb083)">
                  <g clip-path="url(#25dd1363ca)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 43.558086, 299.96239)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349637 -0.00193614 C 12.24547 -0.00193614 0.000677378 12.248064 0.000677378 27.352232 C 0.000677378 42.456399 12.24547 54.701191 27.349637 54.701191 C 42.459013 54.701191 54.703805 42.456399 54.703805 27.352232 C 54.703805 12.248064 42.459013 -0.00193614 27.349637 -0.00193614 Z M 27.349637 -0.00193614 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#a4963ec969)">
                  <g clip-path="url(#723a597fce)">
                    <path
                      fill="#ffffff"
                      d="M 96.285156 115.023438 L 137.3125 115.023438 L 137.3125 156.054688 L 96.285156 156.054688 Z M 96.285156 115.023438 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#a3ed212990)">
                  <g clip-path="url(#5a51f1cb74)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 96.283275, 115.025055)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351467 -0.00215679 C 12.2473 -0.00215679 0.00250771 12.247844 0.00250771 27.352011 C 0.00250771 42.456178 12.2473 54.700971 27.351467 54.700971 C 42.455635 54.700971 54.705635 42.456178 54.705635 27.352011 C 54.705635 12.247844 42.455635 -0.00215679 27.351467 -0.00215679 Z M 27.351467 -0.00215679 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#841e05ae36)">
                  <g clip-path="url(#7ab7e85d75)">
                    <path
                      fill="#ffffff"
                      d="M 132.453125 408.90625 L 173.480469 408.90625 L 173.480469 449.933594 L 132.453125 449.933594 Z M 132.453125 408.90625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#246027e8ed)">
                  <g clip-path="url(#0fc0780c14)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 132.451372, 408.906195)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351296 0.0000739289 C 12.247129 0.0000739289 0.0023369 12.244866 0.0023369 27.349033 C 0.0023369 42.458409 12.247129 54.703201 27.351296 54.703201 C 42.455464 54.703201 54.705464 42.458409 54.705464 27.349033 C 54.705464 12.244866 42.455464 0.0000739289 27.351296 0.0000739289 Z M 27.351296 0.0000739289 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#ac61cab478)">
                  <g clip-path="url(#8ff37a58f5)">
                    <path
                      fill="#ffffff"
                      d="M 209.984375 408.90625 L 251.011719 408.90625 L 251.011719 449.933594 L 209.984375 449.933594 Z M 209.984375 408.90625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#f328e45d81)">
                  <g clip-path="url(#5c60a71301)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 209.984478, 408.906195)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.354031 0.0000739289 C 12.244655 0.0000739289 -0.000137088 12.244866 -0.000137088 27.349033 C -0.000137088 42.458409 12.244655 54.703201 27.354031 54.703201 C 42.458198 54.703201 54.70299 42.458409 54.70299 27.349033 C 54.70299 12.244866 42.458198 0.0000739289 27.354031 0.0000739289 Z M 27.354031 0.0000739289 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#84e861fb79)">
                  <g clip-path="url(#9b05d4c37d)">
                    <path
                      fill="#ffffff"
                      d="M 230.5 504.117188 L 271.527344 504.117188 L 271.527344 545.144531 L 230.5 545.144531 Z M 230.5 504.117188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#b1d19747ae)">
                  <g clip-path="url(#caf8ff0d6c)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 230.498986, 504.115606)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350312 0.00210801 C 12.246145 0.00210801 0.00135235 12.2469 0.00135235 27.351068 C 0.00135235 42.455235 12.246145 54.705235 27.350312 54.705235 C 42.459687 54.705235 54.70448 42.455235 54.70448 27.351068 C 54.70448 12.2469 42.459687 0.00210801 27.350312 0.00210801 Z M 27.350312 0.00210801 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#522f1be048)">
                  <g clip-path="url(#f5f7e455ae)">
                    <path
                      fill="#ffffff"
                      d="M 113.707031 504.484375 L 154.734375 504.484375 L 154.734375 545.511719 L 113.707031 545.511719 Z M 113.707031 504.484375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#6dfd20fff4)">
                  <g clip-path="url(#2ed104937c)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 113.706617, 504.483094)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349512 0.00170737 C 12.245344 0.00170737 0.000552169 12.2465 0.000552169 27.350667 C 0.000552169 42.454834 12.245344 54.704835 27.349512 54.704835 C 42.458887 54.704835 54.70368 42.454834 54.70368 27.350667 C 54.70368 12.2465 42.458887 0.00170737 27.349512 0.00170737 Z M 27.349512 0.00170737 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#d0a962a3e7)">
                  <g clip-path="url(#5f1fb215ef)">
                    <path
                      fill="#ffffff"
                      d="M 129.554688 279.636719 L 170.585938 279.636719 L 170.585938 320.667969 L 129.554688 320.667969 Z M 129.554688 279.636719 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#836d1f825c)">
                  <g clip-path="url(#18917a149e)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 129.555655, 279.638094)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352878 -0.00183323 C 12.243502 -0.00183323 -0.0012898 12.248167 -0.0012898 27.352335 C -0.0012898 42.456502 12.243502 54.701294 27.352878 54.701294 C 42.457045 54.701294 54.701838 42.456502 54.701838 27.352335 C 54.701838 12.248167 42.457045 -0.00183323 27.352878 -0.00183323 Z M 27.352878 -0.00183323 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#97ac9b1742)">
                  <g clip-path="url(#eeacdebf2b)">
                    <path
                      fill="#ffffff"
                      d="M 214.894531 279.449219 L 255.925781 279.449219 L 255.925781 320.476562 L 214.894531 320.476562 Z M 214.894531 279.449219 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#8b09ccdfe1)">
                  <g clip-path="url(#242307a03c)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 214.895996, 279.44787)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352215 0.00179876 C 12.248048 0.00179876 -0.00195301 12.246591 -0.00195301 27.350758 C -0.00195301 42.454926 12.248048 54.704926 27.352215 54.704926 C 42.456382 54.704926 54.701174 42.454926 54.701174 27.350758 C 54.701174 12.246591 42.456382 0.00179876 27.352215 0.00179876 Z M 27.352215 0.00179876 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#7dc3cd55d8)">
                  <g clip-path="url(#1f87be4e51)">
                    <path
                      fill="#ffffff"
                      d="M 173.480469 63.972656 L 212.292969 63.972656 L 212.292969 79.695312 L 173.480469 79.695312 Z M 173.480469 63.972656 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#04dc20896a)">
                  <g clip-path="url(#863d3ea4aa)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 173.488294, 63.97178)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 37.333318 0.00116877 C 45.26561 0.00116877 51.697902 4.688669 51.697902 10.475128 C 51.697902 16.261586 45.26561 20.954295 37.333318 20.954295 L 14.364567 20.954295 C 6.432275 20.954295 -0.0000166971 16.261586 -0.0000166971 10.475128 C -0.0000166971 4.688669 6.432275 0.00116877 14.364567 0.00116877 Z M 37.333318 0.00116877 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* nose */}
                <g clip-path="url(#204ed14b38)">
                  <g
                    className={
                      currentActiveElement === 'nose' ? Style.active : ''
                    }
                    clip-path="url(#95cde7b66a)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 179.234375 30.5625 L 207.222656 30.5625 L 207.222656 59.425781 L 179.234375 59.425781 Z M 179.234375 30.5625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'nose');
                      }}
                    />
                  </g>
                </g>
                <g
                // clip-path="url(#f0eb3a0517)"
                >
                  <g clip-path="url(#9df81adabd)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 179.235593, 30.564018)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 18.654626 -0.00202429 L 37.310876 38.48235 L -0.00162364 38.48235 Z M 18.654626 -0.00202429 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                  <foreignObject
                    x="243"
                    y="25"
                    width="60"
                    height="30"
                    pointerEvents="none"
                  >
                    <div
                      className={`${Style.svgInjuryText} ${Style.referenceInjury}`}
                    >
                      <p>{appContext.injuryAssessment.nose}</p>
                    </div>
                  </foreignObject>

                  <path
                    d="M 195 50 L 242 54 "
                    stroke={appContext.injuryAssessment.nose ? 'black' : ''}
                    stroke-width="1"
                    fill="none"
                  />
                </g>
                {/* right Eye rightEye */}
                <g
                // clip-path="url(#7e260cc9f4)"
                >
                  <g
                    className={
                      currentActiveElement === 'rightEye' ? Style.active : ''
                    }
                    clip-path="url(#4efc25b12c)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 165.273438 23.582031 L 183.738281 23.582031 L 183.738281 42.046875 L 165.273438 42.046875 Z M 165.273438 23.582031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'rightEye');
                      }}
                    />
                  </g>
                  <foreignObject
                    x="80"
                    y="-1"
                    width="60"
                    height="30"
                    pointerEvents="none"
                  >
                    <div
                      className={`${Style.svgInjuryText} ${Style.referenceInjury} ${Style.referenceInjuryLeft}`}
                    >
                      <p>{appContext.injuryAssessment.rightEye}</p>
                    </div>
                  </foreignObject>

                  <path
                    d="M 172 35 L 140 28 "
                    stroke={appContext.injuryAssessment.rightEye ? 'black' : ''}
                    stroke-width="1"
                    fill="none"
                  />
                </g>
                <g clip-path="url(#84e0a05ca5)">
                  <g clip-path="url(#2f54812df3)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 165.275091, 23.583883)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.305088 -0.00246835 C 5.508213 -0.00246835 -0.00220456 5.507949 -0.00220456 12.304825 C -0.00220456 19.1017 5.508213 24.606909 12.305088 24.606909 C 19.101964 24.606909 24.607173 19.1017 24.607173 12.304825 C 24.607173 5.507949 19.101964 -0.00246835 12.305088 -0.00246835 Z M 12.305088 -0.00246835 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* left Eye */}
                <g
                //  clip-path="url(#0876ffedd5)"
                >
                  {/* <LeftEye value={appContext.injuryAssessment.leftEye} active={active} currentActiveElement={currentActiveElement} /> */}
                  <g
                    className={
                      currentActiveElement === 'leftEye' ? Style.active : ''
                    }
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
                  <foreignObject
                    x="243"
                    y="-1"
                    width="60"
                    height="30"
                    pointerEvents="none"
                  >
                    <div
                      className={`${Style.svgInjuryText} ${Style.referenceInjury}`}
                    >
                      <p>{appContext.injuryAssessment.leftEye}</p>
                    </div>
                  </foreignObject>
                  <path
                    d="M 213 35 L 242 28 "
                    stroke={appContext.injuryAssessment.leftEye ? 'black' : ''}
                    stroke-width="1"
                    fill="none"
                  />
                </g>
                <g clip-path="url(#c5f2e86690)">
                  <g clip-path="url(#c04f9a1a5c)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 203.038775, 23.583883)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.302468 -0.00246835 C 5.510801 -0.00246835 0.000383451 5.507949 0.000383451 12.304825 C 0.000383451 19.1017 5.510801 24.606909 12.302468 24.606909 C 19.099344 24.606909 24.609761 19.1017 24.609761 12.304825 C 24.609761 5.507949 19.099344 -0.00246835 12.302468 -0.00246835 Z M 12.302468 -0.00246835 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#3eb1a808c0)">
                  <path
                    fill="#ffffff"
                    d="M 540.632812 74.316406 L 584.941406 74.316406 L 584.941406 123.300781 L 540.632812 123.300781 Z M 540.632812 74.316406 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#67f3733e50)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 540.631609, 74.31756)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00160426 -0.00153837 L 59.07452 -0.00153837 L 59.07452 65.201585 L 0.00160426 65.201585 Z M 0.00160426 -0.00153837 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#98cb22baa3)">
                  <path
                    fill="#ffffff"
                    d="M 555.632812 74.316406 L 569.941406 74.316406 L 569.941406 123.234375 L 555.632812 123.234375 Z M 555.632812 74.316406 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#8732075f14)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 555.630985, 74.319955)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00243711 0.000476361 L 19.080562 0.000476361 L 19.080562 65.198392 L 0.00243711 65.198392 Z M 0.00243711 0.000476361 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#76d3d0d91a)">
                  <g clip-path="url(#c8b608002c)">
                    <path
                      fill="#ffffff"
                      d="M 518.277344 0.570312 L 608.273438 0.570312 L 608.273438 90.566406 L 518.277344 90.566406 Z M 518.277344 0.570312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#518bbc5633)">
                  <g clip-path="url(#2a464ed018)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 518.277938, 0.569702)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.994002 0.000814224 C 26.858583 0.000814224 -0.000792682 26.86019 -0.000792682 59.9904 C -0.000792682 93.125818 26.858583 119.985194 59.994002 119.985194 C 93.124211 119.985194 119.983587 93.125818 119.983587 59.9904 C 119.983587 26.86019 93.124211 0.000814224 59.994002 0.000814224 Z M 59.994002 0.000814224 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#2b9f73880b)">
                  <g clip-path="url(#30f8d895c6)">
                    <path
                      fill="#ffffff"
                      d="M 473.253906 141.871094 L 507.320312 152.660156 L 480.214844 238.226562 L 446.148438 227.433594 Z M 473.253906 141.871094 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#efb888873a)">
                  <g clip-path="url(#54ce8d83ea)">
                    <g clip-path="url(#e384684367)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 473.251948, 141.873808)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00199649 0.00229912 L 47.638472 0.000943719 L 47.638439 119.660466 L 0.00293614 119.660249 Z M -0.00199649 0.00229912 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#1fc62fc18b)">
                  <g clip-path="url(#f5fd592d83)">
                    <path
                      fill="#ffffff"
                      d="M 616.148438 152.121094 L 650.382812 141.867188 L 676.171875 227.984375 L 641.9375 238.238281 Z M 616.148438 152.121094 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#748eb4419d)">
                  <g clip-path="url(#7145196ba4)">
                    <g clip-path="url(#3dbe232f71)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 616.149886, 152.124741)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00194944 -0.000222896 L 47.640939 0.000741275 L 47.640131 119.828826 L 0.00223198 119.829356 Z M -0.00194944 -0.000222896 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#c64fa63e45)">
                  <g clip-path="url(#6190658a23)">
                    <g clip-path="url(#e32b15b0b1)">
                      <path
                        fill="#ffffff"
                        d="M 531.203125 172.796875 L 591.546875 182.3125 L 535.335938 538.722656 L 474.988281 529.207031 Z M 531.203125 172.796875 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#90f7c62ffa)">
                  <g clip-path="url(#3505be5e5e)">
                    <g clip-path="url(#fd6a1863db)">
                      <g clip-path="url(#8bcfa452d3)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 531.203234, 172.7972)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.726064 -0.00162257 L 81.455297 183.750883 L 65.898789 481.070626 L 15.555633 481.075358 L -0.00239659 183.754129 Z M 40.726064 -0.00162257 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#fa55ec0a2a)">
                  <g clip-path="url(#d0f2764021)">
                    <g clip-path="url(#9a86d14068)">
                      <path
                        fill="#ffffff"
                        d="M 521.484375 181.375 L 597.109375 193.300781 L 558.203125 439.960938 L 482.582031 428.035156 Z M 521.484375 181.375 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#52ab493ec4)">
                  <g clip-path="url(#408903ac21)">
                    <g clip-path="url(#e1a6245172)">
                      <g clip-path="url(#3e55730f30)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 521.483474, 181.389943)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 51.030337 -0.00146705 L 102.06377 127.194676 L 82.572267 333.004852 L 19.489462 333.004714 L -0.000203859 127.194697 Z M 51.030337 -0.00146705 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#5a41966fb3)">
                  <g clip-path="url(#50c43154ba)">
                    <g clip-path="url(#7bc32339f2)">
                      <path
                        fill="#ffffff"
                        d="M 532.527344 182.570312 L 592.832031 172.796875 L 650.570312 528.960938 L 590.265625 538.738281 Z M 532.527344 182.570312 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#d48def8e03)">
                  <g clip-path="url(#7b0b211ae1)">
                    <g clip-path="url(#44ec549884)">
                      <g clip-path="url(#c45b4fe34f)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 532.527626, 182.573141)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.727922 -0.00191129 L 81.451449 183.75276 L 65.895891 481.074265 L 15.555039 481.070475 L 0.000378063 183.754992 Z M 40.727922 -0.00191129 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#a83da32961)">
                  <g clip-path="url(#3dff4dcfca)">
                    <g clip-path="url(#7497da3db2)">
                      <path
                        fill="#ffffff"
                        d="M 524.78125 179.550781 L 599.472656 167.441406 L 641.566406 427.101562 L 566.878906 439.210938 Z M 524.78125 179.550781 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#bf0aeb4316)">
                  <g clip-path="url(#fb4d20af4c)">
                    <g clip-path="url(#433c2e8cd4)">
                      <g clip-path="url(#65234f4330)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 524.78405, 179.559651)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 50.437576 0.00221366 L 100.876458 133.982643 L 81.608312 350.771156 L 19.263652 350.768337 L -0.0013044 133.980213 Z M 50.437576 0.00221366 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#84317ba309)">
                  <g clip-path="url(#b0aa7beb12)">
                    <path
                      fill="#ffffff"
                      d="M 474.992188 119.285156 L 650.367188 119.285156 L 650.367188 285.566406 L 474.992188 285.566406 Z M 474.992188 119.285156 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#a4ddd7d2f5)">
                  <g clip-path="url(#16f3041480)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 474.991276, 119.287265)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 58.527259 221.700322 L 175.584556 221.700322 L 234.1106 0.00239625 L 0.00121519 0.00239625 Z M 58.527259 221.700322 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#240fdc9a3c)">
                  <g clip-path="url(#ef0a606b8a)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 477.51994, 120.089487)"
                      fill="#ffffff"
                      stroke-linejoin="miter"
                      d="M 59.994249 234.130694 L 114.332793 234.130694 L 110.327587 0.000475832 L -0.000545001 0.000475832 Z M 59.994249 234.130694 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#7be50ee0dc)">
                  <path
                    fill="#ffffff"
                    d="M 556.121094 119.285156 L 570.429688 119.285156 L 570.429688 251.945312 L 556.121094 251.945312 Z M 556.121094 119.285156 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#02bba5987d)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 556.119889, 119.292509)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.0016068 0.000612586 L 19.079731 0.000612586 L 19.079731 176.8704 L 0.0016068 176.8704 Z M 0.0016068 0.000612586 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#73ec200f69)">
                  <path
                    fill="#ffffff"
                    d="M 507.320312 244.414062 L 616.214844 244.414062 L 616.214844 296.714844 L 507.320312 296.714844 Z M 507.320312 244.414062 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#bce7d5fb3a)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 507.320379, 244.41499)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.0000883058 -0.0012361 L 145.093668 -0.0012361 L 145.093668 69.733142 L -0.0000883058 69.733142 Z M -0.0000883058 -0.0012361 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#fbb2d03d3c)">
                  <path
                    fill="#ffffff"
                    d="M 555.632812 244.414062 L 569.941406 244.414062 L 569.941406 296.738281 L 555.632812 296.738281 Z M 555.632812 244.414062 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#19df5c9ec6)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 555.630985, 244.418066)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00243711 -0.000130162 L 19.080562 -0.000130162 L 19.080562 69.723827 L 0.00243711 69.723827 Z M 0.00243711 -0.000130162 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#fde0371e3f)">
                  <g clip-path="url(#e4f412f6f0)">
                    <path
                      fill="#ffffff"
                      d="M 528.117188 325.214844 L 596.820312 325.214844 L 596.820312 357.90625 L 528.117188 357.90625 Z M 528.117188 325.214844 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#08b5eb7abc)">
                  <g clip-path="url(#7908875dfa)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 528.121802, 325.21606)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 45.775102 43.576508 L 91.556357 -0.0016213 L -0.000944123 -0.0016213 Z M 45.775102 43.576508 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#a092a60ef3)">
                  <path
                    fill="#ffffff"
                    d="M 527.402344 291.566406 L 596.011719 291.566406 L 596.011719 328.234375 L 527.402344 328.234375 Z M 527.402344 291.566406 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#6ad2c893e5)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 527.402906, 291.566259)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.000749497 0.000196654 L 91.546129 0.000196654 L 91.546129 48.890824 L -0.000749497 48.890824 Z M -0.000749497 0.000196654 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#a824ace917)">
                  <path
                    fill="#ffffff"
                    d="M 428.6875 525.566406 L 523.054688 525.566406 L 523.054688 558.707031 L 428.6875 558.707031 Z M 428.6875 525.566406 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#8392246456)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 428.701326, 525.567358)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00239856 -0.00126843 L 125.726362 -0.00126843 L 125.726362 44.170608 L 0.00239856 44.170608 Z M 0.00239856 -0.00126843 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#d0b48da8b9)">
                  <path
                    fill="#ffffff"
                    d="M 602.308594 525.566406 L 698.878906 525.566406 L 698.878906 558.707031 L 602.308594 558.707031 Z M 602.308594 525.566406 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#9a70082f53)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 602.321759, 525.567358)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00192823 -0.00126843 L 128.654327 -0.00126843 L 128.654327 44.170608 L -0.00192823 44.170608 Z M -0.00192823 -0.00126843 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#d9dd0bc812)">
                  <g clip-path="url(#9a69922d11)">
                    <path
                      fill="#ffffff"
                      d="M 641.574219 237.023438 L 675.808594 226.773438 L 702.238281 315.03125 L 668.003906 325.28125 Z M 641.574219 237.023438 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#e7e48d471d)">
                  <g clip-path="url(#6e6b24171e)">
                    <g clip-path="url(#e86652ac8a)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 641.575941, 237.025834)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00277734 0.00126977 L 47.640111 0.00223394 L 47.64123 122.72874 L -0.00315214 122.732766 Z M -0.00277734 0.00126977 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#ed156e5662)">
                  <g clip-path="url(#24b646f9a9)">
                    <path
                      fill="#ffffff"
                      d="M 667.753906 324.445312 L 701.988281 314.191406 L 715.402344 358.988281 L 681.167969 369.242188 Z M 667.753906 324.445312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#f060578a18)">
                  <g clip-path="url(#c35b106d1f)">
                    <g clip-path="url(#f7afe3fec6)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 667.754036, 324.445523)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.0000850805 -0.0003184 L 47.642803 0.000645772 L 47.637656 62.435969 L -0.000243484 62.436499 Z M -0.0000850805 -0.0003184 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#6fbef8029f)">
                  <g clip-path="url(#20f4d62a5a)">
                    <path
                      fill="#ffffff"
                      d="M 446.355469 226.773438 L 480.421875 237.566406 L 452.644531 325.261719 L 418.578125 314.46875 Z M 446.355469 226.773438 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#bf9eece5aa)">
                  <g clip-path="url(#300073222c)">
                    <g clip-path="url(#1dda7e3347)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 446.356133, 226.775444)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.0000797786 0.00268243 L 47.640389 0.00132703 L 47.639566 122.573095 L -0.000902932 122.574451 Z M -0.0000797786 0.00268243 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#5ffcd5152a)">
                  <g clip-path="url(#016e5742c5)">
                    <path
                      fill="#ffffff"
                      d="M 418.664062 314.195312 L 452.730469 324.984375 L 438.695312 369.300781 L 404.628906 358.507812 Z M 418.664062 314.195312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#54a3261170)">
                  <g clip-path="url(#7925bdc1a8)">
                    <g clip-path="url(#7698a6f123)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 418.664695, 314.194372)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000424729 0.00144968 L 47.640044 0.0000942829 L 47.63908 61.982738 L -0.00138874 61.984093 Z M -0.000424729 0.00144968 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#413aa7a37e)">
                  <g clip-path="url(#744b22eb7f)">
                    <path
                      fill="#ffffff"
                      d="M 620.191406 115.59375 L 661.21875 115.59375 L 661.21875 156.625 L 620.191406 156.625 Z M 620.191406 115.59375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#95bd915b6c)">
                  <g clip-path="url(#cb67e79e14)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 620.19115, 115.594738)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349301 -0.00131769 C 12.245134 -0.00131769 0.000341782 12.243474 0.000341782 27.35285 C 0.000341782 42.457017 12.245134 54.70181 27.349301 54.70181 C 42.458677 54.70181 54.703469 42.457017 54.703469 27.35285 C 54.703469 12.243474 42.458677 -0.00131769 27.349301 -0.00131769 Z M 27.349301 -0.00131769 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#e1145d77f5)">
                  <g clip-path="url(#d51ab72e76)">
                    <path
                      fill="#ffffff"
                      d="M 640.707031 211.503906 L 681.734375 211.503906 L 681.734375 252.535156 L 640.707031 252.535156 Z M 640.707031 211.503906 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#fc67422905)">
                  <g clip-path="url(#417d7fb63f)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 640.705701, 211.504816)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350733 -0.0012127 C 12.246566 -0.0012127 0.00177362 12.243579 0.00177362 27.352955 C 0.00177362 42.457122 12.246566 54.701915 27.350733 54.701915 C 42.4549 54.701915 54.704901 42.457122 54.704901 27.352955 C 54.704901 12.243579 42.4549 -0.0012127 27.350733 -0.0012127 Z M 27.350733 -0.0012127 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#a70ff88d11)">
                  <g clip-path="url(#f2c227b38e)">
                    <path
                      fill="#ffffff"
                      d="M 667.753906 300.722656 L 708.78125 300.722656 L 708.78125 341.75 L 667.753906 341.75 Z M 667.753906 300.722656 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#2d0fba31aa)">
                  <g clip-path="url(#7ace82ba2d)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 667.753268, 300.722321)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349811 0.000447308 C 12.245643 0.000447308 0.000851154 12.245239 0.000851154 27.349407 C 0.000851154 42.458782 12.245643 54.703575 27.349811 54.703575 C 42.459186 54.703575 54.703978 42.458782 54.703978 27.349407 C 54.703978 12.245239 42.459186 0.000447308 27.349811 0.000447308 Z M 27.349811 0.000447308 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#0fbe25c12a)">
                  <g clip-path="url(#b570a38093)">
                    <path
                      fill="#ffffff"
                      d="M 441.542969 211.503906 L 482.570312 211.503906 L 482.570312 252.535156 L 441.542969 252.535156 Z M 441.542969 211.503906 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#31ca540f53)">
                  <g clip-path="url(#c919eb42f6)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 441.541326, 211.504816)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35115 -0.0012127 C 12.246983 -0.0012127 0.00219095 12.243579 0.00219095 27.352955 C 0.00219095 42.457122 12.246983 54.701915 27.35115 54.701915 C 42.455318 54.701915 54.705318 42.457122 54.705318 27.352955 C 54.705318 12.243579 42.455318 -0.0012127 27.35115 -0.0012127 Z M 27.35115 -0.0012127 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#e08b52d89a)">
                  <g clip-path="url(#93f26362b2)">
                    <path
                      fill="#ffffff"
                      d="M 413.605469 300.53125 L 454.632812 300.53125 L 454.632812 341.5625 L 413.605469 341.5625 Z M 413.605469 300.53125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#07792297ac)">
                  <g clip-path="url(#22fdf3513b)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 413.604319, 300.532068)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350493 -0.00109064 C 12.246326 -0.00109064 0.00153336 12.243702 0.00153336 27.353077 C 0.00153336 42.457245 12.246326 54.702037 27.350493 54.702037 C 42.459869 54.702037 54.704661 42.457245 54.704661 27.353077 C 54.704661 12.243702 42.459869 -0.00109064 27.350493 -0.00109064 Z M 27.350493 -0.00109064 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#d18233dc1c)">
                  <g clip-path="url(#5c03cab595)">
                    <path
                      fill="#ffffff"
                      d="M 466.328125 115.59375 L 507.359375 115.59375 L 507.359375 156.625 L 466.328125 156.625 Z M 466.328125 115.59375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#2d1148cd4a)">
                  <g clip-path="url(#b70a75c0ad)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 466.329508, 115.594738)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352323 -0.00131769 C 12.248156 -0.00131769 -0.00184464 12.243474 -0.00184464 27.35285 C -0.00184464 42.457017 12.248156 54.70181 27.352323 54.70181 C 42.456491 54.70181 54.701283 42.457017 54.701283 27.35285 C 54.701283 12.243474 42.456491 -0.00131769 27.352323 -0.00131769 Z M 27.352323 -0.00131769 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#1c022a1408)">
                  <g clip-path="url(#d90b2b1caf)">
                    <path
                      fill="#ffffff"
                      d="M 499.601562 408.90625 L 540.632812 408.90625 L 540.632812 449.933594 L 499.601562 449.933594 Z M 499.601562 408.90625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#2b0402bb84)">
                  <g clip-path="url(#fe5e949af4)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 499.601883, 408.906195)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35374 0.0000739289 C 12.244365 0.0000739289 -0.000427412 12.244866 -0.000427412 27.349033 C -0.000427412 42.458409 12.244365 54.703201 27.35374 54.703201 C 42.457908 54.703201 54.7027 42.458409 54.7027 27.349033 C 54.7027 12.244866 42.457908 0.0000739289 27.35374 0.0000739289 Z M 27.35374 0.0000739289 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#2a7a54bb01)">
                  <g clip-path="url(#47df471df6)">
                    <path
                      fill="#ffffff"
                      d="M 584.941406 408.90625 L 625.972656 408.90625 L 625.972656 449.933594 L 584.941406 449.933594 Z M 584.941406 408.90625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#0dc29c8543)">
                  <g clip-path="url(#fb03823467)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 584.942255, 408.906195)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353036 0.0000739289 C 12.24366 0.0000739289 -0.00113222 12.244866 -0.00113222 27.349033 C -0.00113222 42.458409 12.24366 54.703201 27.353036 54.703201 C 42.457203 54.703201 54.701995 42.458409 54.701995 27.349033 C 54.701995 12.244866 42.457203 0.0000739289 27.353036 0.0000739289 Z M 27.353036 0.0000739289 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#eda44b4495)">
                  <g clip-path="url(#38bb19ec39)">
                    <path
                      fill="#ffffff"
                      d="M 600.546875 504.683594 L 641.574219 504.683594 L 641.574219 545.714844 L 600.546875 545.714844 Z M 600.546875 504.683594 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#78ca4fc7ca)">
                  <g clip-path="url(#05539b1847)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 600.545255, 504.685246)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35112 -0.00220362 C 12.246953 -0.00220362 0.00216033 12.247797 0.00216033 27.351964 C 0.00216033 42.456132 12.246953 54.700924 27.35112 54.700924 C 42.455287 54.700924 54.705288 42.456132 54.705288 27.351964 C 54.705288 12.247797 42.455287 -0.00220362 27.35112 -0.00220362 Z M 27.35112 -0.00220362 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#46ae9fd3c5)">
                  <g clip-path="url(#f0613c97dd)">
                    <path
                      fill="#ffffff"
                      d="M 483.753906 505.054688 L 524.78125 505.054688 L 524.78125 546.082031 L 483.753906 546.082031 Z M 483.753906 505.054688 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#09fe885aab)">
                  <g clip-path="url(#919073c051)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 483.75286, 505.052806)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350355 0.00250807 C 12.246188 0.00250807 0.00139535 12.2473 0.00139535 27.351468 C 0.00139535 42.455635 12.246188 54.705635 27.350355 54.705635 C 42.45973 54.705635 54.704523 42.455635 54.704523 27.351468 C 54.704523 12.2473 42.45973 0.00250807 27.350355 0.00250807 Z M 27.350355 0.00250807 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#e84d31c347)">
                  <g clip-path="url(#e326561dff)">
                    <path
                      fill="#ffffff"
                      d="M 499.601562 280.207031 L 540.632812 280.207031 L 540.632812 321.238281 L 499.601562 321.238281 Z M 499.601562 280.207031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#6704c87e46)">
                  <g clip-path="url(#a27a285a35)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 499.601883, 280.207772)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35374 -0.000987726 C 12.244365 -0.000987726 -0.000427412 12.243804 -0.000427412 27.35318 C -0.000427412 42.457347 12.244365 54.70214 27.35374 54.70214 C 42.457908 54.70214 54.7027 42.457347 54.7027 27.35318 C 54.7027 12.243804 42.457908 -0.000987726 27.35374 -0.000987726 Z M 27.35374 -0.000987726 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#ab2c452645)">
                  <g clip-path="url(#55eaeedfe3)">
                    <path
                      fill="#ffffff"
                      d="M 584.941406 280.015625 L 625.972656 280.015625 L 625.972656 321.046875 L 584.941406 321.046875 Z M 584.941406 280.015625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#abd876bc74)">
                  <g clip-path="url(#6c1f784d34)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 584.942255, 280.017517)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353036 -0.00252247 C 12.24366 -0.00252247 -0.00113222 12.247478 -0.00113222 27.351645 C -0.00113222 42.455813 12.24366 54.700605 27.353036 54.700605 C 42.457203 54.700605 54.701995 42.455813 54.701995 27.351645 C 54.701995 12.247478 42.457203 -0.00252247 27.353036 -0.00252247 Z M 27.353036 -0.00252247 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#325bd488ea)">
                  <path
                    fill="#ffffff"
                    d="M 555.632812 291.566406 L 569.941406 291.566406 L 569.941406 327.734375 L 555.632812 327.734375 Z M 555.632812 291.566406 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#4b74956bb7)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 555.631489, 291.565702)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00176511 0.000939054 L 19.074684 0.000939054 L 19.074684 48.204069 L 0.00176511 48.204069 Z M 0.00176511 0.000939054 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* subtitles (napisy) */}
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(84.094962, 98.99535)">
                    <g>
                      <path d="M 12.359375 -23.625 C 13.703125 -23.625 14.90625 -23.300781 15.96875 -22.65625 C 17.03125 -22.019531 17.867188 -21.160156 18.484375 -20.078125 C 19.097656 -19.003906 19.40625 -17.8125 19.40625 -16.5 C 19.40625 -15.1875 19.097656 -14.003906 18.484375 -12.953125 C 17.867188 -11.898438 17.03125 -11.070312 15.96875 -10.46875 C 14.90625 -9.863281 13.703125 -9.5625 12.359375 -9.5625 L 7.515625 -9.5625 L 7.515625 0 L 2.328125 0 L 2.328125 -23.625 Z M 11.53125 -13.859375 C 12.375 -13.859375 13.070312 -14.09375 13.625 -14.5625 C 14.175781 -15.039062 14.453125 -15.671875 14.453125 -16.453125 C 14.453125 -17.210938 14.175781 -17.835938 13.625 -18.328125 C 13.070312 -18.816406 12.375 -19.0625 11.53125 -19.0625 L 7.515625 -19.0625 L 7.515625 -13.859375 Z M 11.53125 -13.859375 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(286.86409, 98.99535)">
                    <g>
                      <path d="M 7.515625 -4.609375 L 15.359375 -4.609375 L 15.359375 0 L 2.328125 0 L 2.328125 -23.625 L 7.515625 -23.625 Z M 7.515625 -4.609375 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(152.698983, 587.736859)">
                    <g>
                      <path d="M 8.421875 -18.921875 C 10.859375 -18.921875 12.640625 -18.394531 13.765625 -17.34375 C 14.890625 -16.289062 15.453125 -14.847656 15.453125 -13.015625 C 15.453125 -12.191406 15.328125 -11.398438 15.078125 -10.640625 C 14.828125 -9.890625 14.414062 -9.21875 13.84375 -8.625 C 13.28125 -8.039062 12.53125 -7.578125 11.59375 -7.234375 C 10.65625 -6.898438 9.492188 -6.734375 8.109375 -6.734375 L 6.390625 -6.734375 L 6.390625 0 L 2.375 0 L 2.375 -18.921875 Z M 8.21875 -15.625 L 6.390625 -15.625 L 6.390625 -10.015625 L 7.71875 -10.015625 C 8.46875 -10.015625 9.117188 -10.113281 9.671875 -10.3125 C 10.222656 -10.507812 10.648438 -10.816406 10.953125 -11.234375 C 11.253906 -11.660156 11.40625 -12.207031 11.40625 -12.875 C 11.40625 -13.800781 11.144531 -14.488281 10.625 -14.9375 C 10.101562 -15.394531 9.300781 -15.625 8.21875 -15.625 Z M 8.21875 -15.625 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(169.336666, 587.736859)">
                    <g>
                      <path d="M 10.140625 -14.734375 C 10.335938 -14.734375 10.566406 -14.722656 10.828125 -14.703125 C 11.097656 -14.679688 11.316406 -14.65625 11.484375 -14.625 L 11.1875 -10.921875 C 11.050781 -10.960938 10.863281 -10.992188 10.625 -11.015625 C 10.394531 -11.035156 10.191406 -11.046875 10.015625 -11.046875 C 9.503906 -11.046875 9.007812 -10.976562 8.53125 -10.84375 C 8.050781 -10.71875 7.617188 -10.507812 7.234375 -10.21875 C 6.859375 -9.9375 6.5625 -9.5625 6.34375 -9.09375 C 6.125 -8.625 6.015625 -8.046875 6.015625 -7.359375 L 6.015625 0 L 2.078125 0 L 2.078125 -14.46875 L 5.0625 -14.46875 L 5.640625 -12.03125 L 5.828125 -12.03125 C 6.117188 -12.519531 6.476562 -12.96875 6.90625 -13.375 C 7.332031 -13.789062 7.816406 -14.117188 8.359375 -14.359375 C 8.910156 -14.609375 9.503906 -14.734375 10.140625 -14.734375 Z M 10.140625 -14.734375 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(181.368583, 587.736859)">
                    <g>
                      <path d="M 12.140625 0 L 0.71875 0 L 0.71875 -2.328125 L 7.421875 -11.453125 L 1.109375 -11.453125 L 1.109375 -14.46875 L 11.90625 -14.46875 L 11.90625 -11.90625 L 5.390625 -3.015625 L 12.140625 -3.015625 Z M 12.140625 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(194.293197, 587.736859)">
                    <g>
                      <path d="M 15.21875 -7.265625 C 15.21875 -6.054688 15.054688 -4.984375 14.734375 -4.046875 C 14.410156 -3.117188 13.9375 -2.332031 13.3125 -1.6875 C 12.695312 -1.039062 11.957031 -0.550781 11.09375 -0.21875 C 10.226562 0.101562 9.253906 0.265625 8.171875 0.265625 C 7.148438 0.265625 6.210938 0.101562 5.359375 -0.21875 C 4.515625 -0.550781 3.78125 -1.039062 3.15625 -1.6875 C 2.53125 -2.332031 2.046875 -3.117188 1.703125 -4.046875 C 1.359375 -4.984375 1.1875 -6.054688 1.1875 -7.265625 C 1.1875 -8.867188 1.472656 -10.222656 2.046875 -11.328125 C 2.617188 -12.441406 3.429688 -13.285156 4.484375 -13.859375 C 5.535156 -14.441406 6.789062 -14.734375 8.25 -14.734375 C 9.601562 -14.734375 10.800781 -14.441406 11.84375 -13.859375 C 12.894531 -13.285156 13.71875 -12.441406 14.3125 -11.328125 C 14.914062 -10.222656 15.21875 -8.867188 15.21875 -7.265625 Z M 5.21875 -7.265625 C 5.21875 -6.304688 5.316406 -5.503906 5.515625 -4.859375 C 5.722656 -4.210938 6.046875 -3.722656 6.484375 -3.390625 C 6.929688 -3.066406 7.507812 -2.90625 8.21875 -2.90625 C 8.914062 -2.90625 9.484375 -3.066406 9.921875 -3.390625 C 10.359375 -3.722656 10.675781 -4.210938 10.875 -4.859375 C 11.082031 -5.503906 11.1875 -6.304688 11.1875 -7.265625 C 11.1875 -8.222656 11.082031 -9.015625 10.875 -9.640625 C 10.675781 -10.273438 10.351562 -10.753906 9.90625 -11.078125 C 9.46875 -11.398438 8.894531 -11.5625 8.1875 -11.5625 C 7.144531 -11.5625 6.390625 -11.203125 5.921875 -10.484375 C 5.453125 -9.765625 5.21875 -8.691406 5.21875 -7.265625 Z M 13.3125 -20.296875 L 13.3125 -20.03125 C 13.0625 -19.789062 12.734375 -19.492188 12.328125 -19.140625 C 11.921875 -18.785156 11.484375 -18.414062 11.015625 -18.03125 C 10.546875 -17.644531 10.085938 -17.273438 9.640625 -16.921875 C 9.191406 -16.578125 8.800781 -16.289062 8.46875 -16.0625 L 5.84375 -16.0625 L 5.84375 -16.40625 C 6.125 -16.738281 6.453125 -17.128906 6.828125 -17.578125 C 7.203125 -18.023438 7.578125 -18.488281 7.953125 -18.96875 C 8.328125 -19.457031 8.640625 -19.898438 8.890625 -20.296875 Z M 13.3125 -20.296875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(210.698004, 587.736859)">
                    <g>
                      <path d="M 6.65625 0.265625 C 5.039062 0.265625 3.722656 -0.363281 2.703125 -1.625 C 1.691406 -2.894531 1.1875 -4.753906 1.1875 -7.203125 C 1.1875 -9.679688 1.695312 -11.554688 2.71875 -12.828125 C 3.75 -14.097656 5.09375 -14.734375 6.75 -14.734375 C 7.445312 -14.734375 8.054688 -14.640625 8.578125 -14.453125 C 9.109375 -14.265625 9.5625 -14.007812 9.9375 -13.6875 C 10.320312 -13.375 10.648438 -13.015625 10.921875 -12.609375 L 11.046875 -12.609375 C 10.992188 -12.890625 10.929688 -13.296875 10.859375 -13.828125 C 10.785156 -14.367188 10.75 -14.925781 10.75 -15.5 L 10.75 -20.140625 L 14.71875 -20.140625 L 14.71875 0 L 11.6875 0 L 10.921875 -1.875 L 10.75 -1.875 C 10.5 -1.476562 10.1875 -1.117188 9.8125 -0.796875 C 9.4375 -0.472656 8.988281 -0.210938 8.46875 -0.015625 C 7.957031 0.171875 7.351562 0.265625 6.65625 0.265625 Z M 8.03125 -2.890625 C 9.113281 -2.890625 9.875 -3.207031 10.3125 -3.84375 C 10.757812 -4.488281 11 -5.457031 11.03125 -6.75 L 11.03125 -7.1875 C 11.03125 -8.59375 10.8125 -9.664062 10.375 -10.40625 C 9.945312 -11.15625 9.144531 -11.53125 7.96875 -11.53125 C 7.09375 -11.53125 6.410156 -11.15625 5.921875 -10.40625 C 5.429688 -9.65625 5.1875 -8.570312 5.1875 -7.15625 C 5.1875 -5.738281 5.429688 -4.671875 5.921875 -3.953125 C 6.421875 -3.242188 7.125 -2.890625 8.03125 -2.890625 Z M 8.03125 -2.890625 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(543.532657, 587.736859)">
                    <g>
                      <path d="M 9.671875 0 L 5.671875 0 L 5.671875 -15.578125 L 0.53125 -15.578125 L 0.53125 -18.921875 L 14.8125 -18.921875 L 14.8125 -15.578125 L 9.671875 -15.578125 Z M 9.671875 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(558.876586, 587.736859)">
                    <g>
                      <path d="M 0 -14.46875 L 4.328125 -14.46875 L 7.046875 -6.328125 C 7.140625 -6.066406 7.210938 -5.800781 7.265625 -5.53125 C 7.328125 -5.269531 7.378906 -4.992188 7.421875 -4.703125 C 7.460938 -4.421875 7.5 -4.125 7.53125 -3.8125 L 7.609375 -3.8125 C 7.660156 -4.28125 7.726562 -4.71875 7.8125 -5.125 C 7.90625 -5.53125 8.023438 -5.929688 8.171875 -6.328125 L 10.84375 -14.46875 L 15.078125 -14.46875 L 8.953125 1.84375 C 8.578125 2.84375 8.09375 3.675781 7.5 4.34375 C 6.90625 5.019531 6.222656 5.523438 5.453125 5.859375 C 4.679688 6.191406 3.832031 6.359375 2.90625 6.359375 C 2.457031 6.359375 2.066406 6.332031 1.734375 6.28125 C 1.410156 6.238281 1.132812 6.191406 0.90625 6.140625 L 0.90625 3.015625 C 1.082031 3.054688 1.304688 3.09375 1.578125 3.125 C 1.859375 3.164062 2.148438 3.1875 2.453125 3.1875 C 3.003906 3.1875 3.476562 3.066406 3.875 2.828125 C 4.28125 2.597656 4.613281 2.285156 4.875 1.890625 C 5.144531 1.503906 5.359375 1.078125 5.515625 0.609375 L 5.75 -0.109375 Z M 0 -14.46875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(573.948832, 587.736859)">
                    <g>
                      <path d="M 2.078125 0 L 2.078125 -6.171875 L 1.140625 -5.609375 L -0.328125 -8.171875 L 2.078125 -9.609375 L 2.078125 -20.140625 L 6.015625 -20.140625 L 6.015625 -12.03125 L 6.921875 -12.59375 L 8.421875 -10.046875 L 6.015625 -8.59375 L 6.015625 0 Z M 2.078125 0 " />
                    </g>
                  </g>
                </g>
              </InjurySVG>

              {/* <InjurySVGFront>
                <g clip-path="url(#1e562fb9a3)">
                  <path
                    fill="#ffffff"
                    d="M 205.335938 76.703125 L 249.917969 76.703125 L 249.917969 125.640625 L 205.335938 125.640625 Z M 205.335938 76.703125 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#73d9e59082)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 205.335474, 76.705322)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.000618181 0.00227856 L 59.438121 0.00227856 L 59.438121 65.200198 L 0.000618181 65.200198 Z M 0.000618181 0.00227856 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#c45697694c)">
                  <g clip-path="url(#3f7defe887)">
                    <path
                      fill="#ffffff"
                      d="M 183.253906 2.957031 L 273.25 2.957031 L 273.25 92.953125 L 183.253906 92.953125 Z M 183.253906 2.957031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#7a6cdac304)">
                  <g clip-path="url(#426735efc3)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 183.254772, 2.956624)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.99364 0.000542859 C 26.858222 0.000542859 -0.00115381 26.859919 -0.00115381 59.990129 C -0.00115381 93.125547 26.858222 119.984923 59.99364 119.984923 C 93.12385 119.984923 119.983226 93.125547 119.983226 59.990129 C 119.983226 26.859919 93.12385 0.000542859 59.99364 0.000542859 Z M 59.99364 0.000542859 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#f81d8f8d78)">
                  <g clip-path="url(#cee6ae103d)">
                    <path
                      fill="#ffffff"
                      d="M 138.230469 144.257812 L 172.296875 155.046875 L 145.191406 240.613281 L 111.125 229.820312 Z M 138.230469 144.257812 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#bc88f4b200)">
                  <g clip-path="url(#cab3eccaeb)">
                    <path
                      fill="#ffffff"
                      d="M 281.125 154.507812 L 315.359375 144.253906 L 341.148438 230.371094 L 306.914062 240.625 Z M 281.125 154.507812 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#b7b617615b)">
                  <g clip-path="url(#cee1262431)">
                    <g clip-path="url(#7c0a434242)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 281.126736, 154.511658)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00224083 -0.00058678 L 47.640648 0.000377392 L 47.63984 119.828462 L 0.0019406 119.828992 Z M -0.00224083 -0.00058678 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#b4bea59032)">
                  <g clip-path="url(#d5d1d63a9e)">
                    <g clip-path="url(#8b1ad3e719)">
                      <path
                        fill="#ffffff"
                        d="M 196.179688 175.183594 L 256.523438 184.699219 L 200.3125 541.109375 L 139.96875 531.59375 Z M 196.179688 175.183594 "
                        fill-opacity="1"
                        fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#0d9886e8bc)">
                  <g clip-path="url(#fb31baaba6)">
                    <g clip-path="url(#327d6c18ba)">
                      <path
                        fill="#ffffff"
                        d="M 188.261719 179.117188 L 262.722656 190.863281 L 222.949219 443.042969 L 148.484375 431.296875 Z M 188.261719 179.117188 "
                        fill-opacity="1"
                        fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#bfce5fdb26)">
                  <g clip-path="url(#a5e191a53e)">
                    <g clip-path="url(#ee64183833)">
                      <path
                        fill="#ffffff"
                        d="M 197.503906 184.957031 L 257.808594 175.183594 L 315.546875 531.347656 L 255.242188 541.125 Z M 197.503906 184.957031 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#0265f13a84)">
                  <g clip-path="url(#c2bb83e1cf)">
                    <g clip-path="url(#72a2b67871)">
                      <g clip-path="url(#46a859642a)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 197.504524, 184.960075)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.727526 -0.0022666 L 81.451053 183.752405 L 65.895495 481.07391 L 15.55381 481.075261 L -0.0000177049 183.754636 Z M 40.727526 -0.0022666 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#f982b4314a)">
                  <g clip-path="url(#b1d8b4b6a4)">
                    <g clip-path="url(#41372f6f1c)">
                      <path
                        fill="#ffffff"
                        d="M 187.136719 164.605469 L 260.550781 152.707031 L 305.695312 431.164062 L 232.28125 443.066406 Z M 187.136719 164.605469 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#ab168b20f8)">
                  <g clip-path="url(#22fef1893d)">
                    <g clip-path="url(#372ca21f6e)">
                      <g clip-path="url(#69071e9d12)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 187.139054, 164.611727)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 49.578776 -0.00157455 L 99.156193 143.621514 L 80.220025 376.002639 L 18.935419 376.002828 L -0.00136082 143.61831 Z M 49.578776 -0.00157455 "
                          stroke="#000000"
                          stroke-width="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#e775bc95da)">
                  <g clip-path="url(#3ea1e1829f)">
                    <path
                      fill="#ffffff"
                      d="M 139.96875 121.671875 L 315.703125 121.671875 L 315.703125 293.382812 L 139.96875 293.382812 Z M 139.96875 121.671875 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3a0977f9f4)">
                  <g clip-path="url(#c3f17c9ff4)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 139.968143, 121.672875)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 58.526853 228.936177 L 175.58415 228.936177 L 234.110194 -0.00133308 L 0.000809263 -0.00133308 Z M 58.526853 228.936177 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#d50e808053)">
                  <g clip-path="url(#b3557ba3ab)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 140.231214, 121.675628)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.999009 234.130423 L 117.332344 264.130423 L 117.327138 0.000204855 L -0.000993989 0.000204855 Z M 59.999009 234.130423 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#65321abd1a)">
                  <path
                    fill="#ffffff"
                    d="M 225.109375 250.046875 L 282.722656 250.046875 L 282.722656 302.347656 L 225.109375 302.347656 Z M 225.109375 250.046875 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#6f46be1a8b)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 225.107832, 250.049921)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00205704 0.00114763 L 76.736435 0.00114763 L 76.736435 69.725109 L 0.00205704 69.725109 Z M 0.00205704 0.00114763 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#1b91f36697)">
                  <path
                    fill="#ffffff"
                    d="M 173.839844 250.046875 L 228.171875 250.046875 L 228.171875 302.933594 L 173.839844 302.933594 Z M 173.839844 250.046875 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#f1b50ce814)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 173.842493, 250.04711)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00167626 -0.000313508 L 72.538138 -0.000313508 L 72.538138 70.499689 L 0.00167626 70.499689 Z M 0.00167626 -0.000313508 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#10f8746748)">
                  <g clip-path="url(#226ea7b171)">
                    <path
                      fill="#ffffff"
                      d="M 193.097656 327.601562 L 261.796875 327.601562 L 261.796875 360.292969 L 193.097656 360.292969 Z M 193.097656 327.601562 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#2f97823a56)">
                  <g clip-path="url(#8965c22935)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 193.098654, 327.602965)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 45.779924 43.576259 L 91.555971 -0.0018703 L -0.00133085 -0.0018703 Z M 45.779924 43.576259 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#97d9544571)">
                  <path
                    fill="#ffffff"
                    d="M 192.378906 293.953125 L 260.988281 293.953125 L 260.988281 330.621094 L 192.378906 330.621094 Z M 192.378906 293.953125 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#5809de9efc)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 192.379797, 293.953219)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00118742 -0.000125944 L 91.545691 -0.000125944 L 91.545691 48.890501 L -0.00118742 48.890501 Z M -0.00118742 -0.000125944 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#ae06512fbe)">
                  <path
                    fill="#ffffff"
                    d="M 93.664062 527.953125 L 188.03125 527.953125 L 188.03125 561.09375 L 93.664062 561.09375 Z M 93.664062 527.953125 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#e1948c4e75)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 93.678198, 527.954301)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00198623 -0.00156863 L 125.72595 -0.00156863 L 125.72595 44.170308 L 0.00198623 44.170308 Z M 0.00198623 -0.00156863 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#cb28160f05)">
                  <path
                    fill="#ffffff"
                    d="M 267.285156 527.953125 L 363.855469 527.953125 L 363.855469 561.09375 L 267.285156 561.09375 Z M 267.285156 527.953125 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#5a083b5c86)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 267.29864, 527.954301)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00235336 -0.00156863 L 128.653902 -0.00156863 L 128.653902 44.170308 L -0.00235336 44.170308 Z M -0.00235336 -0.00156863 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#5d467140da)">
                  <g clip-path="url(#5f764673c5)">
                    <path
                      fill="#ffffff"
                      d="M 306.550781 239.410156 L 340.785156 229.160156 L 367.214844 317.417969 L 332.980469 327.667969 Z M 306.550781 239.410156 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3a5688c4cf)">
                  <g clip-path="url(#a710516475)">
                    <g clip-path="url(#1ab6838e23)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 306.55276, 239.412754)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00196146 0.0024089 L 47.63986 0.00187893 L 47.639486 122.733375 L 0.00158666 122.733905 Z M 0.00196146 0.0024089 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#583d14c1e7)">
                  <g clip-path="url(#4bab2d3edb)">
                    <path
                      fill="#ffffff"
                      d="M 332.730469 326.832031 L 366.964844 316.578125 L 380.378906 361.378906 L 346.144531 371.628906 Z M 332.730469 326.832031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#e43b4da8ff)">
                  <g clip-path="url(#2cf56cde3e)">
                    <g clip-path="url(#6271ff1211)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 332.730893, 326.832428)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000390251 -0.00066971 L 47.642498 0.000294462 L 47.64234 62.437112 L -0.000548654 62.436148 Z M -0.000390251 -0.00066971 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#87ffa61dec)">
                  <g clip-path="url(#fbe01f7a50)">
                    <path
                      fill="#ffffff"
                      d="M 111.332031 229.160156 L 145.398438 239.953125 L 117.621094 327.648438 L 83.554688 316.855469 Z M 111.332031 229.160156 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#f0eae10290)">
                  <g clip-path="url(#e6ca78c450)">
                    <path
                      fill="#ffffff"
                      d="M 83.640625 316.582031 L 117.707031 327.371094 L 103.671875 371.6875 L 69.605469 360.894531 Z M 83.640625 316.582031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#aa1e67aada)">
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
                </g>
                <g clip-path="url(#1661ae4465)">
                  <g clip-path="url(#9e9a7e81e1)">
                    <path
                      fill="#ffffff"
                      d="M 286.035156 117.980469 L 327.066406 117.980469 L 327.066406 159.011719 L 286.035156 159.011719 Z M 286.035156 117.980469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#cb32b3f294)">
                  <g clip-path="url(#037cd6b2cf)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 286.036658, 117.981658)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352165 -0.00158589 C 12.247998 -0.00158589 -0.00200289 12.243206 -0.00200289 27.352582 C -0.00200289 42.456749 12.247998 54.701541 27.352165 54.701541 C 42.456332 54.701541 54.701124 42.456749 54.701124 27.352582 C 54.701124 12.243206 42.456332 -0.00158589 27.352165 -0.00158589 Z M 27.352165 -0.00158589 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#20f2f65ae5)">
                  <g clip-path="url(#1f3759b20e)">
                    <path
                      fill="#ffffff"
                      d="M 285.167969 117.980469 L 326.195312 117.980469 L 326.195312 159.011719 L 285.167969 159.011719 Z M 285.167969 117.980469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#22fc12391b)">
                  <g clip-path="url(#fc7ee25f09)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 285.168065, 117.981658)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35404 -0.00158589 C 12.244664 -0.00158589 -0.000128144 12.243206 -0.000128144 27.352582 C -0.000128144 42.456749 12.244664 54.701541 27.35404 54.701541 C 42.458207 54.701541 54.702999 42.456749 54.702999 27.352582 C 54.702999 12.243206 42.458207 -0.00158589 27.35404 -0.00158589 Z M 27.35404 -0.00158589 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#437dd90f33)">
                  <g clip-path="url(#4e5dbe4eaf)">
                    <path
                      fill="#ffffff"
                      d="M 305.683594 213.890625 L 346.710938 213.890625 L 346.710938 254.921875 L 305.683594 254.921875 Z M 305.683594 213.890625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#9c2295aa5b)">
                  <g clip-path="url(#74eecc4750)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 305.682585, 213.891736)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350305 -0.0014809 C 12.246137 -0.0014809 0.00134529 12.243311 0.00134529 27.352687 C 0.00134529 42.456854 12.246137 54.701646 27.350305 54.701646 C 42.45968 54.701646 54.704473 42.456854 54.704473 27.352687 C 54.704473 12.243311 42.45968 -0.0014809 27.350305 -0.0014809 Z M 27.350305 -0.0014809 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#23e7b5d4ef)">
                  <g clip-path="url(#bbfd021e67)">
                    <path
                      fill="#ffffff"
                      d="M 332.730469 303.109375 L 373.757812 303.109375 L 373.757812 344.136719 L 332.730469 344.136719 Z M 332.730469 303.109375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#19504811c7)">
                  <g clip-path="url(#3d2dda54bd)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 332.73019, 303.109226)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349331 0.00019831 C 12.245164 0.00019831 0.000371629 12.24499 0.000371629 27.349158 C 0.000371629 42.458533 12.245164 54.703326 27.349331 54.703326 C 42.458707 54.703326 54.703499 42.458533 54.703499 27.349158 C 54.703499 12.24499 42.458707 0.00019831 27.349331 0.00019831 Z M 27.349331 0.00019831 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#750023de58)">
                  <g clip-path="url(#44c6c83096)">
                    <path
                      fill="#ffffff"
                      d="M 106.519531 213.890625 L 147.546875 213.890625 L 147.546875 254.921875 L 106.519531 254.921875 Z M 106.519531 213.890625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#0202d8ce53)">
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
                </g>
                <g clip-path="url(#ffdda970b3)">
                  <g clip-path="url(#10e5b7016d)">
                    <path
                      fill="#ffffff"
                      d="M 78.582031 302.917969 L 119.609375 302.917969 L 119.609375 343.949219 L 78.582031 343.949219 Z M 78.582031 302.917969 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#135f7ba77d)">
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
                </g>
                <g clip-path="url(#d5a4c652da)">
                  <g clip-path="url(#f0dd43d795)">
                    <path
                      fill="#ffffff"
                      d="M 131.304688 117.980469 L 172.335938 117.980469 L 172.335938 159.011719 L 131.304688 159.011719 Z M 131.304688 117.980469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3155fe1c50)">
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
                </g>
                <g clip-path="url(#1fc430e116)">
                  <g clip-path="url(#60b60bdb35)">
                    <path
                      fill="#ffffff"
                      d="M 167.472656 411.863281 L 208.503906 411.863281 L 208.503906 452.890625 L 167.472656 452.890625 Z M 167.472656 411.863281 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#db35a512f8)">
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
                </g>
                <g clip-path="url(#1db4fc5999)">
                  <g clip-path="url(#b1a4939643)">
                    <path
                      fill="#ffffff"
                      d="M 245.007812 411.863281 L 286.035156 411.863281 L 286.035156 452.890625 L 245.007812 452.890625 Z M 245.007812 411.863281 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#9746e649e2)">
                  <g clip-path="url(#bdc44df25e)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 245.007602, 411.862802)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.34924 0.00063843 C 12.245073 0.00063843 0.000280972 12.245431 0.000280972 27.349598 C 0.000280972 42.458974 12.245073 54.703766 27.34924 54.703766 C 42.458616 54.703766 54.703408 42.458974 54.703408 27.349598 C 54.703408 12.245431 42.458616 0.00063843 27.34924 0.00063843 Z M 27.34924 0.00063843 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#4abafcf1ab)">
                  <g clip-path="url(#1c684d1209)">
                    <path
                      fill="#ffffff"
                      d="M 265.523438 507.070312 L 306.550781 507.070312 L 306.550781 548.101562 L 265.523438 548.101562 Z M 265.523438 507.070312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#adb256c0fa)">
                  <g clip-path="url(#ee72f07410)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 265.522107, 507.07219)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350733 -0.00250382 C 12.246566 -0.00250382 0.00177361 12.247497 0.00177361 27.351664 C 0.00177361 42.455831 12.246566 54.700624 27.350733 54.700624 C 42.4549 54.700624 54.704901 42.455831 54.704901 27.351664 C 54.704901 12.247497 42.4549 -0.00250382 27.350733 -0.00250382 Z M 27.350733 -0.00250382 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#dfa9fe64ad)">
                  <g clip-path="url(#3aa5364e49)">
                    <path
                      fill="#ffffff"
                      d="M 148.730469 507.441406 L 189.757812 507.441406 L 189.757812 548.46875 L 148.730469 548.46875 Z M 148.730469 507.441406 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#50ae86f351)">
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
                </g>
                <g clip-path="url(#d752fd1893)">
                  <g clip-path="url(#f83b9f17a3)">
                    <path
                      fill="#ffffff"
                      d="M 164.578125 282.59375 L 205.609375 282.59375 L 205.609375 323.625 L 164.578125 323.625 Z M 164.578125 282.59375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#223d863659)">
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
                </g>
                <g clip-path="url(#f345faf5e1)">
                  <g clip-path="url(#faed0a7b98)">
                    <path
                      fill="#ffffff"
                      d="M 249.917969 282.40625 L 290.949219 282.40625 L 290.949219 323.433594 L 249.917969 323.433594 Z M 249.917969 282.40625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#eddb1595a3)">
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
                </g>
                <g clip-path="url(#fdd5a5b94f)">
                  <g clip-path="url(#1f88497d54)">
                    <path
                      fill="#ffffff"
                      d="M 208.503906 66.929688 L 247.316406 66.929688 L 247.316406 82.648438 L 208.503906 82.648438 Z M 208.503906 66.929688 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#9305f4b69b)">
                  <g clip-path="url(#7afc1ed4c0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 208.511432, 66.928383)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 37.333717 0.00173967 C 45.266009 0.00173967 51.698301 4.68924 51.698301 10.475698 C 51.698301 16.262157 45.266009 20.954866 37.333717 20.954866 L 14.364966 20.954866 C 6.432674 20.954866 0.000382162 16.262157 0.000382162 10.475698 C 0.000382162 4.68924 6.432674 0.00173967 14.364966 0.00173967 Z M 37.333717 0.00173967 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#b54ba73077)">
                  <g clip-path="url(#b7e620bd0b)">
                    <path
                      fill="#ffffff"
                      d="M 214.257812 33.519531 L 242.246094 33.519531 L 242.246094 62.382812 L 214.257812 62.382812 Z M 214.257812 33.519531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#cd6f0095b0)">
                  <g clip-path="url(#48dea9573d)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 214.258717, 33.52062)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 18.655044 -0.00145211 L 37.311294 38.482922 L -0.00120558 38.482922 Z M 18.655044 -0.00145211 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#43947fb556)">
                  <g clip-path="url(#ac39f0d133)">
                    <path
                      fill="#ffffff"
                      d="M 200.296875 26.539062 L 218.761719 26.539062 L 218.761719 45.003906 L 200.296875 45.003906 Z M 200.296875 26.539062 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#5369eaec91)">
                  <g clip-path="url(#4a354b5cd0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 200.298215, 26.540485)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.305506 -0.00189617 C 5.508631 -0.00189617 -0.00178651 5.508521 -0.00178651 12.305397 C -0.00178651 19.102273 5.508631 24.607481 12.305506 24.607481 C 19.102382 24.607481 24.607591 19.102273 24.607591 12.305397 C 24.607591 5.508521 19.102382 -0.00189617 12.305506 -0.00189617 Z M 12.305506 -0.00189617 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#8afa2e1fd1)">
                  <g clip-path="url(#d599276457)">
                    <path
                      fill="#ffffff"
                      d="M 238.0625 26.539062 L 256.523438 26.539062 L 256.523438 45.003906 L 238.0625 45.003906 Z M 238.0625 26.539062 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d84fc26f46)">
                  <g clip-path="url(#d3afa015b5)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 238.061913, 26.540485)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.302867 -0.00189617 C 5.5112 -0.00189617 0.00078231 5.508521 0.00078231 12.305397 C 0.00078231 19.102273 5.5112 24.607481 12.302867 24.607481 C 19.099743 24.607481 24.61016 19.102273 24.61016 12.305397 C 24.61016 5.508521 19.099743 -0.00189617 12.302867 -0.00189617 Z M 12.302867 -0.00189617 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(119.118094, 101.951953)">
                    <g>
                      <path d="M 12.359375 -23.625 C 13.703125 -23.625 14.90625 -23.300781 15.96875 -22.65625 C 17.03125 -22.019531 17.867188 -21.160156 18.484375 -20.078125 C 19.097656 -19.003906 19.40625 -17.8125 19.40625 -16.5 C 19.40625 -15.1875 19.097656 -14.003906 18.484375 -12.953125 C 17.867188 -11.898438 17.03125 -11.070312 15.96875 -10.46875 C 14.90625 -9.863281 13.703125 -9.5625 12.359375 -9.5625 L 7.515625 -9.5625 L 7.515625 0 L 2.328125 0 L 2.328125 -23.625 Z M 11.53125 -13.859375 C 12.375 -13.859375 13.070312 -14.09375 13.625 -14.5625 C 14.175781 -15.039062 14.453125 -15.671875 14.453125 -16.453125 C 14.453125 -17.210938 14.175781 -17.835938 13.625 -18.328125 C 13.070312 -18.816406 12.375 -19.0625 11.53125 -19.0625 L 7.515625 -19.0625 L 7.515625 -13.859375 Z M 11.53125 -13.859375 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(321.887214, 101.951953)">
                    <g>
                      <path d="M 7.515625 -4.609375 L 15.359375 -4.609375 L 15.359375 0 L 2.328125 0 L 2.328125 -23.625 L 7.515625 -23.625 Z M 7.515625 -4.609375 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(187.722093, 590.693443)">
                    <g>
                      <path d="M 8.421875 -18.921875 C 10.859375 -18.921875 12.640625 -18.394531 13.765625 -17.34375 C 14.890625 -16.289062 15.453125 -14.847656 15.453125 -13.015625 C 15.453125 -12.191406 15.328125 -11.398438 15.078125 -10.640625 C 14.828125 -9.890625 14.414062 -9.21875 13.84375 -8.625 C 13.28125 -8.039062 12.53125 -7.578125 11.59375 -7.234375 C 10.65625 -6.898438 9.492188 -6.734375 8.109375 -6.734375 L 6.390625 -6.734375 L 6.390625 0 L 2.375 0 L 2.375 -18.921875 Z M 8.21875 -15.625 L 6.390625 -15.625 L 6.390625 -10.015625 L 7.71875 -10.015625 C 8.46875 -10.015625 9.117188 -10.113281 9.671875 -10.3125 C 10.222656 -10.507812 10.648438 -10.816406 10.953125 -11.234375 C 11.253906 -11.660156 11.40625 -12.207031 11.40625 -12.875 C 11.40625 -13.800781 11.144531 -14.488281 10.625 -14.9375 C 10.101562 -15.394531 9.300781 -15.625 8.21875 -15.625 Z M 8.21875 -15.625 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(204.359776, 590.693443)">
                    <g>
                      <path d="M 10.140625 -14.734375 C 10.335938 -14.734375 10.566406 -14.722656 10.828125 -14.703125 C 11.097656 -14.679688 11.316406 -14.65625 11.484375 -14.625 L 11.1875 -10.921875 C 11.050781 -10.960938 10.863281 -10.992188 10.625 -11.015625 C 10.394531 -11.035156 10.191406 -11.046875 10.015625 -11.046875 C 9.503906 -11.046875 9.007812 -10.976562 8.53125 -10.84375 C 8.050781 -10.71875 7.617188 -10.507812 7.234375 -10.21875 C 6.859375 -9.9375 6.5625 -9.5625 6.34375 -9.09375 C 6.125 -8.625 6.015625 -8.046875 6.015625 -7.359375 L 6.015625 0 L 2.078125 0 L 2.078125 -14.46875 L 5.0625 -14.46875 L 5.640625 -12.03125 L 5.828125 -12.03125 C 6.117188 -12.519531 6.476562 -12.96875 6.90625 -13.375 C 7.332031 -13.789062 7.816406 -14.117188 8.359375 -14.359375 C 8.910156 -14.609375 9.503906 -14.734375 10.140625 -14.734375 Z M 10.140625 -14.734375 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(216.391693, 590.693443)">
                    <g>
                      <path d="M 12.140625 0 L 0.71875 0 L 0.71875 -2.328125 L 7.421875 -11.453125 L 1.109375 -11.453125 L 1.109375 -14.46875 L 11.90625 -14.46875 L 11.90625 -11.90625 L 5.390625 -3.015625 L 12.140625 -3.015625 Z M 12.140625 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(229.316307, 590.693443)">
                    <g>
                      <path d="M 15.21875 -7.265625 C 15.21875 -6.054688 15.054688 -4.984375 14.734375 -4.046875 C 14.410156 -3.117188 13.9375 -2.332031 13.3125 -1.6875 C 12.695312 -1.039062 11.957031 -0.550781 11.09375 -0.21875 C 10.226562 0.101562 9.253906 0.265625 8.171875 0.265625 C 7.148438 0.265625 6.210938 0.101562 5.359375 -0.21875 C 4.515625 -0.550781 3.78125 -1.039062 3.15625 -1.6875 C 2.53125 -2.332031 2.046875 -3.117188 1.703125 -4.046875 C 1.359375 -4.984375 1.1875 -6.054688 1.1875 -7.265625 C 1.1875 -8.867188 1.472656 -10.222656 2.046875 -11.328125 C 2.617188 -12.441406 3.429688 -13.285156 4.484375 -13.859375 C 5.535156 -14.441406 6.789062 -14.734375 8.25 -14.734375 C 9.601562 -14.734375 10.800781 -14.441406 11.84375 -13.859375 C 12.894531 -13.285156 13.71875 -12.441406 14.3125 -11.328125 C 14.914062 -10.222656 15.21875 -8.867188 15.21875 -7.265625 Z M 5.21875 -7.265625 C 5.21875 -6.304688 5.316406 -5.503906 5.515625 -4.859375 C 5.722656 -4.210938 6.046875 -3.722656 6.484375 -3.390625 C 6.929688 -3.066406 7.507812 -2.90625 8.21875 -2.90625 C 8.914062 -2.90625 9.484375 -3.066406 9.921875 -3.390625 C 10.359375 -3.722656 10.675781 -4.210938 10.875 -4.859375 C 11.082031 -5.503906 11.1875 -6.304688 11.1875 -7.265625 C 11.1875 -8.222656 11.082031 -9.015625 10.875 -9.640625 C 10.675781 -10.273438 10.351562 -10.753906 9.90625 -11.078125 C 9.46875 -11.398438 8.894531 -11.5625 8.1875 -11.5625 C 7.144531 -11.5625 6.390625 -11.203125 5.921875 -10.484375 C 5.453125 -9.765625 5.21875 -8.691406 5.21875 -7.265625 Z M 13.3125 -20.296875 L 13.3125 -20.03125 C 13.0625 -19.789062 12.734375 -19.492188 12.328125 -19.140625 C 11.921875 -18.785156 11.484375 -18.414062 11.015625 -18.03125 C 10.546875 -17.644531 10.085938 -17.273438 9.640625 -16.921875 C 9.191406 -16.578125 8.800781 -16.289062 8.46875 -16.0625 L 5.84375 -16.0625 L 5.84375 -16.40625 C 6.125 -16.738281 6.453125 -17.128906 6.828125 -17.578125 C 7.203125 -18.023438 7.578125 -18.488281 7.953125 -18.96875 C 8.328125 -19.457031 8.640625 -19.898438 8.890625 -20.296875 Z M 13.3125 -20.296875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(245.721114, 590.693443)">
                    <g>
                      <path d="M 6.65625 0.265625 C 5.039062 0.265625 3.722656 -0.363281 2.703125 -1.625 C 1.691406 -2.894531 1.1875 -4.753906 1.1875 -7.203125 C 1.1875 -9.679688 1.695312 -11.554688 2.71875 -12.828125 C 3.75 -14.097656 5.09375 -14.734375 6.75 -14.734375 C 7.445312 -14.734375 8.054688 -14.640625 8.578125 -14.453125 C 9.109375 -14.265625 9.5625 -14.007812 9.9375 -13.6875 C 10.320312 -13.375 10.648438 -13.015625 10.921875 -12.609375 L 11.046875 -12.609375 C 10.992188 -12.890625 10.929688 -13.296875 10.859375 -13.828125 C 10.785156 -14.367188 10.75 -14.925781 10.75 -15.5 L 10.75 -20.140625 L 14.71875 -20.140625 L 14.71875 0 L 11.6875 0 L 10.921875 -1.875 L 10.75 -1.875 C 10.5 -1.476562 10.1875 -1.117188 9.8125 -0.796875 C 9.4375 -0.472656 8.988281 -0.210938 8.46875 -0.015625 C 7.957031 0.171875 7.351562 0.265625 6.65625 0.265625 Z M 8.03125 -2.890625 C 9.113281 -2.890625 9.875 -3.207031 10.3125 -3.84375 C 10.757812 -4.488281 11 -5.457031 11.03125 -6.75 L 11.03125 -7.1875 C 11.03125 -8.59375 10.8125 -9.664062 10.375 -10.40625 C 9.945312 -11.15625 9.144531 -11.53125 7.96875 -11.53125 C 7.09375 -11.53125 6.410156 -11.15625 5.921875 -10.40625 C 5.429688 -9.65625 5.1875 -8.570312 5.1875 -7.15625 C 5.1875 -5.738281 5.429688 -4.671875 5.921875 -3.953125 C 6.421875 -3.242188 7.125 -2.890625 8.03125 -2.890625 Z M 8.03125 -2.890625 " />
                    </g>
                  </g>
                </g>
              </InjurySVGFront>

              <InjurySVGBack>
                <g clip-path="url(#5e74fc53b2)">
                  <path
                    fill="#ffffff"
                    d="M 205.609375 76.988281 L 249.917969 76.988281 L 249.917969 125.972656 L 205.609375 125.972656 Z M 205.609375 76.988281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#b2e2bd7ee8)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 205.608479, 76.989334)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00119513 -0.00140302 L 59.074111 -0.00140302 L 59.074111 65.201721 L 0.00119513 65.201721 Z M 0.00119513 -0.00140302 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#851bbb445d)">
                  <path
                    fill="#ffffff"
                    d="M 220.609375 76.988281 L 234.917969 76.988281 L 234.917969 125.90625 L 220.609375 125.90625 Z M 220.609375 76.988281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#1d204dfbb4)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 220.607832, 76.991729)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00205678 0.000611713 L 19.080181 0.000611713 L 19.080181 65.198527 L 0.00205678 65.198527 Z M 0.00205678 0.000611713 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#494a5d8c5a)">
                  <g clip-path="url(#09b09af80e)">
                    <path
                      fill="#ffffff"
                      d="M 183.253906 3.242188 L 273.25 3.242188 L 273.25 93.238281 L 183.253906 93.238281 Z M 183.253906 3.242188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#935d0cb807)">
                  <g clip-path="url(#4054e35d90)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 183.254772, 3.241426)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.99364 0.00101518 C 26.858222 0.00101518 -0.00115381 26.860391 -0.00115381 59.990601 C -0.00115381 93.126019 26.858222 119.985395 59.99364 119.985395 C 93.12385 119.985395 119.983226 93.126019 119.983226 59.990601 C 119.983226 26.860391 93.12385 0.00101518 59.99364 0.00101518 Z M 59.99364 0.00101518 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#10d306f873)">
                  <g clip-path="url(#5728b62d3f)">
                    <path
                      fill="#ffffff"
                      d="M 138.230469 144.542969 L 172.296875 155.332031 L 145.191406 240.898438 L 111.125 230.105469 Z M 138.230469 144.542969 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#26998d900c)">
                  <g clip-path="url(#6a7e672019)">
                    <path
                      fill="#ffffff"
                      d="M 281.125 154.792969 L 315.359375 144.539062 L 341.148438 230.65625 L 306.914062 240.910156 Z M 281.125 154.792969 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#56b1f142c0)">
                  <g clip-path="url(#9ba8a0c169)">
                    <g clip-path="url(#1de166b800)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 281.126736, 154.796497)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.0023621 -0.000181799 L 47.640526 0.000782372 L 47.639718 119.828867 L 0.00181932 119.829397 Z M -0.0023621 -0.000181799 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#0a0bc0dae3)">
                  <g clip-path="url(#edfd278c91)">
                    <g clip-path="url(#f5a72c6769)">
                      <path
                        fill="#ffffff"
                        d="M 196.179688 175.46875 L 256.523438 184.984375 L 200.3125 541.394531 L 139.96875 531.878906 Z M 196.179688 175.46875 "
                        fill-opacity="1"
                        fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#76a51c9feb)">
                  <g clip-path="url(#698e556de3)">
                    <g clip-path="url(#c7951c1fc4)">
                      <path
                        fill="#ffffff"
                        d="M 186.460938 184.046875 L 262.085938 195.972656 L 223.183594 442.632812 L 147.558594 430.707031 Z M 186.460938 184.046875 "
                        fill-opacity="1"
                        fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#447ee3fa41)">
                  <g clip-path="url(#9ade081514)">
                    <g clip-path="url(#dfc9a83958)">
                      <path
                        fill="#ffffff"
                        d="M 197.503906 185.242188 L 257.808594 175.46875 L 315.546875 531.632812 L 255.242188 541.410156 Z M 197.503906 185.242188 "
                        fill-opacity="1"
                        fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#51075e62ce)">
                  <g clip-path="url(#83d1956872)">
                    <g clip-path="url(#555f2fbd99)">
                      <path
                        fill="#ffffff"
                        d="M 189.757812 182.222656 L 264.449219 170.113281 L 306.542969 429.773438 L 231.855469 441.882812 Z M 189.757812 182.222656 "
                        fill-opacity="1"
                        fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#f0f1abc63e)">
                  <g clip-path="url(#ff8a3b6101)">
                    <path
                      fill="#ffffff"
                      d="M 139.96875 121.957031 L 315.34375 121.957031 L 315.34375 288.238281 L 139.96875 288.238281 Z M 139.96875 121.957031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#bab8bc4a86)">
                  <g clip-path="url(#6ece57af0f)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 139.968143, 121.959032)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 58.526853 221.700467 L 175.58415 221.700467 L 234.110194 0.0025412 L 0.000809263 0.0025412 Z M 58.526853 221.700467 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#c271ff90dd)">
                  <g clip-path="url(#7b38ee4782)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 140.231214, 121.960474)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.999009 234.130836 L 114.332344 234.130836 L 174.327138 0.000618005 L -0.000993989 0.000618005 Z M 59.999009 234.130836 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#6c659188b6)">
                  <path
                    fill="#ffffff"
                    d="M 221.097656 121.957031 L 235.40625 121.957031 L 235.40625 254.617188 L 221.097656 254.617188 Z M 221.097656 121.957031 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#ec8c710352)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 221.096796, 121.964276)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00114648 0.000757538 L 19.079271 0.000757538 L 19.079271 176.870545 L 0.00114648 176.870545 Z M 0.00114648 0.000757538 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#77e495c9b3)">
                  <path
                    fill="#ffffff"
                    d="M 172.296875 247.085938 L 281.191406 247.085938 L 281.191406 299.386719 L 172.296875 299.386719 Z M 172.296875 247.085938 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#c12b12bd72)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 172.297272, 247.086749)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.000529432 -0.00108154 L 145.093227 -0.00108154 L 145.093227 69.733296 L -0.000529432 69.733296 Z M -0.000529432 -0.00108154 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#f15559cdbb)">
                  <path
                    fill="#ffffff"
                    d="M 220.609375 247.085938 L 234.917969 247.085938 L 234.917969 299.410156 L 220.609375 299.410156 Z M 220.609375 247.085938 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#4016b10a4c)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 220.607832, 247.089823)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00205678 0.00002759 L 19.080181 0.00002759 L 19.080181 69.723984 L 0.00205678 69.723984 Z M 0.00205678 0.00002759 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#f9bb4a4620)">
                  <g clip-path="url(#36c1f413dc)">
                    <path
                      fill="#ffffff"
                      d="M 193.097656 327.886719 L 261.796875 327.886719 L 261.796875 360.578125 L 193.097656 360.578125 Z M 193.097656 327.886719 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#135a717519)">
                  <g clip-path="url(#a5b20dc211)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 193.098654, 327.887819)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 45.779924 43.576663 L 91.555971 -0.00146675 L -0.00133085 -0.00146675 Z M 45.779924 43.576663 "
                      stroke="#000000"
                      stroke-width="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#5c52b86c1e)">
                  <path
                    fill="#ffffff"
                    d="M 192.378906 294.238281 L 260.988281 294.238281 L 260.988281 330.90625 L 192.378906 330.90625 Z M 192.378906 294.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#7a17289b17)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 192.379797, 294.238044)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00118742 0.000316006 L 91.545691 0.000316006 L 91.545691 48.890943 L -0.00118742 48.890943 Z M -0.00118742 0.000316006 "
                    stroke="#000000"
                    stroke-width="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#f7a0fc9af1)">
                  <path
                    fill="#ffffff"
                    d="M 93.664062 528.238281 L 188.03125 528.238281 L 188.03125 561.378906 L 93.664062 561.378906 Z M 93.664062 528.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#5866057bd1)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 93.678198, 528.239181)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00198623 -0.00120028 L 125.72595 -0.00120028 L 125.72595 44.170677 L 0.00198623 44.170677 Z M 0.00198623 -0.00120028 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#06cf20b9d4)">
                  <path
                    fill="#ffffff"
                    d="M 267.285156 528.238281 L 363.855469 528.238281 L 363.855469 561.378906 L 267.285156 561.378906 Z M 267.285156 528.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#4c29621883)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 267.29864, 528.239181)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00235336 -0.00120028 L 128.653902 -0.00120028 L 128.653902 44.170677 L -0.00235336 44.170677 Z M -0.00235336 -0.00120028 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g clip-path="url(#97c7b4a275)">
                  <g clip-path="url(#294e39d4d7)">
                    <path
                      fill="#ffffff"
                      d="M 306.550781 239.695312 L 340.785156 229.445312 L 367.214844 317.703125 L 332.980469 327.953125 Z M 306.550781 239.695312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#7cc9823bf5)">
                  <g clip-path="url(#f3b1a39fc2)">
                    <g clip-path="url(#122c394188)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 306.55276, 239.697564)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00182917 0.00285067 L 47.639728 0.00232069 L 47.640848 122.728827 L 0.00145437 122.734346 Z M 0.00182917 0.00285067 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#74911651fa)">
                  <g clip-path="url(#641023325e)">
                    <path
                      fill="#ffffff"
                      d="M 332.730469 327.117188 L 366.964844 316.863281 L 380.378906 361.660156 L 346.144531 371.914062 Z M 332.730469 327.117188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#a7f231b83e)">
                  <g clip-path="url(#3fbb80189d)">
                    <g clip-path="url(#855953f784)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 332.730893, 327.117311)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000495003 -0.000319908 L 47.642393 0.000644263 L 47.642235 62.437462 L -0.000653407 62.436497 Z M -0.000495003 -0.000319908 "
                        stroke="#000000"
                        stroke-width="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#30139dddae)">
                  <g clip-path="url(#e4c97590b1)">
                    <path
                      fill="#ffffff"
                      d="M 111.332031 229.445312 L 145.398438 240.238281 L 117.621094 327.933594 L 83.554688 317.140625 Z M 111.332031 229.445312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#b223723ab8)">
                  <g clip-path="url(#b91d05acdf)">
                    <path
                      fill="#ffffff"
                      d="M 83.640625 316.867188 L 117.707031 327.65625 L 103.671875 371.972656 L 69.605469 361.179688 Z M 83.640625 316.867188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#388bef3ef7)">
                  <g clip-path="url(#8cd2845ba3)">
                    <path
                      fill="#ffffff"
                      d="M 285.167969 118.265625 L 326.195312 118.265625 L 326.195312 159.296875 L 285.167969 159.296875 Z M 285.167969 118.265625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#91dd502a57)">
                  <g clip-path="url(#8dd8c0ac68)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 285.168065, 118.266519)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.35404 -0.00119194 C 12.244664 -0.00119194 -0.000128144 12.2436 -0.000128144 27.352976 C -0.000128144 42.457143 12.244664 54.701935 27.35404 54.701935 C 42.458207 54.701935 54.702999 42.457143 54.702999 27.352976 C 54.702999 12.2436 42.458207 -0.00119194 27.35404 -0.00119194 Z M 27.35404 -0.00119194 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#27117a3d4a)">
                  <g clip-path="url(#aa061cfd76)">
                    <path
                      fill="#ffffff"
                      d="M 305.683594 214.175781 L 346.710938 214.175781 L 346.710938 255.207031 L 305.683594 255.207031 Z M 305.683594 214.175781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#7d86241536)">
                  <g clip-path="url(#e9979fe9b1)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 305.682585, 214.176572)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350305 -0.00105495 C 12.246137 -0.00105495 0.00134529 12.243737 0.00134529 27.353113 C 0.00134529 42.45728 12.246137 54.702072 27.350305 54.702072 C 42.45968 54.702072 54.704473 42.45728 54.704473 27.353113 C 54.704473 12.243737 42.45968 -0.00105495 27.350305 -0.00105495 Z M 27.350305 -0.00105495 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#f5c6c7023f)">
                  <g clip-path="url(#888443916d)">
                    <path
                      fill="#ffffff"
                      d="M 332.730469 303.394531 L 373.757812 303.394531 L 373.757812 344.421875 L 332.730469 344.421875 Z M 332.730469 303.394531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d7817d85ce)">
                  <g clip-path="url(#2941552574)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 332.73019, 303.394051)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349331 0.00064026 C 12.245164 0.00064026 0.000371629 12.245432 0.000371629 27.3496 C 0.000371629 42.458975 12.245164 54.703768 27.349331 54.703768 C 42.458707 54.703768 54.703499 42.458975 54.703499 27.3496 C 54.703499 12.245432 42.458707 0.00064026 27.349331 0.00064026 Z M 27.349331 0.00064026 "
                      stroke="#000000"
                      stroke-width="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                <g clip-path="url(#7339cfd3ad)">
                  <g clip-path="url(#0ecdaee281)">
                    <path
                      fill="#ffffff"
                      d="M 106.519531 214.175781 L 147.546875 214.175781 L 147.546875 255.207031 L 106.519531 255.207031 Z M 106.519531 214.175781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#be197c3a24)">
                  <g clip-path="url(#c33a62af27)">
                    <path
                      fill="#ffffff"
                      d="M 78.582031 303.203125 L 119.609375 303.203125 L 119.609375 344.234375 L 78.582031 344.234375 Z M 78.582031 303.203125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#71595b8b9a)">
                  <g clip-path="url(#27559423f0)">
                    <path
                      fill="#ffffff"
                      d="M 131.304688 118.265625 L 172.335938 118.265625 L 172.335938 159.296875 L 131.304688 159.296875 Z M 131.304688 118.265625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
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
                </g>
                <g clip-path="url(#44b692b698)">
                  <g clip-path="url(#925c9bc6cf)">
                    <path
                      fill="#ffffff"
                      d="M 164.578125 411.578125 L 205.609375 411.578125 L 205.609375 452.605469 L 164.578125 452.605469 Z M 164.578125 411.578125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#97056328c5)">
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
                </g>
                <g clip-path="url(#e8dd380571)">
                  <g clip-path="url(#d8af1225f3)">
                    <path
                      fill="#ffffff"
                      d="M 249.917969 411.578125 L 290.949219 411.578125 L 290.949219 452.605469 L 249.917969 452.605469 Z M 249.917969 411.578125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#c218c84113)">
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
                </g>
                <g clip-path="url(#0377a71c2f)">
                  <g clip-path="url(#a2a1287d2b)">
                    <path
                      fill="#ffffff"
                      d="M 265.523438 507.355469 L 306.550781 507.355469 L 306.550781 548.386719 L 265.523438 548.386719 Z M 265.523438 507.355469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#e368d0a606)">
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
                </g>
                <g clip-path="url(#dd0a3258dc)">
                  <g clip-path="url(#3190e81780)">
                    <path
                      fill="#ffffff"
                      d="M 148.730469 507.722656 L 189.757812 507.722656 L 189.757812 548.753906 L 148.730469 548.753906 Z M 148.730469 507.722656 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#cd884d3bcc)">
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
                </g>
                <g clip-path="url(#7eeba5b1f1)">
                  <g clip-path="url(#30c62ea764)">
                    <path
                      fill="#ffffff"
                      d="M 164.578125 282.878906 L 205.609375 282.878906 L 205.609375 323.910156 L 164.578125 323.910156 Z M 164.578125 282.878906 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#b40c05f885)">
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
                </g>
                <g clip-path="url(#bf8035cfd6)">
                  <g clip-path="url(#754b55623e)">
                    <path
                      fill="#ffffff"
                      d="M 249.917969 282.6875 L 290.949219 282.6875 L 290.949219 323.71875 L 249.917969 323.71875 Z M 249.917969 282.6875 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3c80588bc6)">
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
                </g>
                <g clip-path="url(#05f8fb2feb)">
                  <path
                    fill="#ffffff"
                    d="M 220.609375 294.238281 L 234.917969 294.238281 L 234.917969 330.40625 L 220.609375 330.40625 Z M 220.609375 294.238281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#2736968074)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 220.608375, 294.237487)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00133358 0.00105841 L 19.074252 0.00105841 L 19.074252 48.204189 L 0.00133358 48.204189 Z M 0.00133358 0.00105841 "
                    stroke="#000000"
                    stroke-width="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(208.509587, 590.408539)">
                    <g>
                      <path d="M 9.671875 0 L 5.671875 0 L 5.671875 -15.578125 L 0.53125 -15.578125 L 0.53125 -18.921875 L 14.8125 -18.921875 L 14.8125 -15.578125 L 9.671875 -15.578125 Z M 9.671875 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(223.853515, 590.408539)">
                    <g>
                      <path d="M 0 -14.46875 L 4.328125 -14.46875 L 7.046875 -6.328125 C 7.140625 -6.066406 7.210938 -5.800781 7.265625 -5.53125 C 7.328125 -5.269531 7.378906 -4.992188 7.421875 -4.703125 C 7.460938 -4.421875 7.5 -4.125 7.53125 -3.8125 L 7.609375 -3.8125 C 7.660156 -4.28125 7.726562 -4.71875 7.8125 -5.125 C 7.90625 -5.53125 8.023438 -5.929688 8.171875 -6.328125 L 10.84375 -14.46875 L 15.078125 -14.46875 L 8.953125 1.84375 C 8.578125 2.84375 8.09375 3.675781 7.5 4.34375 C 6.90625 5.019531 6.222656 5.523438 5.453125 5.859375 C 4.679688 6.191406 3.832031 6.359375 2.90625 6.359375 C 2.457031 6.359375 2.066406 6.332031 1.734375 6.28125 C 1.410156 6.238281 1.132812 6.191406 0.90625 6.140625 L 0.90625 3.015625 C 1.082031 3.054688 1.304688 3.09375 1.578125 3.125 C 1.859375 3.164062 2.148438 3.1875 2.453125 3.1875 C 3.003906 3.1875 3.476562 3.066406 3.875 2.828125 C 4.28125 2.597656 4.613281 2.285156 4.875 1.890625 C 5.144531 1.503906 5.359375 1.078125 5.515625 0.609375 L 5.75 -0.109375 Z M 0 -14.46875 " />
                    </g>
                  </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(238.925761, 590.408539)">
                    <g>
                      <path d="M 2.078125 0 L 2.078125 -6.171875 L 1.140625 -5.609375 L -0.328125 -8.171875 L 2.078125 -9.609375 L 2.078125 -20.140625 L 6.015625 -20.140625 L 6.015625 -12.03125 L 6.921875 -12.59375 L 8.421875 -10.046875 L 6.015625 -8.59375 L 6.015625 0 Z M 2.078125 0 " />
                    </g>
                  </g>
                </g>
              </InjurySVGBack> */}
            </div>
            {currentActiveElement && (
              <div className={Style.btnPanel}>
                {currentActiveElement}
                <ul>
                  <li className={Style.wrapCheck}>
                    <Field
                      className={Style.check}
                      name="skinAppearance.pale"
                      type="checkbox"
                    />
                    <p>brak obrażeń</p>
                  </li>
                  <li>
                    <button
                      onClick={() => onRanaButtonClick('O')}
                      type="button"
                    >
                      O - złamanie otwarte
                    </button>
                  </li>
                  <li>
                    <button>Z - złamanie zamknięte</button>
                  </li>
                  <li>
                    <button>W - zwichnięcie </button>
                  </li>
                  <li>
                    <button>S - stłuczenie </button>
                  </li>
                  <li>
                    <button>R - rana </button>
                  </li>
                  <li>
                    <button>K - krwotok z rany </button>
                  </li>
                  <li>
                    <button>M - zmiażdżenie </button>
                  </li>
                  <li>
                    <button>A - amputacja </button>
                  </li>
                  <li>
                    <button>N - ból nieurazowy </button>
                  </li>
                  <li>
                    <button>P - oparzenie </button>
                  </li>
                </ul>
                <div> oparzenie</div>
              </div>
            )}
            <FormNavigation onSaveForm={submitForm} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default InjuryAssessment;
