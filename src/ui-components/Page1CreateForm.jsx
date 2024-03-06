/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
//import { Page1 } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function Page1CreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    name1: "",
    name2: "",
    namekana1: "",
    namekana2: "",
    birthday1: "",
    birthday2: "",
    birthday3: "",
    sexuality: "",
  };
  const [name1, setName1] = React.useState(initialValues.name1);
  const [name2, setName2] = React.useState(initialValues.name2);
  const [namekana1, setNamekana1] = React.useState(initialValues.namekana1);
  const [namekana2, setNamekana2] = React.useState(initialValues.namekana2);
  const [birthday1, setBirthday1] = React.useState(initialValues.birthday1);
  const [birthday2, setBirthday2] = React.useState(initialValues.birthday2);
  const [birthday3, setBirthday3] = React.useState(initialValues.birthday3);
  const [sexuality, setSexuality] = React.useState(initialValues.sexuality);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName1(initialValues.name1);
    setName2(initialValues.name2);
    setNamekana1(initialValues.namekana1);
    setNamekana2(initialValues.namekana2);
    setBirthday1(initialValues.birthday1);
    setBirthday2(initialValues.birthday2);
    setBirthday3(initialValues.birthday3);
    setSexuality(initialValues.sexuality);
    setErrors({});
  };
  const validations = {
    name1: [],
    name2: [],
    namekana1: [],
    namekana2: [],
    birthday1: [],
    birthday2: [],
    birthday3: [],
    sexuality: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.xs.value}
      columnGap={tokens.space.large.value}
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name1,
          name2,
          namekana1,
          namekana2,
          birthday1,
          birthday2,
          birthday3,
          sexuality,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Page1(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "Page1CreateForm")}
      {...rest}
    >
      <TextField
        label="Name1"
        isRequired={false}
        isReadOnly={false}
        value={name1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name1: value,
              name2,
              namekana1,
              namekana2,
              birthday1,
              birthday2,
              birthday3,
              sexuality,
            };
            const result = onChange(modelFields);
            value = result?.name1 ?? value;
          }
          if (errors.name1?.hasError) {
            runValidationTasks("name1", value);
          }
          setName1(value);
        }}
        onBlur={() => runValidationTasks("name1", name1)}
        errorMessage={errors.name1?.errorMessage}
        hasError={errors.name1?.hasError}
        {...getOverrideProps(overrides, "name1")}
      ></TextField>
      <TextField
        label="Name2"
        isRequired={false}
        isReadOnly={false}
        value={name2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name1,
              name2: value,
              namekana1,
              namekana2,
              birthday1,
              birthday2,
              birthday3,
              sexuality,
            };
            const result = onChange(modelFields);
            value = result?.name2 ?? value;
          }
          if (errors.name2?.hasError) {
            runValidationTasks("name2", value);
          }
          setName2(value);
        }}
        onBlur={() => runValidationTasks("name2", name2)}
        errorMessage={errors.name2?.errorMessage}
        hasError={errors.name2?.hasError}
        {...getOverrideProps(overrides, "name2")}
      ></TextField>
      <TextField
        label="Namekana1"
        isRequired={false}
        isReadOnly={false}
        value={namekana1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name1,
              name2,
              namekana1: value,
              namekana2,
              birthday1,
              birthday2,
              birthday3,
              sexuality,
            };
            const result = onChange(modelFields);
            value = result?.namekana1 ?? value;
          }
          if (errors.namekana1?.hasError) {
            runValidationTasks("namekana1", value);
          }
          setNamekana1(value);
        }}
        onBlur={() => runValidationTasks("namekana1", namekana1)}
        errorMessage={errors.namekana1?.errorMessage}
        hasError={errors.namekana1?.hasError}
        {...getOverrideProps(overrides, "namekana1")}
      ></TextField>
      <TextField
        label="Namekana2"
        isRequired={false}
        isReadOnly={false}
        value={namekana2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name1,
              name2,
              namekana1,
              namekana2: value,
              birthday1,
              birthday2,
              birthday3,
              sexuality,
            };
            const result = onChange(modelFields);
            value = result?.namekana2 ?? value;
          }
          if (errors.namekana2?.hasError) {
            runValidationTasks("namekana2", value);
          }
          setNamekana2(value);
        }}
        onBlur={() => runValidationTasks("namekana2", namekana2)}
        errorMessage={errors.namekana2?.errorMessage}
        hasError={errors.namekana2?.hasError}
        {...getOverrideProps(overrides, "namekana2")}
      ></TextField>
      <TextField
        label="Birthday1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={birthday1}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name1,
              name2,
              namekana1,
              namekana2,
              birthday1: value,
              birthday2,
              birthday3,
              sexuality,
            };
            const result = onChange(modelFields);
            value = result?.birthday1 ?? value;
          }
          if (errors.birthday1?.hasError) {
            runValidationTasks("birthday1", value);
          }
          setBirthday1(value);
        }}
        onBlur={() => runValidationTasks("birthday1", birthday1)}
        errorMessage={errors.birthday1?.errorMessage}
        hasError={errors.birthday1?.hasError}
        {...getOverrideProps(overrides, "birthday1")}
      ></TextField>
      <TextField
        label="Birthday2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={birthday2}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name1,
              name2,
              namekana1,
              namekana2,
              birthday1,
              birthday2: value,
              birthday3,
              sexuality,
            };
            const result = onChange(modelFields);
            value = result?.birthday2 ?? value;
          }
          if (errors.birthday2?.hasError) {
            runValidationTasks("birthday2", value);
          }
          setBirthday2(value);
        }}
        onBlur={() => runValidationTasks("birthday2", birthday2)}
        errorMessage={errors.birthday2?.errorMessage}
        hasError={errors.birthday2?.hasError}
        {...getOverrideProps(overrides, "birthday2")}
      ></TextField>
      <TextField
        label="Birthday3"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={birthday3}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name1,
              name2,
              namekana1,
              namekana2,
              birthday1,
              birthday2,
              birthday3: value,
              sexuality,
            };
            const result = onChange(modelFields);
            value = result?.birthday3 ?? value;
          }
          if (errors.birthday3?.hasError) {
            runValidationTasks("birthday3", value);
          }
          setBirthday3(value);
        }}
        onBlur={() => runValidationTasks("birthday3", birthday3)}
        errorMessage={errors.birthday3?.errorMessage}
        hasError={errors.birthday3?.hasError}
        {...getOverrideProps(overrides, "birthday3")}
      ></TextField>
      <TextField
        label="Sexuality"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sexuality}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name1,
              name2,
              namekana1,
              namekana2,
              birthday1,
              birthday2,
              birthday3,
              sexuality: value,
            };
            const result = onChange(modelFields);
            value = result?.sexuality ?? value;
          }
          if (errors.sexuality?.hasError) {
            runValidationTasks("sexuality", value);
          }
          setSexuality(value);
        }}
        onBlur={() => runValidationTasks("sexuality", sexuality)}
        errorMessage={errors.sexuality?.errorMessage}
        hasError={errors.sexuality?.hasError}
        {...getOverrideProps(overrides, "sexuality")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.large.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
