import { useAppContext } from '../../../context/AppContext';
import Style from './AssessHealthCondition.module.scss';
import { Formik, Field } from 'formik';

const AssessHealthCondition = () => {
  const appContext = useAppContext();

  const glasgow = () => {
    return (
      <>
        <div className={Style.wrapGlasgow}>
          <h2>GLASGOW-COMA-SCALE</h2>

          <ul>
            <p>OTWIERANIE OCZU</p>
            <li className={Style.wrapCheck}>
              <label>spontaniczne</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="4"
              />

              {/* <span>1</span> */}
            </li>
            <li className={Style.wrapCheck}>
              {/* <p>{appContext.assessHealthCondition.openingEyes}</p> */}
              <label>na głos </label>

              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="3"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>na ból</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="2"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>brak</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="1"
              />
            </li>
          </ul>
          <ul>
            <p>REAKCJA SŁOWNA</p>
            <li className={Style.wrapCheck}>
              <label>zorientowany</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="5"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>splątany</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="4"
              />

              {/* <span>1</span> */}
            </li>
            <li className={Style.wrapCheck}>
              {/* <p>{appContext.assessHealthCondition.openingEyes}</p> */}
              <label>niewłaściwe słowa</label>

              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="3"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>niezrozumiałe dźwięki</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="2"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>brak</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="1"
              />
            </li>
          </ul>
          <ul>
            <p>REAKCJA RUCHOWA</p>
            <li className={Style.wrapCheck}>
              <label>wykonuje polecenia</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="6"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>lokalizuje ból</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="5"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>ucieka od bólu</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="4"
              />

              {/* <span>1</span> */}
            </li>
            <li className={Style.wrapCheck}>
              {/* <p>{appContext.assessHealthCondition.openingEyes}</p> */}
              <label>zgięciowa </label>

              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="3"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>wyprost </label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="2"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>brak</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="1"
              />
            </li>
          </ul>
          <div className={`${Style.wrapCheck} ${Style.wrapSum}`}>
            <p>SUMA:</p>
            <p className={Style.sumCheck}>12</p>
          </div>
        </div>
      </>
    );
  };
  const rts = () => {
    return (
      <>
        <div className={Style.wrapGlasgow}>
          <h2>RTS</h2>

          <ul>
            <p>CZ. ODDECHÓW</p>
            <li className={Style.wrapCheck}>
              <label>10-29</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="4"
              />

              {/* <span>1</span> */}
            </li>
            <li className={Style.wrapCheck}>
              {/* <p>{appContext.assessHealthCondition.openingEyes}</p> */}
              <label> &gt; 29 </label>

              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="3"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>6 - 9</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="2"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>1 - 5</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="1"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>brak</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="0"
              />
            </li>
          </ul>
          <ul>
            <p>CIŚNIENIE SKURCZOWE</p>
            <li className={Style.wrapCheck}>
              <label> &gt; 89</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="4"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>76 - 89</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="3"
              />

              {/* <span>1</span> */}
            </li>
            <li className={Style.wrapCheck}>
              {/* <p>{appContext.assessHealthCondition.openingEyes}</p> */}
              <label>50 - 75</label>

              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="2"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>1 - 49</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="1"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>brak</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="0"
              />
            </li>
          </ul>
          <ul>
            <p>GLASGOW-COMA-SCALE</p>
            <li className={Style.wrapCheck}>
              <label>13 - 15</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="4"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>9 - 12</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="3"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>6 - 8</label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="2"
              />

              {/* <span>1</span> */}
            </li>
            <li className={Style.wrapCheck}>
              {/* <p>{appContext.assessHealthCondition.openingEyes}</p> */}
              <label>4 - 5</label>

              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="1"
              />
            </li>
            <li className={Style.wrapCheck}>
              <label>3 </label>
              <Field
                className={Style.check}
                name="gender"
                type="button"
                value="0"
              />
            </li>
          </ul>
          <div className={`${Style.wrapCheck} ${Style.wrapSum}`}>
            <p>SUMA:</p>
            <p className={Style.sumCheck}>12</p>
          </div>
        </div>
      </>
    );
  };
  const breath = () => {
    return (
      <>
        <div className={Style.wrapGlasgow}>
          <h2>UKŁAD ODDECHOWY</h2>
          <ul>
            <li className={`${Style.wrapCheck} ${Style.wrapBreathingRate}`}>
              <label>częśtość oddechów</label>
              <Field
                className={Style.breathingRate}
                name="gender"
                // type="number"
                // type="button"
                // value="4"
              />
              <p> /min</p>

              {/* <span>1</span> */}
            </li>
            <li className={Style.wrapCheck}>
              <label>duszność</label>
              <div>
                <Field
                  className={Style.check}
                  name="gender"
                  type="button"
                  value="T"
                />
                <Field
                  className={Style.check}
                  name="gender"
                  type="button"
                  value="N"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>siinica</label>
              <div>
                <Field
                  className={Style.check}
                  name="gender"
                  type="button"
                  value="T"
                />
                <Field
                  className={Style.check}
                  name="gender"
                  type="button"
                  value="N"
                />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>bezdech</label>
              <div>
                <Field
                  className={Style.check}
                  name="gender"
                  type="button"
                  value="T"
                />
                <Field
                  className={Style.check}
                  name="gender"
                  type="button"
                  value="N"
                />
              </div>
            </li>
          </ul>
          <ul>
            <div className={Style.wrapLungSide}>
              <p className={Style.lungSide}>L</p>
              <p className={Style.lungSide}>P</p>
            </div>
            <li className={Style.wrapCheck}>
              <label>szmer prawidłowy</label>
              <div>
                <Field className={Style.check} name="gender" type="button" />
                <Field className={Style.check} name="gender" type="button" />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>furczenie</label>
              <div>
                <Field className={Style.check} name="gender" type="button" />
                <Field className={Style.check} name="gender" type="button" />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>świsty</label>
              <div>
                <Field className={Style.check} name="gender" type="button" />
                <Field className={Style.check} name="gender" type="button" />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>trzeszczenie</label>
              <div>
                <Field className={Style.check} name="gender" type="button" />
                <Field className={Style.check} name="gender" type="button" />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>rzężenie</label>
              <div>
                <Field className={Style.check} name="gender" type="button" />
                <Field className={Style.check} name="gender" type="button" />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>brak szmeru</label>
              <div>
                <Field className={Style.check} name="gender" type="button" />
                <Field className={Style.check} name="gender" type="button" />
              </div>
            </li>
            <li className={Style.wrapCheck}>
              <label>inne:</label>
              <div>
                <Field className={Style.check} name="gender" type="button" />
                <Field className={Style.check} name="gender" type="button" />
              </div>
              <Field
                className={Style.breathDifferent}
                name="gender"
                type="text"
              />
            </li>
          </ul>
          <div className={`${Style.wrapCheck} ${Style.wrapSum}`}>
            <p>Saturacja:</p>
            <p className={Style.sumCheck}>12xxxxxxxxxxxxxxxx</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <Formik
      initialValues={appContext.assessHealthCondition}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setAssessHealthCondition(values);
      }}
    >
      <>
        {glasgow()}
        {rts()}
        {breath()}
      </>
    </Formik>
  );
};

export default AssessHealthCondition;
