import React from 'react';
import {StyledContact, StyledSearchBar, StyledPerson} from './Contact.Styled';

// Import == Material UI Icons
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';

const Contact = () => {
  return (
    <StyledContact>
      <div id="contact-header">
        <div id="contact-header-left">
        <IconButton>
          <Avatar />
        </IconButton>
        <h1>Messenger</h1>
        </div>
        <div id="contact-header-right">
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </div>
      </div>
      <StyledSearchBar>
        <IconButton>
          <SearchIcon />
        </IconButton>
          <input type="search" name="" id="" placeholder="Rechercher" />
      </StyledSearchBar>
      <StyledPerson>
          <IconButton>
            <Avatar />
          </IconButton>
          <div id="contact-person-name">
            <h2>David Chmarzynski</h2>
            <p>Je suis le dernier message... ⸱ mar. <Avatar /></p>
          </div>
      </StyledPerson>
    </StyledContact>
  );
};

export default Contact;