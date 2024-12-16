import styled from "styled-components";
import * as _var from "../../../styles/variables";

export const H1 = styled.h1`
    margin-bottom: ${_var.space_S};
`;

export const H2 = styled.h1`
    margin-top: ${_var.space_S};
`;

// TABLE STYLE
export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${_var.space_L};
    margin-top: ${_var.space_M};
    padding: ${_var.space_M};
    background: ${_var.grayscale[50]};
    border-radius: ${_var.space_M};
    box-shadow: ${_var.cardShadowLarge};
    overflow-x: auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background: ${_var.grayscale[50]};
    border-radius: ${_var.space_S};
    overflow: hidden;

    & caption {
        padding: ${_var.space_S};
        font-size: 1.5rem;
        font-weight: bold;
        color: ${_var.primaryDark};
        text-align: left;
    }
`;

export const Thead = styled.thead`
    background: ${_var.primary};
    color: ${_var.grayscale[50]};
    text-transform: uppercase;
    font-size: 0.9rem;
`;

export const Th = styled.th`
    padding: ${_var.space_S};
    text-align: left;
    font-weight: 600;
`;

export const Tr = styled.tr`
    &:nth-child(even) {
        background: ${_var.grayscale[100]};
    }

    &:hover {
        background: ${_var.primaryLight};
        transition: background 150ms ease-in-out;
    }
`;

export const Td = styled.td`
    padding: ${_var.space_S};
    color: ${_var.grayscale[800]};
    border-bottom: 1px solid ${_var.grayscale[200]};
    font-size: 0.9rem;

    &:first-child {
        font-weight: bold;
    }
`;

export const Control = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${_var.space_M};
    background: ${_var.grayscale[50]};
    border-radius: ${_var.space_S};
    box-shadow: ${_var.cardShadowLarge};
    max-width: 600px;
`;

export const Tbody = styled.tbody`
    & > tr {
        background-color: ${_var.grayscale[50]};
        transition: background-color 0.2s ease;

        &:nth-child(even) {
            background-color: ${_var.grayscale[100]};
        }

        &:hover {
            background-color: ${_var.primaryLight};
        }
    }

    & td {
        padding: ${_var.space_M};
        color: ${_var.grayscale[900]};
        text-align: left;
        border-bottom: 1px solid ${_var.grayscale[200]};
        vertical-align: middle;

        &:last-child {
            text-align: center;
        }
    }
`;

// FORM STYLE 
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${_var.space_M};
    height: 500px;
    width: 500px;
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: ${_var.grayscale[700]};
`;

export const Input = styled.input`
    padding: ${_var.space_S};
    border: 1px solid ${_var.grayscale[300]};
    border-radius: ${_var.space_XS};
    background: ${_var.grayscale[100]};
    font-size: 1rem;
    color: ${_var.grayscale[900]};
    outline: none;
    transition: border-color 0.2s ease-in-out;

    &:focus {
        border-color: ${_var.primary};
        box-shadow: 0 0 0 3px ${_var.primaryLight};
    }

    &::placeholder {
        color: ${_var.grayscale[500]};
    }
`;

export const FileInput = styled(Input)`
    padding: ${_var.space_S};
`;