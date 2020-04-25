const formFieldTypes = {
    INPUT_TEXT: 1001,
    DATE_PICKER: 1002,
    INPUT_SWITCH: 1003,
    PLAIN_PICKER: 1004,
    SUB_HEADER: 1005
}

const dynamicFormConfig = {
    formGroups: [
        {
            groupTitle: 'Personal Details',
            formFields: [
                {
                    fieldName: 'Personal Details',
                    type: formFieldTypes.SUB_HEADER,
                    key: 'subheader'
                },
                {
                    fieldName: 'First Name',
                    type: formFieldTypes.INPUT_TEXT,
                    placeHolderText: 'Enter first name',
                    isRequired: true,
                    validateRegex: '',
                    min: 5,
                    max: 25,
                    key: 'firstname'
                },
                {
                    fieldName: 'Last Name',
                    type: formFieldTypes.INPUT_TEXT,
                    placeHolderText: 'Enter last name',
                    isRequired: false,
                    validateRegex: '',
                    min: 5,
                    max: 20,
                    key: 'lastname'
                },
                {
                    fieldName: 'Email',
                    type: formFieldTypes.INPUT_TEXT,
                    isRequired: true,
                    placeHolderText: 'Enter email',
                    validateRegex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    key: 'email'
                },
                {
                    fieldName: 'Gender',
                    type: formFieldTypes.PLAIN_PICKER,
                    isRequired: false,
                    placeHolderText: 'Select gender',
                    pickerValues: [
                        {label: 'Male', value: 'male'},
                        {label: 'Female', value: 'female'}
                    ],
                    key: 'gender'
                },
                {
                    fieldName: 'Are You Physically Challenged?',
                    type: formFieldTypes.INPUT_SWITCH,
                    isRequired: true,
                    key: 'phyciallychallenged'
                }
            ]
        },
        {
            groupTitle: 'Degree Details',
            formFields: [
                {
                    fieldName: 'Degree Details',
                    type: formFieldTypes.SUB_HEADER,
                    key: 'subheader'
                },
                {
                    fieldName: 'Degree',
                    type: formFieldTypes.PLAIN_PICKER,
                    placeHolderText: 'Select degree',
                    isRequired: true,
                    pickerValues: [
                        {label: 'Bachelor', value: 'Bachelor'},
                        {label: 'Master', value: 'Master'},
                        {label: 'PhD', value: 'PhD'}
                    ],
                    key: 'degree'
                },
                {
                    fieldName: 'College/University Name',
                    type: formFieldTypes.INPUT_TEXT,
                    placeHolderText: 'Enter college/university name',
                    isRequired: false,
                    validateRegex: '',
                    min: 10,
                    max: 40,
                    key: 'collegename'
                },
                {
                    fieldName: 'Marks in Percentage',
                    type: formFieldTypes.INPUT_TEXT,
                    isRequired: false,
                    placeHolderText: 'Enter marks in percentage',
                    validateRegex: '',
                    key: 'marksinpercentage'
                },
                {
                    fieldName: 'Passing year',
                    type: formFieldTypes.INPUT_TEXT,
                    isRequired: true,
                    placeHolderText: 'Enter passing year',
                    validateRegex: '',
                    min: 4,
                    max: 4,
                    key: 'passingyear'
                }
            ]
        }
    ]
};

export const formFieldTypesGlobal = formFieldTypes;

export default dynamicFormConfig;