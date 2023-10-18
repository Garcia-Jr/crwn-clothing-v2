import { Group, Input, FormInputLabel } from './form-input.styles';

const FormInput = ({ label, htmlFor, ...rest }) => {
  return (
    <Group>
      <Input {...rest} />
      {label && (
        <FormInputLabel $shrink={rest.value.length} htmlFor={htmlFor}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
