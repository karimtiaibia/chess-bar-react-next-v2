import styled from "styled-components";
import * as _var from "../../../styles/variables";

export const H1 = styled.h1`
    margin-bottom: ${_var.space_S};
`;

export const H2 = styled.h1`
    margin-top: ${_var.space_S};
`;

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

export const ActionTd = styled.div`
    display: flex;
    gap: ${_var.space_S};
`;

export const Button = styled.button`
    padding: ${_var.space_XS} ${_var.space_S};
    background: ${_var.primary};
    color: ${_var.grayscale[50]};
    border: none;
    border-radius: ${_var.space_XS};
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 150ms ease-in-out;

    &:hover {
        background: ${_var.primaryDark};
    }
`;