import PropTypes from 'prop-types';
import {Section, StyledForm, Label, Input, Title } from './styled'
import { Formik } from 'formik';

export const FilterForm = ({ label, onChange }) => {
  const initialValues = {
    filter: '',
  };

    return (
        <Section>
            <Title>Contacts</Title>
        <Formik initialValues={initialValues}>
      <StyledForm>
        <Label htmlFor="filter">{label}</Label>
        <Input
          type="text"
          id="filter"
          name="filter"
          onChange={onChange}
          value={onChange.filter}
        />
      </StyledForm>
    </Formik>
      </Section>
    );
};

FilterForm.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};