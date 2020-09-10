import React from 'react';
import { StyledMessage, StyledMessageHeader, StyledMessageFooter, StyledPersonalMessage, StyledMessageSection, StyledContactMessage } from './Message.Styled';

// Import == Material UI Icons
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, IconButton } from '@material-ui/core';

const Message = () => {
  return (
      <StyledMessage>
        <StyledMessageHeader>
        <div id="message-header-left">
          <IconButton>
            <Avatar />
          </IconButton>
          <div id="message-information">
            <h2>David Chmarzynski</h2>
            <p>Actuellement en ligne</p>
          </div>
        </div>
        <div id="message-header-right">
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <IconButton>
            <VideocamIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        </StyledMessageHeader>
        <StyledMessageSection>
          <StyledContactMessage>
            <span>15 AOÛT, 13:14</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi numquam necessitatibus impedit cum autem rerum soluta ipsam nisi aspernatur.</p>
          </StyledContactMessage>
          <StyledPersonalMessage>
            <span>15 AOÛT, 13:15</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at impedit commodi rem expedita fuga distinctio labore temporibus quam? Quia animi natus quidem labore impedit soluta? Autem optio, dolorem unde, eligendi distinctio modi explicabo voluptas tempora vel magnam, tempore quos ad doloribus facilis suscipit quo. Magnam enim doloremque qui commodi.</p>
          </StyledPersonalMessage>
        </StyledMessageSection>
        <StyledMessageFooter>
          <IconButton>
            <AddIcon />
          </IconButton>
          <div id="message-footer-input">
            {/* <input type="text" name="" id="" rows="5" placeholder="Ecrivez un message..." /> */}
            <textarea name="" id="" cols="20" rows="1" wrap="hard" placeholder="Ecrivez votre message..."></textarea>
            <IconButton>
              <EmojiEmotionsIcon />
            </IconButton>
          </div>
          <IconButton>
            <SendIcon />
          </IconButton>
        </StyledMessageFooter>
      </StyledMessage>
  );
};

export default Message;