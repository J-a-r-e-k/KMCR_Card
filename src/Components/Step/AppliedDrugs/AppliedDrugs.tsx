//
import Style from './AppliedDrugs.module.scss';
import { Formik, Field, FormikHelpers, FieldProps } from 'formik';
import React, { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { nameDrug, unit, unitOfMeasure } from './ButtonList';
import TextField from '@mui/material/TextField';
import { SxProps } from '@mui/material';
// import { SxProps, useMediaQuery } from '@mui/material';



const drugName: SxProps = {

  margin: '5px',
  flexGrow: 1,
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ddd',
    fontSize: '1.2rem',
  },
  '& fieldset': {
    borderColor: '#333',
  },
  '& .MuiInputBase-input': {
    padding: '10px ',
  }


}

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
    // if (btnNameDrug === '') return
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

        </li >
      );
    });

    return (
      <>
        <div className={`${Style.wrapSelect} ${Style[styleName]}`}>
          <ul className={`${Style.select} `}>
            {selectionList}
          </ul>
        </div>

        <div
          className={Style.offSelect}
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
      {({ handleSubmit, submitForm, setFieldValue, resetForm }) => (
        <form className={Style.wrapFormDrugs} onSubmit={handleSubmit}>
          <button
            className={`${Style.btn} ${Style.btnNoDrugs} ${appContext.appliedDrugs.noDrugs ? Style.btnNoDrugsActive : ''
              } `}
            type="button"
            onClick={() => {
              resetForm();
              appContext.setAppliedDrugs({
                ...appContext.appliedDrugs,
                noDrugs: !appContext.appliedDrugs.noDrugs,
                medicaments: [],
              });

            }}
          >
            Nie podano leków
          </button>

          <ul className={`${Style.wrapMedicine}  ${appContext.appliedDrugs.noDrugs && Style.disabledElement}`} >
            <li className={Style.wrapNameDrugs} >
              <Field
                name="nameDrug"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField  {...field} label="Nazwa leku" variant="outlined" size={'small'} sx={drugName}
                  />
                )}
              </Field>

              <button
                className={Style.btn}
                onClick={() => {
                  setBtnNameDrug('nameDrug');
                }}
                type="button"
              >
                ...

              </button>
              {btnNameDrug == 'nameDrug' && <Select setFieldValue={setFieldValue} />}
            </li>
            <li>
              <Field
                name="quantity"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField
                    {...field} label="ilość" variant="outlined" type="number" size="small" sx={{ ...drugName, width: '60px' }}
                  />
                )}
              </Field>
            </li>
            <li>
              <label className={Style.description}>j.m.</label>
              <Field
                name="unitOfMeasure"
              >
                {({ field }: FieldProps<string>) => (
                  <TextField {...field} label="j.m." variant="outlined" size="small" sx={{ ...drugName, width: '60px' }}
                    onFocus={() => setBtnNameDrug('unitOfMeasure')}
                  />
                )}
              </Field>

              {/* <button
                className={Style.btn}
                onClick={() => setBtnNameDrug('unitOfMeasure')}
                type="button"
              >
                ...
              </button> */}
              {btnNameDrug == 'unitOfMeasure' && <Select setFieldValue={setFieldValue} />}

            </li>
            <li>
              <label className={Style.description}>Droga podania</label>
              <Field
                name="unit"

              >
                {({ field }: FieldProps<string>) => (
                  <TextField  {...field} label="Droga podania" variant="outlined" size="small" sx={{ ...drugName, width: '300px', maxWidth: '80%' }}
                    onFocus={() => setBtnNameDrug('unit')}
                  />
                )}
              </Field>
              {/* <button
                className={Style.btn}
                onClick={() => setBtnNameDrug('unit')}
                type="button"
              >
                ...
              </button> */}
              {btnNameDrug == 'unit' && <Select setFieldValue={setFieldValue} />}
            </li>
            <button
              className={`${Style.btn} ${Style.btnAddDrugs} `}
              onClick={() => {
                submitForm();
              }}
              type="button"
            >
              Dodaj
            </button>
          </ul>
        </form>
      )
      }
    </Formik >
  );
};


const ShowMedicineList = () => {
  const appContext = useAppContext();
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

const AppliedDrugs = () => {

  return (
    <form >
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
