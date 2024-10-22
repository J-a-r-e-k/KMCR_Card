//
import Style from './AppliedDrugs.module.scss';
import { Formik, Field, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { nameDrug, unit, unitOfMeasure } from './ButtonList';

interface MedicineItem {
  nameDrug: string;
  quantity: number;
  unitOfMeasure: string;
  unit: string;
}

const AddMedicine = () => {
  const appContext = useAppContext();
  const [btnNameDrug, setBtnNameDrug] = useState('');

  const Select = ({
    setFieldValue,
  }: {
    setFieldValue: FormikHelpers<MedicineItem>['setFieldValue'];
  }) => {
    const styleName = btnNameDrug + 'Select';

    interface SelectOption {
      name: string;
    }

    const arraySelect = (): SelectOption[] | undefined => {
      switch (btnNameDrug) {
        case 'nameDrug':
          return nameDrug;
        case 'unitOfMeasure':
          return unitOfMeasure;
        case 'unit':
          return unit;
      }
    };

    const selectionList = arraySelect()?.map((e, index) => {
      return (
        <li key={index}>
          <button
            type="button"
            className={Style.btnSelect}
            onClick={() => {
              setFieldValue(`${btnNameDrug}`, `${e.name}`);
              setBtnNameDrug('');
            }}
          >
            {e.name}
          </button>
        </li>
      );
    });

    return (
      <>
        <ul className={`${Style.select} ${Style[styleName]}`}>
          {selectionList}
        </ul>
        <div
          className={Style.wrapSelect}
          onClick={() => setBtnNameDrug('')}
        ></div>
      </>
    );
  };

  const addDrugToList = (item: MedicineItem) => {
    if (!item.nameDrug || !item.quantity || !item.unitOfMeasure || !item.unit)
      return alert('Wypełnij wszystkie pola');

    const newDrug = {
      lb: appContext.appliedDrugs.medicaments.length + 1,
      nameDrug: item.nameDrug,
      quantity: item.quantity,
      unitOfMeasure: item.unitOfMeasure,
      unit: item.unit,
    };

    appContext.setAppliedDrugs({
      ...appContext.appliedDrugs,
      medicaments: [...appContext.appliedDrugs.medicaments, newDrug],
    });
  };
  return (
    <Formik
      initialValues={{
        nameDrug: '',
        quantity: NaN,
        unitOfMeasure: '',
        unit: '',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        addDrugToList(values);
        resetForm();
      }}
    >
      {({ handleSubmit, submitForm, setFieldValue }) => (
        <form className={Style.wrapFormDrugs} onSubmit={handleSubmit}>
          <button
            className={`${Style.btn} ${Style.btnNoDrugs} ${
              appContext.appliedDrugs.noDrugs ? Style.btnNoDrugsActive : ''
            } `}
            type="button"
            onClick={() => {
              appContext.setAppliedDrugs({
                ...appContext.appliedDrugs,
                noDrugs: !appContext.appliedDrugs.noDrugs,
                medicaments: [],
              });
            }}
          >
            Nie podano leków
          </button>

          <ul className={`${Style.wrapMedicine} `}>
            {appContext.appliedDrugs.noDrugs ? (
              <div className={Style.notActive}></div>
            ) : undefined}
            <li className={Style.wrapNameDrugs}>
              <label className={Style.description}>Nazwa leku</label>
              <Field
                className={`${Style.textField}`}
                type="text"
                name="nameDrug"
              />

              {btnNameDrug == 'nameDrug' ? (
                <Select setFieldValue={setFieldValue} />
              ) : (
                ''
              )}
              <button
                className={Style.btn}
                onClick={() => {
                  setBtnNameDrug('nameDrug');
                }}
                type="button"
              >
                ...
              </button>
            </li>
            <li>
              <label className={Style.description}>ilość</label>
              <Field
                className={`${Style.textField} ${Style.fieldQuantity}`}
                type="number"
                name="quantity"
              />
            </li>
            <li>
              <label className={Style.description}>j.m.</label>
              <Field
                className={`${Style.textField} ${Style.fieldQuantity}`}
                type="text"
                name="unitOfMeasure"
              />

              <button
                className={Style.btn}
                onClick={() => setBtnNameDrug('unitOfMeasure')}
                type="button"
              >
                ...
              </button>
              {btnNameDrug == 'unitOfMeasure' ? (
                <Select setFieldValue={setFieldValue} />
              ) : (
                ''
              )}
            </li>
            <li>
              <label className={Style.description}>Droga podania</label>
              <Field className={Style.textField} type="text" name="unit" />

              <button
                className={Style.btn}
                onClick={() => setBtnNameDrug('unit')}
                type="button"
              >
                ...
              </button>
              {btnNameDrug == 'unit' ? (
                <Select setFieldValue={setFieldValue} />
              ) : (
                ''
              )}
            </li>
            <button
              className={`${Style.btn} ${Style.btnDrugs} `}
              onClick={() => {
                submitForm();
              }}
              type="button"
            >
              Dodaj
            </button>
          </ul>
        </form>
      )}
    </Formik>
  );
};

const AppliedDrugs = () => {
  const appContext = useAppContext();

  const ShowMedicineList = () => {
    if (appContext.appliedDrugs.noDrugs) return <p> Nie podano leków</p>;
    if (appContext.appliedDrugs.medicaments.length === 0) return;
    const medicine = appContext.appliedDrugs.medicaments.map((e, index) => {
      return (
        <li key={index}>
          <p>
            {e.lb}. {e.nameDrug} {e.quantity}
            {e.unitOfMeasure} {e.unit}
          </p>
        </li>
      );
    });
    return (
      <>
        <ul>{medicine}</ul>
      </>
    );
  };

  return (
    <form>
      <h2>Zastosowane leki</h2>

      <AddMedicine />
      <div className={Style.wrapListMedicines}>
        <p className={Style.listDescription}>
          lp. nazwa ilość j.m. droga podania
        </p>
        <ShowMedicineList />
      </div>
      <FormNavigation />
    </form>
  );
};

export default AppliedDrugs;
