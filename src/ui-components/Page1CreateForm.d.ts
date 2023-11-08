/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Page1CreateFormInputValues = {
    name1?: string;
    name2?: string;
    namekana1?: string;
    namekana2?: string;
    birthday1?: number;
    birthday2?: number;
    birthday3?: number;
    sexuality?: number;
};
export declare type Page1CreateFormValidationValues = {
    name1?: ValidationFunction<string>;
    name2?: ValidationFunction<string>;
    namekana1?: ValidationFunction<string>;
    namekana2?: ValidationFunction<string>;
    birthday1?: ValidationFunction<number>;
    birthday2?: ValidationFunction<number>;
    birthday3?: ValidationFunction<number>;
    sexuality?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Page1CreateFormOverridesProps = {
    Page1CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name1?: PrimitiveOverrideProps<TextFieldProps>;
    name2?: PrimitiveOverrideProps<TextFieldProps>;
    namekana1?: PrimitiveOverrideProps<TextFieldProps>;
    namekana2?: PrimitiveOverrideProps<TextFieldProps>;
    birthday1?: PrimitiveOverrideProps<TextFieldProps>;
    birthday2?: PrimitiveOverrideProps<TextFieldProps>;
    birthday3?: PrimitiveOverrideProps<TextFieldProps>;
    sexuality?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Page1CreateFormProps = React.PropsWithChildren<{
    overrides?: Page1CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Page1CreateFormInputValues) => Page1CreateFormInputValues;
    onSuccess?: (fields: Page1CreateFormInputValues) => void;
    onError?: (fields: Page1CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Page1CreateFormInputValues) => Page1CreateFormInputValues;
    onValidate?: Page1CreateFormValidationValues;
} & React.CSSProperties>;
export default function Page1CreateForm(props: Page1CreateFormProps): React.ReactElement;
