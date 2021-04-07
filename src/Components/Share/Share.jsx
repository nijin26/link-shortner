import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import AppShare from "../../styles/components/Share";

const Share = ({ title, description, target }) => {
  return (
    <AppShare>
      <a
        target="_blank"
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${target}`}
      >
        <LinkedinIcon size={36} round={true} />
      </a>
      <TwitterShareButton via="bitlyclone" title={title} url={target}>
        <TwitterIcon size={36} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton title={title} url={target}>
        <WhatsappIcon size={36} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton title={title} url={target}>
        <TelegramIcon size={36} round={true} />
      </TelegramShareButton>
      <FacebookShareButton url={target} quote={title}>
        <FacebookIcon size={36} round={true} />
      </FacebookShareButton>
    </AppShare>
  );
};

export default Share;
