import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

export const Dropdown: FC<{
    dropdownActive: boolean;
    setDropdownActive: Dispatch<SetStateAction<boolean>>;
}> = (properties) => {
    return (
        <Wrapper className={properties.dropdownActive ? "open" : ""}>
            <DropdownItemsWrapper>
                <DropdownItem
                    onClick={() => {
                        // setDropdown(false);
                        window.scrollTo(0, 0);
                        // Router.push("/");
                    }}
                >
                    Home
                </DropdownItem>
            </DropdownItemsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.palette.primary.bg.to};
    height: 100%;
    top: -100%;
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    transition: top 0.3s ease-in;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }
    &.open {
        top: 0;
    }
    & * {
        transition: opacity 0.6s ease-out;
        opacity: 0;
    }
    &.open * {
        opacity: 1;
    }
`;

const DropdownItemsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        padding-top: 0;
        justify-content: center;
    }
`;

const DropdownItem = styled.button`
    padding: 15px 0 15px 2rem;
    height: fit-content;
    font-weight: 700;
    font-size: calc(1.5rem + 0.5vh);
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 2.5rem;
        padding-left: 4rem;
    }
`;
