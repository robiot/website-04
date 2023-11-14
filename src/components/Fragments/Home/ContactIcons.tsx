import { ContactData } from "@utils/constants";
import { copyMToClipboard } from "@utils/mail";
import { FC } from "react";
import { FaEnvelope, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const ContactIcons: FC = () => {
    return (
        <div className="flex gap-6 mt-2">
            {ContactData.map((item) => {
                if (item.name == "LinkedIn") {
                    return;
                }

                return (
                    <a
                        key={`contact_icon_${item.name}`}
                        href={item.to}
                        target="_blank"
                        className="hover:text-black/70"
                        aria-label={item.name}
                    >
                        {item.name == "Github" && <FaGithub size={28} />}
                        {item.name == "Youtube" && <FaYoutube size={28} />}
                        {item.name == "Twitter" && <FaXTwitter size={28} />}
                    </a>
                );
            })}
            <button
                onClick={async () => {
                    await copyMToClipboard();
                }}
                aria-label="Mail"
                className="hover:text-black/70"
            >
                <FaEnvelope size={28} />
            </button>
        </div>
    );
};
