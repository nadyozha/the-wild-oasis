import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
    props.type === "white"
      ? "var(--color-grey-100)"
      : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, type, onChange }) {
  return (
    <StyledSelect
      value={value}
      type={type}
      onChange={onChange}>
      {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
    </StyledSelect>
  )
}

export default Select;

