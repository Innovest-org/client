import React from 'react';
import './style.css';

export default function Messages() {
    return (
      <div className="chat-app-wrapper">
        {/* Sidebar */}
        <div className="sidebar-section">
          {/* Search Bar */}
          <div className="search-bar-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search" />
          </div>
  
          {/* Groups Section */}
          <div className="group-list-section">
            <h6>Groups</h6>
            <div className="group-item">
              <img
                src={require("../../../assets/a_user04_avatar.png")}
                alt="Friends Forever"
              />
              <div className="group-info">
                <p>Friends Forever </p>
                <small>
                  Hahahaha!
                  <span className="status-indicator unread ms-2">
                    <span className="notification-badge">2</span>{" "}
                  </span>
                </small>
                <span className="message-time">Today, 3:05pm</span>
              </div>
            </div>
            <div className="group-item">
              <img
                src={require("../../../assets/a_user03_avatar.png")}
                alt="Mera Gang"
              />
              <div className="group-info">
                <p>Mera Gang </p>
                <small>
                  Kyuuuu????
                  <span className="status-indicator unread ms-2">
                    <span className="notification-badge">3</span>
                  </span>
                </small>
                <span className="message-time">Today, 5:30pm</span>
              </div>
            </div>
          </div>

          <div className="people-list-section">
            <h6>People</h6>
            <div className="person-item">
              <img
                src={require("../../../assets/a_user02_avatar.png")}
                alt="Anil"
              />
              <div className="person-info">
                <p>Anil</p>
                <small>
                  April fool's day{" "}
                  <span className="status-indicator read ms-2">
                    <i className="fas fa-check"></i>
                    <i className="fas fa-check"></i>
                  </span>
                </small>
                <span className="message-time">Today, 3:32pm</span>
              </div>
            </div>
            <div className="person-item">
              <img
                src={require("../../../assets/a_user01_avatar.png")}
                alt="Chuuthiya"
              />
              <div className="person-info">
                <p>Chuuthiya</p>
                <small>
                  Baag
                  <span className="status-indicator read ms-2">
                    <i className="fas fa-check"></i>
                    <i className="fas fa-check"></i>
                  </span>
                </small>
                <span className="message-time">Today, 1:50pm</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Chat Section */}
        <div className="chat-section-wrapper">
          <div className="chat-header">
            <div className="chat-header-left">
              <img
                src={require("../../../assets/a_user01_avatar.png")}
                alt="Anil"
              />
              <div className="chat-header-info">
                <h5>Anil</h5>
                <p>Online - Last seen 2.02pm</p>
              </div>
            </div>
            <i className="fas fa-ellipsis-vertical options-icon"></i>
          </div>
  
          <div className="chat-messages-section">
            <div className="received-message">
              <p>Hey There!</p>
              <small className="chat-time">Today, 3:30pm</small>
            </div>
            <div className="received-message">
              <p>How are you?</p>
              <small className="chat-time">Today, 3:33pm</small>
            </div>
            <div className="sent-message">
              <p>Hello!</p>
              <small className="chat-time">Today, 3:35pm</small>
            </div>
            <div className="sent-message">
              <p>I am fine and how are you?</p>
              <small className="chat-time">Today, 3:39pm</small>
            </div>
            <div className="received-message">
              <p>I am doing well, can we meet tomorrow?</p>
              <small className="chat-time">Today, 3:42pm</small>
            </div>
            <div className="sent-message">
              <p>Yes, Sure!</p>
              <small className="chat-time">Today, 3:45pm</small>
            </div>
          </div>
  
          {/* Chat Input */}
          <div className="chat-input-wrapper">
            <button className="icon-button">
              <i className="fas fa-paperclip"></i>{" "}
              {/* Paperclip icon for sending files */}
            </button>
            <input type="text" placeholder="Type your message here..." />
  
            <div className="input-icons">
              <button className="icon-button">
                <i className="fas fa-microphone"></i>{" "}
                {/* Microphone icon for recording */}
              </button>
  
              <button className="icon-button">
                <i className="fas fa-camera"></i>{" "}
                {/* Camera icon for sending photos */}
              </button>
              <button className="send-button">
                <i className="fas fa-paper-plane"></i>{" "}
                {/* Paper plane icon for sending the message */}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
