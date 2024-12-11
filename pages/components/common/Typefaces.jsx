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

// export const Button = styled.button`
//     background-color: #fbeee0;
//     border: 2px solid #422800;
//     border-radius: 30px;
//     box-shadow: #422800 4px 4px 0 0;
//     color: #422800;
//     cursor: pointer;
//     display: inline-block;
//     font-weight: 600;
//     font-size: 18px;
//     padding: 0 18px;
//     line-height: 50px;
//     text-align: center;
//     text-decoration: none;
//     user-select: none;
//     -webkit-user-select: none;
//     touch-action: manipulation;

//     &:hover {
//         background-color: #fff;
//     }

//     &:active {
//         box-shadow: #422800 2px 2px 0 0;
//         transform: translate(2px, 2px);
//     }

//     @media (min-width: 768px) {
//         .register-button {
//             min-width: 120px;
//             padding: 0 25px;
//         }
//     }
// `;

export const Control = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${_var.space_M};
    background: ${_var.grayscale[50]};
    border-radius: ${_var.space_S};
    box-shadow: ${_var.cardShadowLarge};
    max-width: 600px;
`;

// FORM STYLE 
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${_var.space_M};
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: ${_var.grayscale[700]};
`;

export const Input = styled.input`
    padding: ${_var.space_S} ${_var.space_M};
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

export const SubmitButton = styled.button`
    width: 100%;
    padding: ${_var.space_S};
    font-size: 1.2rem;
    font-weight: bold;
    background: ${_var.primary};
    color: ${_var.grayscale[50]};
    border: none;
    border-radius: ${_var.space_XS};
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: ${_var.primaryDark};
    }

    &:disabled {
        background: ${_var.grayscale[300]};
        cursor: not-allowed;
    }
`;