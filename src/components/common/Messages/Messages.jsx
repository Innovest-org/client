import React from "react";
import "./style.css";

export default function Messages() {
  return (
    <div className="messages-chat-app">
      {/* Sidebar */}
      <div className="messages-sidebar">
        {/* Search Bar */}
        <div className="messages-search-bar">
          <i className="fas fa-search messages-search-icon"></i>
          <input type="text" placeholder="Search" />
        </div>

        {/* Groups Section */}
        <div className="messages-group-list">
          <h6>Groups</h6>
          <div className="messages-group-item">
            <img
              src={require("../../../assets/a_user04_avatar.png")}
              alt="Friends Forever"
            />
            <div className="messages-group-info">
              <p>Friends Forever</p>
              <small>
                Hahahaha!
                <span className="messages-status-indicator unread ms-2">
                  <span className="messages-notification-badge">2</span>{" "}
                </span>
              </small>
              <span className="messages-message-time">Today, 3:05pm</span>
            </div>
          </div>
          <div className="messages-group-item">
            <img
              src={require("../../../assets/a_user03_avatar.png")}
              alt="Mera Gang"
            />
            <div className="messages-group-info">
              <p>Mera Gang</p>
              <small>
                Kyuuuu????
                <span className="messages-status-indicator unread ms-2">
                  <span className="messages-notification-badge">3</span>
                </span>
              </small>
              <span className="messages-message-time">Today, 5:30pm</span>
            </div>
          </div>
        </div>

        {/* People Section */}
        <div className="messages-people-list">
          <h6>People</h6>
          <div className="messages-person-item">
            <img
              src={require("../../../assets/a_user02_avatar.png")}
              alt="Anil"
            />
            <div className="messages-person-info">
              <p>Anil</p>
              <small>
                April fool's day{" "}
                <span className="messages-status-indicator read ms-2">
                  <i className="fas fa-check"></i>
                  <i className="fas fa-check"></i>
                </span>
              </small>
              <span className="messages-message-time">Today, 3:32pm</span>
            </div>
          </div>
          <div className="messages-person-item">
            <img
              src={require("../../../assets/a_user01_avatar.png")}
              alt="Chuuthiya"
            />
            <div className="messages-person-info">
              <p>Chuuthiya</p>
              <small>
                Baag
                <span className="messages-status-indicator read ms-2">
                  <i className="fas fa-check"></i>
                  <i className="fas fa-check"></i>
                </span>
              </small>
              <span className="messages-message-time">Today, 1:50pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="messages-chat-section">
        <div className="messages-chat-header">
          <div className="messages-chat-header-left">
            <img
              src={require("../../../assets/a_user01_avatar.png")}
              alt="Anil"
            />
            <div className="messages-chat-header-info">
              <h5>Anil</h5>
              <p>Online - Last seen 2.02pm</p>
            </div>
          </div>
          <i className="fas fa-ellipsis-vertical messages-options-icon"></i>
        </div>

        <div className="messages-chat-messages">
          <div className="messages-received-message">
            <p>Hey There!</p>
            <small className="messages-chat-time">Today, 3:30pm</small>
          </div>
          <div className="messages-received-message">
            <p>How are you?</p>
            <small className="messages-chat-time">Today, 3:33pm</small>
          </div>
          <div className="messages-sent-message">
            <p>Hello!</p>
            <small className="messages-chat-time">Today, 3:35pm</small>
          </div>
          <div className="messages-sent-message">
            <p>I am fine and how are you?</p>
            <small className="messages-chat-time">Today, 3:39pm</small>
          </div>
          <div className="messages-received-message">
            <p>I am doing well, can we meet tomorrow?</p>
            <small className="messages-chat-time">Today, 3:42pm</small>
          </div>
          <div className="messages-sent-message">
            <p>Yes, Sure!</p>
            <small className="messages-chat-time">Today, 3:45pm</small>
          </div>
        </div>

        <div className="messages-chat-input">
          <button className="messages-icon-button">
            <i className="fas fa-paperclip"></i>
          </button>
          <input type="text" placeholder="Type your message here..." />

          <div className="messages-input-icons">
            <button className="messages-icon-button">
              <i className="fas fa-microphone"></i>
            </button>

            <button className="messages-icon-button">
              <i className="fas fa-camera"></i>
            </button>
            <button className="messages-send-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
