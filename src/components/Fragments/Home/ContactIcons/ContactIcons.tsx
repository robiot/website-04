import { ContactData } from "@lib/constants";
import { copyMToClipboard } from "@lib/utils";
import { FC } from "react";
import { FaEnvelope, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

export const ContactIcons: FC = () => {
    return (
        <Wrapper>
            {ContactData.map((item) => {
                if (item.name == "LinkedIn") {
                    return;
                }

                return (
                    <Icon
                        key={`contact_icon_${item.name}`}
                        href={item.to}
                        target="_blank"
                        aria-label={item.name}
                    >
                        {item.name == "Github" && <FaGithub />}
                        {item.name == "Youtube" && <FaYoutube />}
                        {item.name == "Twitter" && <FaTwitter />}
                    </Icon>
                );
            })}
            <IconNoAnchor
                onClick={async () => {
                    await copyMToClipboard();
                }}
                aria-label="Mail"
            >
                <FaEnvelope />
            </IconNoAnchor>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 30px;
`;

const IconNoAnchor = styled.button`
    display: flex;
    align-items: center;

    padding: 0;
    margin: 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: ${({ theme }) => theme.icon.size.normal};
    color: ${({ theme }) => theme.palette.primary.fg};
`;

const Icon = styled.a`
    display: flex;
    max-width: fit-content;
    align-items: center;
    font-size: ${({ theme }) => theme.icon.size.normal};
    color: ${({ theme }) => theme.palette.primary.fg};
`;
